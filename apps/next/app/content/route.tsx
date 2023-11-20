import { NextRequest } from 'next/server'
import { getAllPosts, getPostBySlug } from '../lib/clients/posts'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const title = searchParams.get('title')

  if (!title) {
    return new Response(JSON.stringify(await getAllPosts()), {
      headers: { 'content-type': 'application/json' },
    })
  }

  return new Response(JSON.stringify(await getPostBySlug(title)), {
    headers: { 'content-type': 'application/json' },
  })
}
