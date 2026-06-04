import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js'
import express from 'express'
import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createMcpServer } from './server.js'
import { streamChat } from './agent.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const isDev = process.env.NODE_ENV !== 'production'
const port = Number(process.env.PORT) || 3000

// In dev, the client lives in ../web and is served through Vite middleware.
// In prod, it has been built to ./public alongside the compiled server.
const webRoot = resolve(__dirname, '../web')
const distPublic = resolve(__dirname, 'public')
const docsHtml = readFileSync(resolve(__dirname, 'docs.html'), 'utf-8')

async function main() {
  const app = express()

  // CORS for the MCP endpoint and API.
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Content-Type, mcp-session-id',
    )

    if (req.method === 'OPTIONS') {
      return res.status(204).end()
    }
    next()
  })

  // MCP connection docs / client config.
  app.get('/docs', (_req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.send(docsHtml)
  })

  // MCP streamable HTTP endpoint.
  app.all('/mcp', async (req, res) => {
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

  // Chat agent — consumed by the React client's useChat hook.
  app.post('/api/chat', express.json({ limit: '1mb' }), async (req, res) => {
    try {
      const { messages } = req.body ?? {}
      if (!Array.isArray(messages)) {
        return res.status(400).json({ error: 'messages must be an array' })
      }
      const result = await streamChat(messages)
      result.pipeUIMessageStreamToResponse(res)
    } catch (error) {
      console.error('Chat error:', error)
      if (!res.headersSent) {
        res.status(500).json({ error: 'Chat failed' })
      }
    }
  })

  if (isDev) {
    // Vite dev server in middleware mode — HMR for the React client.
    const { createServer } = await import('vite')
    const vite = await createServer({
      root: webRoot,
      appType: 'custom',
      server: { middlewareMode: true },
    })
    app.use(vite.middlewares)
    app.use(async (req, res, next) => {
      if (req.method !== 'GET') return next()
      try {
        const template = await vite.transformIndexHtml(
          req.originalUrl,
          readFileSync(resolve(webRoot, 'index.html'), 'utf-8'),
        )
        res.status(200).setHeader('Content-Type', 'text/html').end(template)
      } catch (error) {
        vite.ssrFixStacktrace(error as Error)
        next(error)
      }
    })
  } else {
    // Serve the built client and fall back to index.html for the SPA.
    app.use(express.static(distPublic))
    app.use((req, res, next) => {
      if (req.method !== 'GET') return next()
      res.sendFile(resolve(distPublic, 'index.html'))
    })
  }

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`MCP + chat server listening on port ${port}`)
  })
}

main().catch((error) => {
  console.error('Fatal startup error:', error)
  process.exit(1)
})
