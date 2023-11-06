import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPosts, getPostBySlug, Post } from '@/app/clients/posts'
import { Heading } from '@portfolio/ui'
import { MDX } from '@/app/components/mdx'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllPosts().map((post) => `/posts/${post.frontmatter.slug}`) || [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params?.slug as string)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
  }
}

export function PostView({ post }: { post: Post }) {
  return (
    <>
      <div className="mb-8">
        <Heading as="h1" className="heading-lg">
          {post.frontmatter.title}
        </Heading>
        <time className="text-subtlest" dateTime={post.frontmatter.created.raw}>
          {post.frontmatter.created.formatted}
        </time>
      </div>
      <MDX code={post.code} frontmatter={post.frontmatter} />
    </>
  )
}

export default PostView
