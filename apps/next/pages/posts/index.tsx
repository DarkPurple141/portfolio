import { Heading, Stack } from '@portfolio/ui'
import { Post, getAllPosts } from '../../api/posts'
import { GetStaticProps } from 'next'
import Link from 'next/link'

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  }
}

const PostPreview = ({ post }: { post: Post }) => {
  return (
    <li className="flex flex-col gap-1">
      <div>
        <time dateTime={post.frontmatter.createdDate}>
          {post.frontmatter.createdDateFormatted}
        </time>
        <Heading as="h2" className="leading-none">
          <Link href={`/posts/${post.frontmatter.slug}`}>
            {post.frontmatter.title}
          </Link>
        </Heading>
      </div>
      <p>{post.frontmatter.stub}</p>
    </li>
  )
}

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <Stack gap="gap-4">
      <Heading className="heading-xl" id="posts" as="h1">
        Posts
      </Heading>
      <ul className="flex gap-4 flex-col" aria-describedby="posts">
        {posts.map((post) => (
          <PostPreview key={post.frontmatter.slug} post={post} />
        ))}
      </ul>
    </Stack>
  )
}
