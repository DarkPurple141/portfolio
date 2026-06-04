import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import * as portfolio from './portfolio.js'

function json(data: unknown) {
  return {
    content: [{ type: 'text' as const, text: JSON.stringify(data, null, 2) }],
  }
}

export function createMcpServer() {
  const server = new McpServer({
    name: 'portfolio-mcp',
    description:
      'A MCP server for the portfolio of Al Hinds. This server is used to interact with the portfolio of Al (Alex) Hinds.',
    icons: [
      {
        src: 'https://alhinds.com/favicon.ico',
        mimeType: 'image/x-icon',
      },
    ],
    version: '1.0.0',
  })

  // Tool: Get all posts
  server.registerTool(
    'get_posts',
    {
      description: 'Get all blog posts, optionally filtered by tag',
      inputSchema: {
        tag: z.string().optional().describe('Optional tag to filter posts by'),
      },
    },
    async (args: { tag?: string }) => json(await portfolio.getPosts(args.tag)),
  )

  // Tool: Get a specific post by slug
  server.registerTool(
    'get_post',
    {
      description: 'Get a specific blog post by its slug',
      inputSchema: {
        slug: z.string().describe('The slug of the post to retrieve'),
      },
    },
    async (args: { slug: string }) => {
      const post = await portfolio.getPost(args.slug)

      if (!post) {
        return {
          content: [
            {
              type: 'text',
              text: `Post with slug "${args.slug}" not found`,
            },
          ],
          isError: true,
        }
      }

      return json(post)
    },
  )

  // Tool: Get all jobs
  server.registerTool(
    'get_jobs',
    { description: 'Get all work experience/jobs', inputSchema: {} },
    async () => json(await portfolio.getJobs()),
  )

  // Tool: Get all qualifications
  server.registerTool(
    'get_qualifications',
    { description: 'Get all education and qualifications', inputSchema: {} },
    async () => json(await portfolio.getQualifications()),
  )

  // Tool: Get all skills
  server.registerTool(
    'get_skills',
    {
      description:
        'Get all technical skills, optionally filtered by category (languages, frameworks, infrastructure, ai, design)',
      inputSchema: {
        category: z
          .string()
          .optional()
          .describe(
            'Optional category to filter by: languages, frameworks, infrastructure, ai, design',
          ),
      },
    },
    async (args: { category?: string }) =>
      json(await portfolio.getSkills(args.category)),
  )

  // Tool: Get user profile
  server.registerTool(
    'get_user',
    {
      description: 'Get user profile information including socials',
      inputSchema: {},
    },
    async () => {
      const user = await portfolio.getUser()

      if (!user) {
        return {
          content: [{ type: 'text', text: 'No user found' }],
          isError: true,
        }
      }

      return json(user)
    },
  )

  // Tool: Get formatted resume
  server.registerTool(
    'get_resume',
    {
      description:
        'Get a formatted resume with jobs, qualifications, and user info',
      inputSchema: {},
    },
    async () => json(await portfolio.getResume()),
  )

  // Resources
  server.resource('posts', 'portfolio://posts', async () => ({
    contents: [
      {
        uri: 'portfolio://posts',
        mimeType: 'application/json',
        text: JSON.stringify(await portfolio.getPosts(), null, 2),
      },
    ],
  }))

  server.resource('jobs', 'portfolio://jobs', async () => ({
    contents: [
      {
        uri: 'portfolio://jobs',
        mimeType: 'application/json',
        text: JSON.stringify(await portfolio.getJobs(), null, 2),
      },
    ],
  }))

  server.resource('skills', 'portfolio://skills', async () => ({
    contents: [
      {
        uri: 'portfolio://skills',
        mimeType: 'application/json',
        text: JSON.stringify(await portfolio.getSkills(), null, 2),
      },
    ],
  }))

  server.resource('user', 'portfolio://user', async () => ({
    contents: [
      {
        uri: 'portfolio://user',
        mimeType: 'application/json',
        text: JSON.stringify(await portfolio.getUser(), null, 2),
      },
    ],
  }))

  return server
}
