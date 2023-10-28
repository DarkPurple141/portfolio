import * as content from '@portfolio/content/generated'

const posts = Object.values(content)
  .map((post) => ({
    ...post,
    frontmatter: {
      ...post.frontmatter,
      createdDateFormatted: new Date(
        post.frontmatter.createdDate
      ).toLocaleDateString('en-gb'),
      modifiedDateFormatted: new Date(
        post.frontmatter.modifiedDate
      ).toLocaleDateString('en-gb'),
    },
  }))
  .sort((a, b) => {
    // sort by date
    return (
      new Date(b.frontmatter.createdDate).getTime() -
      new Date(a.frontmatter.createdDate).getTime()
    )
  })

export function getAllPosts() {
  return posts
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.frontmatter.slug === slug)
}

export type Post = typeof posts[number]
