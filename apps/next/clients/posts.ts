import * as content from '@portfolio/content/generated'

const posts = Object.values(content)
  .filter((p) => p.frontmatter.stub !== 'about')
  .sort((a, b) => {
    // sort by date
    return (
      new Date(b.frontmatter.created.raw).getTime() -
      new Date(a.frontmatter.created.raw).getTime()
    )
  })

export function getAllPosts() {
  return posts
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.frontmatter.slug === slug)
}

export function getAboutPost() {
  return content.about
}

export type Post = typeof posts[number]
