import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { prisma } from '@portfolio/db'
import { z } from 'zod'

export function createMcpServer() {
  const server = new McpServer({
    name: 'portfolio-mcp',
    version: '1.0.0',
  })

  // Tool: Get all posts
  server.tool(
    'get_posts',
    'Get all blog posts, optionally filtered by tag',
    {
      tag: z.string().optional().describe('Optional tag to filter posts by'),
    },
    async ({ tag }) => {
      const posts = await prisma.post.findMany({
        where: tag
          ? {
              tags: {
                string_contains: tag,
              },
            }
          : undefined,
        select: {
          id: true,
          slug: true,
          title: true,
          description: true,
          tags: true,
          published: true,
          createdAt: true,
          updatedAt: true,
        },
        orderBy: { createdAt: 'desc' },
      })

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(posts, null, 2),
          },
        ],
      }
    }
  )

  // Tool: Get a specific post by slug
  server.tool(
    'get_post',
    'Get a specific blog post by its slug',
    {
      slug: z.string().describe('The slug of the post to retrieve'),
    },
    async ({ slug }) => {
      const post = await prisma.post.findUnique({
        where: { slug },
      })

      if (!post) {
        return {
          content: [
            {
              type: 'text',
              text: `Post with slug "${slug}" not found`,
            },
          ],
          isError: true,
        }
      }

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(post, null, 2),
          },
        ],
      }
    }
  )

  // Tool: Get all jobs
  server.tool('get_jobs', 'Get all work experience/jobs', {}, async () => {
    const jobs = await prisma.job.findMany({
      orderBy: { start_date: 'desc' },
    })

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(jobs, null, 2),
        },
      ],
    }
  })

  // Tool: Get all qualifications
  server.tool('get_qualifications', 'Get all education and qualifications', {}, async () => {
    const qualifications = await prisma.qualification.findMany({
      orderBy: { graduation_year: 'desc' },
    })

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(qualifications, null, 2),
        },
      ],
    }
  })

  // Tool: Get user profile
  server.tool('get_user', 'Get user profile information including socials', {}, async () => {
    const user = await prisma.user.findFirst({
      include: {
        socials: true,
      },
    })

    if (!user) {
      return {
        content: [
          {
            type: 'text',
            text: 'No user found',
          },
        ],
        isError: true,
      }
    }

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(user, null, 2),
        },
      ],
    }
  })

  // Tool: Get formatted resume
  server.tool(
    'get_resume',
    'Get a formatted resume with jobs, qualifications, and user info',
    {},
    async () => {
      const [user, jobs, qualifications] = await Promise.all([
        prisma.user.findFirst({
          include: { socials: true },
        }),
        prisma.job.findMany({
          orderBy: { start_date: 'desc' },
        }),
        prisma.qualification.findMany({
          orderBy: { graduation_year: 'desc' },
        }),
      ])

      const resume = {
        user,
        experience: jobs,
        education: qualifications,
      }

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(resume, null, 2),
          },
        ],
      }
    }
  )

  // Resources
  server.resource('posts', 'portfolio://posts', async () => {
    const posts = await prisma.post.findMany({
      select: {
        slug: true,
        title: true,
        description: true,
        tags: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
    })

    return {
      contents: [
        {
          uri: 'portfolio://posts',
          mimeType: 'application/json',
          text: JSON.stringify(posts, null, 2),
        },
      ],
    }
  })

  server.resource('jobs', 'portfolio://jobs', async () => {
    const jobs = await prisma.job.findMany({
      orderBy: { start_date: 'desc' },
    })

    return {
      contents: [
        {
          uri: 'portfolio://jobs',
          mimeType: 'application/json',
          text: JSON.stringify(jobs, null, 2),
        },
      ],
    }
  })

  server.resource('user', 'portfolio://user', async () => {
    const user = await prisma.user.findFirst({
      include: { socials: true },
    })

    return {
      contents: [
        {
          uri: 'portfolio://user',
          mimeType: 'application/json',
          text: JSON.stringify(user, null, 2),
        },
      ],
    }
  })

  return server
}
