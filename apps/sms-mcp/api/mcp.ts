import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js'
import express from 'express'
import { createMcpServer } from '../src/server.js'

const app = express()
const port = process.env.PORT || 3001

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

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`SMS MCP server listening on port ${port}`)
})

export default app
