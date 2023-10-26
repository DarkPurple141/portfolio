import { GetStaticPaths, GetStaticProps } from 'next'
import * as content from '@portfolio/content/generated'
import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'

const posts = Object.values(content)

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: posts.map((post) => `/posts/${post.frontmatter.slug}`) || [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = posts.find((post) => post.frontmatter.slug === params.slug)

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

export default function Post({ post }: { post: typeof posts[number] }) {
  const Component = useMemo(() => getMDXComponent(post.code), [post.code])
  return <Component />
}
