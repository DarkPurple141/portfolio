import Head from 'next/head'
import { Avatar, Heading, Stack, Icon, Inline } from '@portfolio/ui'
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
      <main className="max-w-3xl m-auto flex flex-col justify-between gap-12">
        <div className="flex flex-row justify-between py-4">
          <Inline gap="gap-4">
            <a className="text-brand.bold" href="/">
              Home
            </a>
            <a>About</a>
            <a>Blog</a>
          </Inline>
          <Inline gap="gap-4">
            <a href="https://twitter.com/al_hinds">
              <Icon src="/twitter/black.svg" alt="twitter social icon" />
            </a>
            <a href="https://github.com/DarkPurple141">
              <Icon src="/github/black.svg" alt="github social icon" />
            </a>
            <div className="leading-5 text-xl">⚙️</div>
          </Inline>
        </div>
        <Inline gap="gap-4" align="start">
          <Avatar src="/profile.png" />
          <Stack gap="gap-3">
            <Heading as="h1" className={inter.className}>
              Hi, I’m Alex - a software engineer passionate for building great
              experiences for the web.
            </Heading>
            <p className={inter.className}>
              I have more than a decade of experience in engineering and am
              currently focused on design systems, frontend tooling and code
              evolution at Atlassian.
            </p>
            <p className={inter.className}>
              I've worked at companies of all sizes, in-house and on contract
              and I’m always open to opportunities.
            </p>
          </Stack>
        </Inline>
        <div data-secondary className="grid sm:grid-cols-2 gap-4">
          <div className="border rounded p-4 flex flex-col gap-3">
            <Heading as="h2">
              Built with <span className="text-brand.bold">NextJS</span>
            </Heading>
            <p className={inter.className}>
              This site was built with NextJS. This site has also been deployed
              and built with SolidJS, Vue and Remix.
            </p>
          </div>
          <div className="border rounded p-4 flex flex-col gap-3">
            <Heading as="h2">How this site was built 🛠</Heading>
            <p className={inter.className}>
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
