import { ImageResponse, NextRequest } from 'next/server'

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

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const title = searchParams.get('title')
  const slug = searchParams.get('slug')

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-start justify-between bg-[#030712] p-16">
        <div tw="flex flex-col text-slate-100">
          <p tw="m-0 text-3xl leading-none text-[#98c0d7]">Read article</p>
          <h1 tw="mt-2 text-7xl font-bold tracking-tight">{title}</h1>
        </div>
        <div tw="flex text-slate-300">
          <img
            tw="bg-[#98c0d7] w-18 h-18 mr-4 rounded-full"
            src="https://github.com/darkpurple141.png"
            width="100"
            height="100"
          />
          <div tw="flex flex-col text-2xl">
            <h2 tw="m-0">Alex Hinds</h2>
            <p tw="m-0">{`https://alhinds.com/posts/${slug}`}</p>
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
