import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js'
import { createServer } from 'http'
import { createMcpServer } from './server.js'

const server = createMcpServer()

// Start HTTP server for local development
const PORT = process.env.PORT || 3001

const httpServer = createServer(async (req, res) => {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, mcp-session-id')

  if (req.method === 'OPTIONS') {
    res.writeHead(204)
    res.end()
    return
  }

  if (req.url === '/mcp' || req.url === '/api/mcp') {
    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: undefined, // Stateless mode
    })

    await server.connect(transport)
    await transport.handleRequest(req, res)
  } else if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ status: 'ok' }))
  } else {
    res.writeHead(404)
    res.end('Not found')
  }
})

httpServer.listen(PORT, () => {
  console.log(`MCP server listening on port ${PORT}`) // eslint-disable-line no-console
  console.log(`MCP endpoint: http://localhost:${PORT}/mcp`) // eslint-disable-line no-console
})
