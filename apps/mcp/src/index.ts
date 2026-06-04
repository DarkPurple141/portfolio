import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createApp } from './app.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const isDev = process.env.NODE_ENV !== 'production'
const port = Number(process.env.PORT) || 3000

// In dev the client is served through Vite middleware (HMR); in prod the app
// serves the built client from dist/public. On Vercel the app runs as a
// serverless function instead — see api/index.ts.
const webRoot = resolve(__dirname, '../web')

async function main() {
  const app = createApp({ serveStatic: !isDev })

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
