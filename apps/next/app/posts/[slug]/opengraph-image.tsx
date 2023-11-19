import { ImageResponse } from 'next/server'
import { Params } from './types'
import { getPostBySlug } from '@/app/lib/clients/posts'

export const runtime = 'edge'

async function getFonts() {
  const [interRegular, interMedium, interSemiBold, interBold] =
    await Promise.all([
      fetch('https://static.alhinds.com/font/Inter-Regular.ttf').then((res) =>
        res.arrayBuffer()
      ),
      fetch('https://static.alhinds.com/font/Inter-Medium.ttf').then((res) =>
        res.arrayBuffer()
      ),
      fetch('https://static.alhinds.com/font/Inter-SemiBold.ttf').then((res) =>
        res.arrayBuffer()
      ),
      fetch('https://static.alhinds.com/font/Inter-Bold.ttf').then((res) =>
        res.arrayBuffer()
      ),
    ])

  return [
    {
      name: 'Inter',
      data: interRegular,
      style: 'normal',
      weight: 400,
    },
    {
      name: 'Inter',
      data: interMedium,
      style: 'normal',
      weight: 500,
    },
    {
      name: 'Inter',
      data: interSemiBold,
      style: 'normal',
      weight: 600,
    },
    {
      name: 'Inter',
      data: interBold,
      style: 'normal',
      weight: 700,
    },
  ]
}

export default async ({ params }: Params) => {
  // fetch data
  const post = await getPostBySlug(params?.slug)

  if (!post) return null

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-start justify-between bg-slate-950 p-16">
        <div tw="flex flex-col text-slate-100">
          <p tw="m-0 text-2xl leading-none text-[#98c0d7]">Read article</p>
          <h1 tw="mt-2 text-6xl font-bold tracking-tight">
            {post.frontmatter.title}
          </h1>
        </div>
        <div tw="flex text-slate-300">
          <img
            tw="bg-[#98c0d7] w-16 h-16 mr-4 rounded-full"
            src="https://github.com/darkpurple141.png"
            width="100"
            height="100"
          />
          <div tw="flex flex-col text-xl">
            <h2 tw="m-0">Alex Hinds</h2>
            <p tw="m-0">
              {`https://alhinds.com/posts/${post.frontmatter.slug}`}
            </p>
          </div>
        </div>
      </div>
    ),
    {
      // @ts-expect-error
      fonts: await getFonts(),
      width: 1200,
      height: 630,
    }
  )
}
