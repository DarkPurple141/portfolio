import { getAllPosts, getPostBySlug } from '@/app/lib/clients/posts'
import type { Metadata } from 'next/types'
import { Heading } from '@halyard/ui'
import { MDX } from '@/app/lib/components/mdx'
import { Params } from './types'

export const generateStaticParams = async () => {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.frontmatter.slug })) || []
}

export async function generateMetadata({
  params,
}: Params): Promise<Metadata | undefined> {
  // fetch data
  const post = await getPostBySlug(params?.slug)

  if (!post) return

  const { title, description, created, slug } = post.frontmatter

  const ogImage = `https://alhinds.com/og?title=${title}&slug=${slug}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: created.raw,
      url: `https://alhinds.com/posts/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

async function PostView({ params: { slug } }: Params) {
  const post = await getPostBySlug(slug)

  if (!post) {
    return null
  }

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
