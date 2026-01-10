import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js'
import express from 'express'
import { createMcpServer } from '../src/server.js'

const app = express()
app.use(express.json())

app.options('*', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, mcp-session-id')
  return res.status(204).end()
})

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
  }
})
