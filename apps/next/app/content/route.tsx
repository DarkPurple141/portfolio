import { NextRequest } from 'next/server'
import { getAllPosts, getPostBySlug } from '../lib/clients/posts'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const slug = searchParams.get('slug')

  if (!slug) {
    return new Response(
      JSON.stringify((await getAllPosts()).map((p) => p.frontmatter)),
      {
        headers: { 'content-type': 'application/json' },
      },
    )
  }

  return new Response(JSON.stringify(await getPostBySlug(slug)), {
    headers: { 'content-type': 'application/json' },
  })
}
