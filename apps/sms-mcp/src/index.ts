import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js'
import express from 'express'
import { createMcpServer } from './server.js'
import { storeResponse } from './store.js'

const app = express()
const port = process.env.PORT || 3001

// Parse URL-encoded bodies (Twilio sends form-urlencoded data)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// CORS middleware for all routes
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, mcp-session-id')

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }
  next()
})

// MCP endpoint
app.all('/', async (req, res) => {
  const server = createMcpServer()
  try {
    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: undefined,
    })

    await server.connect(transport)
    await transport.handleRequest(req, res)
  } catch (error) {
    console.error('MCP error:', error)
    if (!res.headersSent) {
      return res.status(500).json({ error: 'Internal server error' })
    }
  } finally {
    await server.close()
  }
})

// Webhook endpoint for Twilio SMS responses
app.post('/webhook', async (req, res) => {
  try {
    const body = req.body

    // Extract the message body from Twilio's webhook payload
    const messageBody = body.Body || body.body
    const from = body.From || body.from

    if (!messageBody) {
      console.error('No message body in webhook payload:', body)
      return res.status(400).json({ error: 'No message body' })
    }

    console.log(`Received SMS from ${from}: ${messageBody}`)

    // Store the response
    const updated = await storeResponse(messageBody)

    if (updated) {
      console.log(`Stored response for request ${updated.id}`)
    } else {
      console.log('No pending request found to match response')
    }

    // Respond with TwiML (empty response - no auto-reply)
    res.setHeader('Content-Type', 'text/xml')
    return res
      .status(200)
      .send('<?xml version="1.0" encoding="UTF-8"?><Response></Response>')
  } catch (error) {
    console.error('Webhook error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`SMS MCP server listening on port ${port}`)
})
