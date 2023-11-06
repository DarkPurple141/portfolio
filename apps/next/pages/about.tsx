import { GetStaticProps } from 'next'
import { MDX } from '../app/components/mdx'
import { Post, getAboutPost } from '../app/clients/posts'
import { Heading, ImageTiles } from '@portfolio/ui'

export const getStaticProps: GetStaticProps = async () => {
  const post = getAboutPost()

  return {
    props: {
      post,
    },
  }
}

export default ({ post }: { post: Post }) => {
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
