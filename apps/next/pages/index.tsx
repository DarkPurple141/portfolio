import { Heading, Stack, Socials, PreviewCard } from '@portfolio/ui'
import Link from 'next/link'
import { getLatestPost } from '../clients/posts'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const post = getLatestPost()

  return {
    props: {
      post,
    },
  }
}

export default function Home({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Stack gap="gap-24">
      <Stack gap="gap-8" className="splash">
        <Heading className="heading-xl" as="h1">
          <span className="text-brand.bold">Alex Hinds</span> is a web developer
          and designer based in Sydney, Australia.
        </Heading>
        <Stack gap="gap-4">
          <p>
            I'm a design-focused software engineer and former journalist with a
            passion for delivering great user experiences for the web. I have
            more than a{' '}
            <Link href="https://static.alhinds.com">decade of experience</Link>{' '}
            in web development and software design and am currently focused on
            design systems, frontend tooling and code evolution at{' '}
            <Link href="https://atlassian.design">Atlassian</Link>. I've worked
            at companies of all sizes, in-house and on contract.
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
