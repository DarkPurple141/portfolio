import { Heading, PreviewCard, Stack } from '@halyard/ui'
import { getAllPosts } from '@/app/lib/clients/posts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Posts | alhinds.com',
}

export default async function Posts() {
  const posts = await getAllPosts()
  return (
    <Stack gap="gap-8">
      <Heading className="heading-xl" id="posts" as="h1">
        Posts
      </Heading>
      <ul className="flex gap-8 flex-col" aria-describedby="posts">
        {posts.map((post) => (
          <li key={post.frontmatter.slug} className="flex flex-col gap-1">
            <PreviewCard
              heading={post.frontmatter.title}
              href={`/posts/${post.frontmatter.slug}`}
              published={{
                formatted: post.frontmatter.created.formatted,
                iso: post.frontmatter.created.raw,
              }}
            >
              {post.frontmatter.description}
            </PreviewCard>
          </li>
        ))}
      </ul>
    </Stack>
  )
}
