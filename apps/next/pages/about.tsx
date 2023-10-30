import { GetStaticProps } from 'next'
import { PostView } from './posts/[slug]'
import { getAboutPost } from '../clients/posts'

export const getStaticProps: GetStaticProps = async () => {
  const post = getAboutPost()

  return {
    props: {
      post,
    },
  }
}

export default PostView
