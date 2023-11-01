import { defineConfig } from 'vite'

export default defineConfig({
  root: './static',
  build: {
    outDir: '../dist',
  },
  server: {
    port: 3030,
  },
})
