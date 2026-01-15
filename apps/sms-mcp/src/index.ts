/* eslint-disable no-console */
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js'
import express from 'express'
import { createMcpServer } from './server.js'
import { storeResponse } from './store.js'

const app = express()
const port = process.env.PORT || 3001

console.log('[sms-mcp] Initializing server...')
console.log('[sms-mcp] Environment check:', {
  hasRedisUrl: !!process.env.UPSTASH_REDIS_REST_URL,
  hasRedisToken: !!process.env.UPSTASH_REDIS_REST_TOKEN,
  hasTwilioSid: !!process.env.TWILIO_ACCOUNT_SID,
  hasTwilioToken: !!process.env.TWILIO_AUTH_TOKEN,
  hasTwilioPhone: !!process.env.TWILIO_PHONE_NUMBER,
  hasTargetPhone: !!process.env.TARGET_PHONE_NUMBER,
  port,
})

// Parse URL-encoded bodies (Twilio sends form-urlencoded data)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[sms-mcp] ${req.method} ${req.path}`, {
    headers: {
      'content-type': req.headers['content-type'],
      'mcp-session-id': req.headers['mcp-session-id'],
    },
  })
  next()
})

// CORS middleware for all routes
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, mcp-session-id')

  if (req.method === 'OPTIONS') {
    console.log('[sms-mcp] Handling OPTIONS preflight request')
    return res.status(204).end()
  }
  next()
})

// MCP endpoint
app.all('/', async (req, res) => {
  console.log('[sms-mcp] MCP request received:', {
    method: req.method,
    body: req.body,
  })

  const server = createMcpServer()
  console.log('[sms-mcp] MCP server instance created')

  try {
    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: undefined,
    })
    console.log('[sms-mcp] Transport created')

    await server.connect(transport)
    console.log('[sms-mcp] Server connected to transport')

    await transport.handleRequest(req, res)
    console.log('[sms-mcp] Request handled successfully')
  } catch (error) {
    console.error('[sms-mcp] MCP error:', error)
    if (!res.headersSent) {
      return res.status(500).json({ error: 'Internal server error' })
    }
  } finally {
    await server.close()
    console.log('[sms-mcp] Server closed')
  }
})

// Webhook endpoint for Twilio SMS responses
app.post('/webhook', async (req, res) => {
  console.log('[sms-mcp] Webhook request received:', {
    body: req.body,
    headers: req.headers,
  })

  try {
    const body = req.body

    // Extract the message body from Twilio's webhook payload
    const messageBody = body.Body || body.body
    const from = body.From || body.from

    if (!messageBody) {
      console.error('[sms-mcp] No message body in webhook payload:', body)
      return res.status(400).json({ error: 'No message body' })
    }

    console.log(`[sms-mcp] Received SMS from ${from}: ${messageBody}`)

    // Store the response
    const updated = await storeResponse(messageBody)

    if (updated) {
      console.log(`[sms-mcp] Stored response for request ${updated.id}`)
    } else {
      console.log('[sms-mcp] No pending request found to match response')
    }

    // Respond with TwiML (empty response - no auto-reply)
    res.setHeader('Content-Type', 'text/xml')
    console.log('[sms-mcp] Sending TwiML response')
    return res
      .status(200)
      .send('<?xml version="1.0" encoding="UTF-8"?><Response></Response>')
  } catch (error) {
    console.error('[sms-mcp] Webhook error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
})

app.listen(port, () => {
  console.log(`[sms-mcp] Server listening on port ${port}`)
  console.log('[sms-mcp] Available endpoints:')
  console.log('[sms-mcp]   - / (MCP endpoint)')
  console.log('[sms-mcp]   - /webhook (Twilio webhook)')
})
