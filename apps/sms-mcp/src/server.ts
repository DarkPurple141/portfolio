/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import { sendSms } from './twilio.js'
import {
  storePendingRequest,
  checkForResponse,
  getRequestById,
  clearPendingRequest,
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
  const server = new McpServer({
    name: 'sms-mcp',
    version: '1.0.0',
    description:
      'A MCP server for sending and receiving SMS messages from a human. Ask when the response requires human intervention.',
  })

  // Tool: Ask a human via SMS and wait for response
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
      const { message, request_id } = args
      const targetPhone = process.env.TARGET_PHONE_NUMBER!

      let requestId = request_id

      // If continuing from a previous request, check if we already have a response
      if (requestId) {
        const existingResponse = await checkForResponse(requestId)
        if (existingResponse) {
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
      } else {
        // New request - send SMS
        requestId = generateRequestId()

        try {
          await sendSms({
            to: targetPhone,
            message: message,
          })
        } catch (error) {
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
        await storePendingRequest({
          id: requestId,
          message,
          sentAt: Date.now(),
        })
      }

      // Poll for response
      const startTime = Date.now()
      while (Date.now() - startTime < MAX_WAIT_MS) {
        await sleep(POLL_INTERVAL_MS)

        const response = await checkForResponse(requestId)
        if (response) {
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

      const request = await getRequestById(request_id)
      if (!request) {
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

  return server
}
