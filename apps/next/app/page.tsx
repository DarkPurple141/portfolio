import { Heading, Stack, Socials, PreviewCard } from '@halyard/ui'
import Link from 'next/link'
import { getLatestPost } from '@/app/lib/clients/posts'

export default async function Home() {
  const post = await getLatestPost()

  return (
    <Stack gap="gap-24">
      <Stack gap="gap-8" className="splash">
        <Heading className="heading-xl" as="h1">
          <span className="text-brand.bold">Alex Hinds</span> is building
          something new. I'm based in Sydney.
        </Heading>
        <Stack gap="gap-4">
          <p>
            I'm building <Link href="https://usehalyard.ai">Halyard</Link>, an
            AI context platform that helps teams capture and share expertise. I
            also consult and advise through{' '}
            <Link href="https://halyard.studio">Halyard Studio</Link> on AI
            product strategy, engineering leadership and design systems.
            Previously I led product and engineering at{' '}
            <Link href="https://lorikeetcx.ai">Lorikeet</Link> from pre-revenue
            to Series B, and built{' '}
            <Link href="https://atlassian.design">
              design systems at Atlassian
            </Link>
            .
          </p>
          <Socials />
        </Stack>
      </Stack>
      <div className="grid sm:grid-cols-2 gap-8 -m-8 p-8 bg-accent">
        <Heading className="heading-300 col-span-1 sm:col-span-2" as="h2">
          Featured
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
          with <Link href="https://astro.build/">Astro</Link>. My old website{' '}
          <Link href="https://vue2.alhinds.com">lives here</Link>.
        </PreviewCard>
        <PreviewCard
          promoLink
          published={{
            formatted: post.frontmatter.created.formatted,
            iso: post.frontmatter.created.raw,
          }}
          heading={post.frontmatter.title}
          href={`/posts/${post.frontmatter.slug}`}
        >
          {post.frontmatter.description}
        </PreviewCard>
      </div>
    </Stack>
  )
}
