import { Heading, PreviewCard, Stack } from '@portfolio/ui'
import { Post, getAllPosts } from '../../clients/posts'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  }
}

// const PostPreview = ({ post }: { post: Post }) => {
//   return (
//     <li className="flex flex-col gap-1">
//       <div>
//         <time dateTime={post.frontmatter.created.raw}>
//           {post.frontmatter.created.formatted}
//         </time>
//         <Heading as="h2" className="leading-none">
//           <Link href={`/posts/${post.frontmatter.slug}`}>
//             {post.frontmatter.title}
//           </Link>
//         </Heading>
//       </div>
//       <p>{post.frontmatter.stub}</p>
//     </li>
//   )
// }

export default function Posts({ posts }: { posts: Post[] }) {
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
              {post.frontmatter.stub}
            </PreviewCard>
          </li>
        ))}
      </ul>
    </Stack>
  )
}
