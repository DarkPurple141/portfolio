/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-console */
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import { sendSms } from './twilio.js'
import {
  storePendingRequest,
  checkForResponse,
  getRequestById,
  clearPendingRequest,
  checkDuplicateSms,
  markSmsSent,
} from './store.js'

// How long to wait before returning (leave buffer for Vercel timeout)
const MAX_WAIT_MS = 55_000
const POLL_INTERVAL_MS = 1_000

function generateRequestId(): string {
  return `req_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
}

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function createMcpServer() {
  console.log('[sms-mcp:server] Creating MCP server instance')

  const server = new McpServer({
    name: 'sms-mcp',
    version: '1.0.0',
    description:
      'A MCP server for sending and receiving SMS messages from a human. Ask when the response requires human intervention.',
  })

  console.log('[sms-mcp:server] MCP server created with name: sms-mcp')

  // Tool: Ask a human via SMS and wait for response
  console.log('[sms-mcp:server] Registering tool: ask_human')
  server.registerTool(
    'ask_human',
    {
      description:
        'Send an SMS to a human and wait for their response. If no response is received within the timeout, returns a request_id that can be used to continue waiting.',
      inputSchema: {
        message: z.string().describe('The message to send via SMS'),
        request_id: z
          .string()
          .optional()
          .describe(
            'Optional request ID from a previous call to continue waiting for a response',
          ),
      },
    },
    async (args: { message: string; request_id?: string }) => {
      console.log('[sms-mcp:server] ask_human called with:', {
        message: args.message,
        request_id: args.request_id,
      })

      const { message, request_id } = args
      const targetPhone = process.env.TARGET_PHONE_NUMBER!
      console.log('[sms-mcp:server] Target phone configured:', !!targetPhone)

      let requestId = request_id

      // If continuing from a previous request, check if we already have a response
      if (requestId) {
        console.log(
          '[sms-mcp:server] Continuing from previous request:',
          requestId,
        )
        const existingResponse = await checkForResponse(requestId)
        if (existingResponse) {
          console.log(
            '[sms-mcp:server] Found existing response for request:',
            requestId,
          )
          await clearPendingRequest()
          return {
            content: [
              {
                type: 'text',
                text: JSON.stringify({
                  status: 'response_received',
                  response: existingResponse,
                }),
              },
            ],
          }
        }

        // Verify the request exists
        const existingRequest = await getRequestById(requestId)
        if (!existingRequest) {
          console.log(
            '[sms-mcp:server] Request not found or expired:',
            requestId,
          )
          return {
            content: [
              {
                type: 'text',
                text: JSON.stringify({
                  status: 'error',
                  error: `Request ${requestId} not found. It may have expired.`,
                }),
              },
            ],
            isError: true,
          }
        }
        console.log('[sms-mcp:server] Request exists, will continue polling')
      } else {
        // New request - check for duplicate first
        const existingRequestId = await checkDuplicateSms(message, targetPhone)
        if (existingRequestId) {
          console.log(
            '[sms-mcp:server] Duplicate SMS detected, using existing request:',
            existingRequestId,
          )
          requestId = existingRequestId
        } else {
          // Not a duplicate - send SMS
          requestId = generateRequestId()
          console.log('[sms-mcp:server] New request, generated ID:', requestId)

          try {
            console.log('[sms-mcp:server] Sending SMS to:', targetPhone)
            await sendSms({
              to: targetPhone,
              message: message,
            })
            console.log('[sms-mcp:server] SMS sent successfully')

            // Mark as sent for deduplication
            await markSmsSent(message, targetPhone, requestId)
          } catch (error) {
            console.error('[sms-mcp:server] Failed to send SMS:', error)
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify({
                    status: 'error',
                    error: `Failed to send SMS: ${error instanceof Error ? error.message : 'Unknown error'}`,
                  }),
                },
              ],
              isError: true,
            }
          }

          // Store the pending request
          console.log('[sms-mcp:server] Storing pending request:', requestId)
          await storePendingRequest({
            id: requestId,
            message,
            sentAt: Date.now(),
          })
          console.log('[sms-mcp:server] Pending request stored')
        }
      }

      // Poll for response
      console.log('[sms-mcp:server] Starting to poll for response...')
      const startTime = Date.now()
      let pollCount = 0
      while (Date.now() - startTime < MAX_WAIT_MS) {
        await sleep(POLL_INTERVAL_MS)
        pollCount++

        if (pollCount % 10 === 0) {
          console.log(
            `[sms-mcp:server] Still polling... (${pollCount} polls, ${Math.round((Date.now() - startTime) / 1000)}s elapsed)`,
          )
        }

        const response = await checkForResponse(requestId)
        if (response) {
          console.log(
            '[sms-mcp:server] Response received after',
            pollCount,
            'polls',
          )
          await clearPendingRequest()
          return {
            content: [
              {
                type: 'text',
                text: JSON.stringify({
                  status: 'response_received',
                  response,
                }),
              },
            ],
          }
        }
      }

      // Timeout - return request_id for continuation
      console.log(
        '[sms-mcp:server] Polling timeout reached, returning request_id for continuation',
      )
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              status: 'waiting',
              request_id: requestId,
              message:
                'No response received yet. Call this tool again with the same request_id to continue waiting.',
              waited_seconds: Math.round((Date.now() - startTime) / 1000),
            }),
          },
        ],
      }
    },
  )

  // Tool: Check the status of a pending SMS request
  console.log('[sms-mcp:server] Registering tool: check_sms_status')
  server.registerTool(
    'check_sms_status',
    {
      description:
        'Check if a response has been received for a pending SMS request',
      inputSchema: {
        request_id: z.string().describe('The request ID to check'),
      },
    },
    async (args: { request_id: string }) => {
      const { request_id } = args
      console.log('[sms-mcp:server] check_sms_status called for:', request_id)

      const request = await getRequestById(request_id)
      if (!request) {
        console.log(
          '[sms-mcp:server] check_sms_status: request not found:',
          request_id,
        )
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                status: 'not_found',
                error: 'Request not found or expired',
              }),
            },
          ],
          isError: true,
        }
      }

      if (request.response) {
        console.log(
          '[sms-mcp:server] check_sms_status: response found for:',
          request_id,
        )
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                status: 'response_received',
                response: request.response,
                responded_at: request.respondedAt,
              }),
            },
          ],
        }
      }

      console.log(
        '[sms-mcp:server] check_sms_status: still waiting for:',
        request_id,
      )
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              status: 'waiting',
              sent_at: request.sentAt,
              message: request.message,
            }),
          },
        ],
      }
    },
  )

  console.log('[sms-mcp:server] All tools registered')
  return server
}
