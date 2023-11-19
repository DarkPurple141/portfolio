import '@halyard/reset/reset.css'
import '@halyard/reset/theme.css'
import '../styles/globals.css'
import type { Metadata } from 'next'

import { LinkProvider, Header, Footer, PathnameProvider } from '@halyard/ui'
import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PathnameProvider>
      <LinkProvider value={Link}>
        <html lang="en">
          <head>
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link
              rel="mask-icon"
              href="/safari-pinned-tab.svg"
              color="#6262DA"
            />
            <meta name="msapplication-TileColor" content="#6262da" />
          </head>
          <body className="max-w-2xl m-auto flex flex-col justify-between">
            <Header />
            <main className="py-8 my-8">{children}</main>
            <Footer />
          </body>
        </html>
      </LinkProvider>
    </PathnameProvider>
  )
}

export const metadata: Metadata = {
  viewport: 'width=device-width, initial-scale=1',
  metadataBase: new URL('https://alhinds.com'),
  title: 'Alex Hinds, web developer and designer',
  manifest: '/site.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#98c0d7' },
    { media: '(prefers-color-scheme: light)', color: '#6262da' },
  ],
  icons: {
    other: {
      rel: 'webmention',
      url: 'https://webmention.io/www.alhinds.com/webmention',
    },
  },
  description:
    'Alex Hinds is a software engineer and former journalist with a passion for UX/UI, frontend engineering and web development.',
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Alex Hinds, Web developer and designer',
    description:
      'Alex Hinds is a software engineer and former journalist with a passion for UX/UI, frontend engineering and web development.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Alex Hinds, web developer and designer',
      },
    ],
  },
}
