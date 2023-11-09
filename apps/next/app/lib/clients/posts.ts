import * as content from '@portfolio/content/generated'

const posts = Object.values(content)
  .filter((p) => p.frontmatter.description !== 'about')
  .sort((a, b) => {
    // sort by date
    return (
      new Date(b.frontmatter.created.raw).getTime() -
      new Date(a.frontmatter.created.raw).getTime()
    )
  })

export async function getAllPosts() {
  return posts
}

export async function getPostBySlug(slug: string) {
  return posts.find((post) => post.frontmatter.slug === slug)
}

export async function getLatestPost() {
  return posts[0]
}

export async function getAboutPost() {
  return content.about
}

export type Post = typeof posts[number]
