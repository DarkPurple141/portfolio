import { prisma } from '@portfolio/db'

/**
 * Shared portfolio data-access functions.
 *
 * Both surfaces of this app consume these:
 *  - the MCP server (`server.ts`) wraps the return values in MCP content blocks
 *  - the chat agent (`agent.ts`) exposes them as AI SDK tools
 *
 * Keeping the queries in one place means the agent and the MCP server can
 * never drift out of sync.
 */

export async function getPosts(tag?: string) {
  return prisma.post.findMany({
    where: tag ? { tags: { string_contains: tag } } : undefined,
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
}

export async function getPost(slug: string) {
  return prisma.post.findUnique({ where: { slug } })
}

export async function getJobs() {
  return prisma.job.findMany({ orderBy: { start_date: 'desc' } })
}

export async function getQualifications() {
  return prisma.qualification.findMany({
    orderBy: { graduation_year: 'desc' },
  })
}

export async function getSkills(category?: string) {
  return prisma.skill.findMany({
    where: category ? { category } : undefined,
    orderBy: { category: 'asc' },
  })
}

export async function getUser() {
  return prisma.user.findFirst({ include: { socials: true } })
}

export async function getResume() {
  const [user, jobs, qualifications, skills] = await Promise.all([
    getUser(),
    getJobs(),
    getQualifications(),
    getSkills(),
  ])

  return { user, experience: jobs, education: qualifications, skills }
}
