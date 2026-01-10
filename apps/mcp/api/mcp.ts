import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js'
import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createMcpServer } from '../src/server.js'

const server = createMcpServer()

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, mcp-session-id')

  // eslint-disable-next-line no-console
  console.log('1. Handler started')
  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  try {
    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: undefined, // Stateless mode
    })

    // eslint-disable-next-line no-console
    console.log('2. Transport created')
    await server.connect(transport)
    // eslint-disable-next-line no-console
    console.log('3. Server connected')
    await transport.handleRequest(req, res)
    // eslint-disable-next-line no-console
    console.log('4. Request handled')
  } catch (error) {
    console.error('MCP error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  } finally {
    // eslint-disable-next-line no-console
    console.log('5. Server closed')
    await server.close()
  }
}
