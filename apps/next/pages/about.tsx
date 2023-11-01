import { GetStaticProps } from 'next'
import { PostView } from './posts/[slug]'
import { Post, getAboutPost } from '../clients/posts'
import { ImageTiles } from '@portfolio/ui'

export const getStaticProps: GetStaticProps = async () => {
  const post = getAboutPost()

  return {
    props: {
      post,
    },
  }
}

export default ({ post }: { post: Post }) => {
  return (
    <div className="grid gap-4">
      <ImageTiles />
      <PostView post={post} />
    </div>
  )
}
