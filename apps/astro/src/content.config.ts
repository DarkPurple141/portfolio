import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'
import { prisma } from '@portfolio/db'

const blog = defineCollection({
  loader: async () => {
    const posts = await prisma.post.findMany()
    return posts.map((post) => ({
      ...post,
      id: post.slug,
      body: post.content,
    }))
  },
  schema: z.object({
    id: z.string(),
    slug: z.string(),
    title: z.string().describe('The title of the post'),
    description: z.string().describe('The description of the post'),
    content: z.string().describe('The content of the post (markdown)'),
    code: z.string().describe('The code of the post (bundled MDX)'),
    tags: z.array(z.string()).describe('The tags of the post'),
    published: z.boolean().describe('Whether the post is published'),
    createdAt: z.date().describe('The date the post was created'),
    updatedAt: z.date().describe('The date the post was updated'),
  }),
})

export const collections = {
  blog,
}
