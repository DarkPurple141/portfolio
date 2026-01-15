import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { createMcpServer } from './server.js'

async function main() {
  const server = createMcpServer()
  const transport = new StdioServerTransport()

  await server.connect(transport)
  console.error('SMS MCP server started on stdio')
}

main().catch(console.error)
