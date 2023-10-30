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
          <footer className="py-4 text-center mt-auto">
            <p className="mb-2">Designed in Figma. Made in Sydney 🇦🇺</p>
            <p className="copyright">© {new Date().getFullYear()} Alex Hinds</p>
          </footer>
        </body>
      </Html>
    </LinkProvider>
  )
}
