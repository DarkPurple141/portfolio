# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
# Install dependencies (uses pnpm)
pnpm install

# Build all packages and apps
pnpm build

# Run all apps in development mode
pnpm dev

# Run a specific app
pnpm --filter @portfolio/astro dev
pnpm --filter @portfolio/next dev

# Lint and auto-fix
pnpm lint

# Database commands (run from packages/db or via turbo)
pnpm --filter @portfolio/db db:migrate    # Run migrations
pnpm --filter @portfolio/db db:seed       # Seed database
pnpm --filter @portfolio/db db:generate   # Generate Prisma client
pnpm --filter @portfolio/db studio        # Open Prisma Studio

# Version management
pnpm cut:version
```

## Architecture

This is a **pnpm monorepo** using **Turborepo** for build orchestration.

### Apps (`apps/`)
- **astro**: Main portfolio site (Astro 5 + React + Tailwind 4) - deployed to alhinds.com
- **next**: Next.js 13 implementation with App Router
- **vue2**: Vue 2 implementation
- **mcp**: MCP server exposing portfolio data (posts, jobs, qualifications)
- **sms-mcp**: SMS MCP server with Twilio + Redis integration

### Packages (`packages/`)
- **db**: Prisma ORM with SQLite (better-sqlite3 adapter). Schema defines User, Social, Job, Qualification, Post models.
- **content**: MDX bundling and RSS feed generation
- **ui**: Shared React component library (`@halyard/ui`)
- **tailwind-preset**: Shared Tailwind configuration (`@halyard/tailwind-preset`)
- **reset**: CSS reset (`@halyard/reset`)
- **tsconfig**: Shared TypeScript configurations (`@halyard/tsconfig`)
- **prettier**: Shared Prettier config (`@halyard/prettier-config`)

### Build Pipeline
Turbo handles dependencies: `build` depends on `db:generate` → `db:migrate` → `db:seed`. The `dev` and `watch` tasks skip cache and also depend on database setup.

## Code Style

- **No semicolons**, single quotes, 80 char print width (Prettier)
- **No console.log** - use `console.warn` or `console.error` only
- ESLint with TypeScript, Astro, and Vue plugins
- Workspace dependencies use `workspace:*` protocol

## Key Patterns

- Internal packages are prefixed `@portfolio/` or `@halyard/`
- Apps consume shared packages for UI, DB access, content, and styling
- MCP servers expose portfolio data via Model Context Protocol SDK
- Prisma schema lives in `packages/db/prisma/schema.prisma`
