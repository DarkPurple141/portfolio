// Import from the content package's generated directory
// Note: This requires content package to be built first (pnpm --filter @portfolio/content build)
import * as files from '../../../content/generated'

type GeneratedPost = {
  code: string
  frontmatter: {
    slug: string
    title: string
    description: string
    tags?: string[]
    created: { raw: string; formatted: string }
    modified: { raw: string; formatted: string }
  }
  matter: {
    content: string
  }
}

type PostData = {
  slug: string
  title: string
  description: string
  content: string
  code: string
  tags: string[]
  published: boolean
  createdAt: Date
  updatedAt: Date
}

// Filter out the 'about' page which isn't a blog post
const postExports = Object.entries(files).filter(
  ([key]) => key !== 'about',
) as [string, GeneratedPost][]

export const postsData: PostData[] = postExports.map(([, post]) => ({
  slug: post.frontmatter.slug,
  title: post.frontmatter.title,
  description: post.frontmatter.description,
  content: post.matter.content,
  code: post.code,
  tags: post.frontmatter.tags || [],
  published: true,
  createdAt: new Date(post.frontmatter.created.raw),
  updatedAt: new Date(post.frontmatter.modified.raw),
}))
