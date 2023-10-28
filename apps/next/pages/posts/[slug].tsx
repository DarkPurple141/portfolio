import { GetStaticPaths, GetStaticProps } from 'next'
import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'
import { Post, getAllPosts, getPostBySlug } from '../../api/posts'
import { Heading } from '@portfolio/ui'

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

export default function PostView({ post }: { post: Post }) {
  const Component = useMemo(() => getMDXComponent(post.code), [post.code])
  return (
    <article className="markdown prose prose-sm prose-headings:no-underline prose-headings:after:content-['#'] prose-headings:after:ml-2 prose-headings:after:text-brand.bold">
      <Heading as="h1">{post.frontmatter.title}</Heading>
      <Component />
    </article>
  )
}
