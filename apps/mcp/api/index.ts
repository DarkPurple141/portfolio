import { createApp } from '../src/app.js'

// Vercel serverless entry. `@vercel/node` serves an exported Express app
// directly, so this is the single function all traffic is routed to (see
// vercel.json). It serves the vite-built client from dist/public plus the
// /mcp, /docs and /api/chat routes.
export default createApp({ serveStatic: true })
