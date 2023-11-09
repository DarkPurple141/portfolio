'use client'
import { MDX } from '@/app/lib/components/mdx'
import { getAboutPost } from '@/app/lib/clients/posts'
import { Heading, ImageTiles } from '@portfolio/ui'

export default () => {
  const post = getAboutPost()
  return (
    <div className="grid gap-8">
      <Heading as="h1" className="heading-xl">
        {post.frontmatter.title}
      </Heading>
      <ImageTiles />
      <MDX code={post.code} frontmatter={post.frontmatter} />
    </div>
  )
}
