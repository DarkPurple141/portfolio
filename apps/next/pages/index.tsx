import { Heading, Stack } from '@portfolio/ui'

export default function Home() {
  return (
    <>
      <Heading className="sr-only heading-xl" as="h1">
        Alex Hinds, web developer and designer based in Sydney, Australia.
      </Heading>
      <Stack gap="gap-3">
        <Heading className="heading-md" as="h2">
          Hi, I’m Alex - a software engineer passionate for building great
          experiences for the web.
        </Heading>
        <p>
          I have more than a{' '}
          <a href="https://static.alhinds.com">decade of experience</a> in web
          development and software design and am currently focused on design
          systems, frontend tooling and code evolution at{' '}
          <a href="https://atlassian.design">Atlassian</a>.
        </p>
        <p>
          I've worked at companies of all sizes, in-house and on contract. I’m
          always open to opportunities.
        </p>
      </Stack>
      <div data-secondary className="grid sm:grid-cols-2 gap-4">
        <div className="border rounded p-4 flex flex-col gap-3">
          <Heading className="heading-sm" as="h3">
            Built with <span className="text-brand.bold">NextJS</span>
          </Heading>
          <p>
            This site was built with NextJS. This site has also been deployed
            and built with SolidJS, Vue and Remix.
          </p>
        </div>
        <div className="border rounded p-4 flex flex-col gap-3">
          <Heading className="heading-sm" as="h3">
            How this site was built 🛠
          </Heading>
          <p>
            This site was built with NextJS. This site has also been deployed
            and built with SolidJS, Vue and Remix.
          </p>
        </div>
      </div>
    </>
  )
}
