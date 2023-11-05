import { LinkProvider } from '@portfolio/ui'
import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <LinkProvider value={Link}>
      <Html lang="en">
        <Head />
        <body className="max-w-2xl m-auto flex flex-col justify-between">
          <Main />
          <NextScript />
          <footer className="p-8 text-center mt-auto body-md">
            <p className="text-subtlest">
              Designed in Figma. Made in Sydney 🇦🇺
            </p>
            <p className="copyright mt-2 text-subtlest">
              © {new Date().getFullYear()} Alex Hinds
            </p>
          </footer>
        </body>
      </Html>
    </LinkProvider>
  )
}
