import { GetStaticPaths, GetStaticProps } from 'next'
import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'
import { Post, getAllPosts, getPostBySlug } from '../../clients/posts'
import { Heading } from '@portfolio/ui'
import Link from 'next/link'

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
  const Component = useMemo(
    () => getMDXComponent(post.code, { ...post.frontmatter }),
    [post.code]
  )
  return (
    <article className="markdown max-w-none prose prose-sm prose-headings:no-underline prose-headings:after:content-['#'] prose-headings:after:ml-2 prose-headings:after:text-brand.bold prose-headings:text-inherit prose-p:text-subtle prose-li:text-subtle prose-blockquote:text-subtle hover:prose-a:text-brand.bold prose-a:text-inherit -mt-8">
      <Heading as="h1">{post.frontmatter.title}</Heading>
      <Component />
      <p className="border-t mt-8 -mb-8 pt-8 italic">
        You can read more of my <Link href="/posts">writing here</Link> - or why
        not subscribe to <Link href="/rss.xml">my RSS feed</Link>.
      </p>
    </article>
  )
}

export default PostView
