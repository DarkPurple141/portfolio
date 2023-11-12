import { getAllPosts, getPostBySlug } from '@/app/lib/clients/posts'
import type { Metadata } from 'next/types'
import { Heading } from '@halyard/ui'
import { MDX } from '@/app/lib/components/mdx'

type Params = { params: { slug: string } }

export const generateStaticParams = async () => {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.frontmatter.slug })) || []
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  // fetch data
  const post = await getPostBySlug(params?.slug)

  if (!post) return {}

  return {
    title: post?.frontmatter.title,
    description: post?.frontmatter.description,
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
