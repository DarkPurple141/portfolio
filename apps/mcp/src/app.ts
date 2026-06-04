import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js'
import express, {
  type NextFunction,
  type Request,
  type Response,
} from 'express'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createMcpServer } from './server.js'
import { streamChat } from './agent.js'

const here = dirname(fileURLToPath(import.meta.url))

/**
 * Resolve a build artifact (the docs page, the built client) by checking the
 * locations it can live in. Locally the server is compiled to `dist/` next to
 * `dist/public`; as a bundled Vercel function the layout differs, so we probe
 * a few candidates rather than assume one.
 */
function locate(...candidates: string[]): string | undefined {
  return candidates.find((p) => existsSync(p))
}

const distPublic = locate(
  resolve(here, 'public'),
  resolve(here, '../dist/public'),
  resolve(process.cwd(), 'dist/public'),
  resolve(process.cwd(), 'apps/mcp/dist/public'),
)

const docsHtmlPath = locate(
  resolve(here, 'docs.html'),
  resolve(here, '../dist/docs.html'),
  resolve(here, '../src/docs.html'),
  resolve(process.cwd(), 'apps/mcp/src/docs.html'),
)

/**
 * Build the portfolio MCP + chat Express app.
 *
 * This factory is the single source of truth for routing. It's consumed by:
 *  - `api/index.ts` — the Vercel serverless entry (serveStatic: true)
 *  - `src/index.ts` — the local server, which serves the client via Vite in
 *    dev (serveStatic: false) or from `dist/public` in prod (serveStatic: true)
 */
export function createApp({ serveStatic }: { serveStatic: boolean }) {
  const app = express()

  // CORS for the MCP endpoint and API.
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, mcp-session-id')

    if (req.method === 'OPTIONS') {
      return res.status(204).end()
    }
    next()
  })

  // MCP connection docs / client config.
  app.get('/docs', (_req: Request, res: Response) => {
    if (!docsHtmlPath) return res.status(404).send('Docs unavailable')
    res.setHeader('Content-Type', 'text/html')
    res.send(readFileSync(docsHtmlPath, 'utf-8'))
  })

  // MCP streamable HTTP endpoint.
  app.all('/mcp', async (req: Request, res: Response) => {
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
  app.post(
    '/api/chat',
    express.json({ limit: '1mb' }),
    async (req: Request, res: Response) => {
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
    },
  )

  // Serve the built client and fall back to index.html for the SPA.
  if (serveStatic && distPublic) {
    app.use(express.static(distPublic))
    app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.method !== 'GET') return next()
      res.sendFile(resolve(distPublic, 'index.html'))
    })
  }

  return app
}
