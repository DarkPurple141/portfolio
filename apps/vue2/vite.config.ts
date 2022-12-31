import { defineConfig } from 'vite'
import createVuePlugin from '@vitejs/plugin-vue2'
import * as path from 'path'

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 600,
    cssCodeSplit: false,
  },
  plugins: [createVuePlugin()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  server: {
    port: 8080,
  },
})
