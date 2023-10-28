import { Inline } from '@portfolio/ui'
import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Alex Hinds Portfolio</title>
        <meta name="title" content="Alex Hinds, Web developer and designer" />
        <meta
          name="description"
          content="Alex Hinds is a software engineer and former journalist with a passion for UX/UI, frontend engineering and web development."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://next.alhinds.com/" />
        <meta
          property="og:title"
          content="Alex Hinds, Web developer and designer"
        />
        <meta
          property="og:description"
          content="Alex Hinds is a software engineer and former journalist with a passion for UX/UI, frontend engineering and web development."
        />
        <meta
          property="og:image"
          content="https://next.alhinds.com/og-image.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://next.alhinds.com/" />
        <meta
          property="twitter:title"
          content="Alex Hinds, Web developer and designer"
        />
        <meta
          property="twitter:description"
          content="Alex Hinds is a software engineer and former journalist with a passion for UX/UI, frontend engineering and web development."
        />
        <meta
          property="twitter:image"
          content="https://next.alhinds.com/og-image.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </Head>
      <body className="max-w-3xl m-auto flex flex-col justify-between">
        <header className="flex flex-row justify-between py-4 mb-auto">
          <Inline gap="gap-4">
            <Link href="/" className="text-brand.bold">
              Home
            </Link>
            <Link href="/about">About</Link>
            <Link href="/posts">Blog</Link>
          </Inline>
          <Inline gap="gap-4">
            <Link href="https://static.alhinds.com">Resumé &#x2197;</Link>
            <Link href="https://twitter.com/al_hinds">Twitter &#x2197;</Link>
            <Link href="https://github.com/DarkPurple141">Github &#x2197;</Link>
          </Inline>
        </header>
        <Main />
        <NextScript />
        <footer className="py-4 text-center mt-auto border-t">
          <p>Designed in Figma. Made in Sydney 🇦🇺</p>
        </footer>
      </body>
    </Html>
  )
}
