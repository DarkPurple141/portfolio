import '@portfolio/reset/reset.css'
import '@portfolio/reset/theme.css'
import '../styles/globals.css'
import { Inline, LogoMark } from '@portfolio/ui'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Alex Hinds, Web developer</title>
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
      <header className="flex flex-row justify-between py-4">
        <LogoMark />
        <Inline gap="gap-3">
          {[
            {
              name: 'Posts',
              href: '/posts',
            },
            {
              name: 'About',
              href: '/about',
            },
          ].map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              className={
                router.pathname === href ? 'text-brand.bold' : undefined
              }
            >
              {name}
            </Link>
          ))}
        </Inline>
      </header>
      <main className="py-8 my-8">
        <Component {...pageProps} />
      </main>
    </>
  )
}
