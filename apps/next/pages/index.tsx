import Head from 'next/head'
import { Avatar, Heading, Stack } from '@portfolio/ui'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Hinds Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Alex Hinds, Web Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-3xl m-auto flex flex-col justify-between">
        <div className="flex flex-row justify-between p-4">
          <nav className="flex flex-row gap-4">
            <a className="text-brand.bold" href="/">
              Home
            </a>
            <a>About</a>
            <a>Blog</a>
          </nav>
          <div data-settings>
            <div className="w-4 h-4 bg-slate-200 rounded"></div>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <Avatar src="/profile.png" />
          <Stack gap="gap-4">
            <Stack gap="gap-2">
              <Heading as="h1" className={inter.className}>
                Hi, I’m Alex. 👋
              </Heading>
              <Heading as="h3" className={inter.className}>
                I’m a Software Engineer, based in Sydney, Australia.
              </Heading>
            </Stack>
            <p className="text-sm">
              I’m passionate for UX/UI, frontend engineering and web
              development. I’m currently focused on design systems, frontend
              tooling and code evolution at Atlassian but I’m always open to
              opportunities. Have a look around!
            </p>
          </Stack>
        </div>
        <div data-secondary className="grid grid-cols-2 gap-4">
          <div className="border rounded p-4 flex flex-col gap-3">
            <Heading as="h2">
              Built with <span className="text-brand.bold">NextJS</span>
            </Heading>
            <p className="text-sm">
              This site was built with NextJS. This site has also been deployed
              and built with SolidJS, Vue and Remix.
            </p>
          </div>
          <div className="border rounded p-4 flex flex-col gap-3">
            <Heading as="h2">How this site was built 🛠</Heading>
            <p className="text-sm">
              This site was built with NextJS. This site has also been deployed
              and built with SolidJS, Vue and Remix.
            </p>
          </div>
        </div>
        <div className="p-4 text-center">Footer</div>
      </main>
    </>
  )
}
