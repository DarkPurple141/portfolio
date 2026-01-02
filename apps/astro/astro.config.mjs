import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react({ include: ['@halyard/ui'] })],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: [],
      external: [
        '@prisma/client',
        '@prisma/client/runtime',
        '@prisma/client/runtime/library',
        '@prisma/adapter-better-sqlite3',
        '@prisma/client-runtime-utils',
        '@portfolio/db',
      ],
    },
    optimizeDeps: {
      exclude: [
        '@prisma/client',
        '@prisma/client/runtime',
        '@prisma/client/runtime/library',
        '@prisma/adapter-better-sqlite3',
        '@prisma/client-runtime-utils',
        '@portfolio/db',
      ],
    },
  },
})
