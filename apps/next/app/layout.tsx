import '@portfolio/reset/reset.css'
import '@portfolio/reset/theme.css'
import '../styles/globals.css'
import type { Metadata } from 'next'

import { LinkProvider, Header, Footer, PathnameProvider } from '@portfolio/ui'
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
            <link rel="icon" href="/logo.svg" type="image/svg+xml" />
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
  title: 'Alex Hinds, Web developer',
  icons: new URL('https://alhinds.com/logo.svg'),
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
        alt: 'Alex Hinds, Web developer and designer',
      },
    ],
  },
}
