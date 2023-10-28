import '@portfolio/reset/reset.css'
import '@portfolio/reset/theme.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="flex flex-col gap-8 justify-between">
      <Component {...pageProps} />
    </main>
  )
}
