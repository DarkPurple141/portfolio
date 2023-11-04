import { Heading, Stack, Socials, PreviewCard } from '@portfolio/ui'
import Link from 'next/link'

export default function Home() {
  return (
    <Stack gap="gap-16">
      <Stack gap="gap-8" className="splash">
        <Heading className="heading-xl" as="h1">
          <span className="text-brand.bold">Alex Hinds</span> is a web developer
          and designer based in Sydney, Australia.
        </Heading>
        <Stack gap="gap-4">
          <p className="body-lg">
            I'm a a design-focused software engineer and former journalist with
            a passion for delivering great user experiences for the web. I have
            more than a{' '}
            <a href="https://static.alhinds.com">decade of experience</a> in web
            development and software design and am currently focused on design
            systems, frontend tooling and code evolution at{' '}
            <a href="https://atlassian.design">Atlassian</a>. I've worked at
            companies of all sizes, in-house and on contract.
          </p>
          <Socials />
        </Stack>
      </Stack>
      <div className="grid sm:grid-cols-2 gap-8">
        <Heading className="heading-lg col-span-1 md:col-span-2" as="h2">
          Featured posts
        </Heading>
        <PreviewCard
          heading="One person, many frameworks"
          href="/posts"
          published={{
            iso: new Date().toISOString(),
            formatted: 'Pinned',
          }}
          promoLink
        >
          This site was built with{' '}
          <Link href="https://nextjs.org/">Next.js</Link>. This site has also
          been <Link href="https://astro.alhinds.com">deployed</Link> and built
          with <Link href="https://astro.build/">Astro</Link>. My old website,
          built in Vue 2,{' '}
          <Link href="https://vue2.alhinds.com">lives here</Link>.
        </PreviewCard>
        <PreviewCard
          promoLink
          published={{
            iso: '2023-10-28T02:00:00.005Z',
            formatted: 'October 2023',
          }}
          heading="How this site was built 🛠"
          href="/posts"
        >
          This article is coming soon! I promise. Seriously I'm writing it as we
          speak. I'm just trying to figure out how to make it interesting.
        </PreviewCard>
      </div>
    </Stack>
  )
}
