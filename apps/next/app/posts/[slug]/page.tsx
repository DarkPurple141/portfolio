import { getAllPosts, getPostBySlug } from '@/app/clients/posts'
import { Heading } from '@portfolio/ui'
import { MDX } from '@/app/components/mdx'

export const generateStaticParams = async () => {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.frontmatter.slug })) || []
}

export async function PostView({
  params: { slug },
}: {
  params: { slug: string }
}) {
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
