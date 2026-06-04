import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

const root = import.meta.dirname

// The React chat client. Built into dist/public, which the Express server
// serves statically in production.
export default defineConfig({
  root: resolve(root, 'web'),
  plugins: [react()],
  build: {
    outDir: resolve(root, 'dist/public'),
    emptyOutDir: true,
  },
})
