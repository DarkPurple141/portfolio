import '@portfolio/reset/reset.css'
import '@portfolio/reset/theme.css'
import '../styles/globals.css'

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
            <title>Alex Hinds, Web developer</title>
            <meta
              name="title"
              content="Alex Hinds, Web developer and designer"
            />
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
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
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
