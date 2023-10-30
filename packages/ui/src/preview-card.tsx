import { ReactNode, useRef } from 'react'
import { Heading } from './heading'
import { useLink } from './link'

type PreviewCardProps = {
  heading: ReactNode
  children: ReactNode
  href?: string
  published?: {
    formatted: string
    iso: string
  }
  promoLink?: boolean
}

export const PreviewCard = ({
  heading,
  children,
  href,
  published,
  promoLink = false,
}: PreviewCardProps) => {
  const Link = useLink()
  const ref = useRef<HTMLAnchorElement>(null)
  return (
    <div
      onClick={(e) => {
        if ((e.target as HTMLElement).tagName !== 'A') {
          // otherwise click the link
          ref.current?.click()
        }
      }}
      className="flex flex-col gap-4 hover:cursor-pointer hover:bg-neutral.hover rounded-md p-4 -m-4"
    >
      <div>
        {published && (
          <time dateTime={published.iso}>{published.formatted}</time>
        )}
        <Heading className="heading-sm leading-none" as="h2">
          <Link ref={ref} href={href}>
            {heading}
          </Link>
        </Heading>
      </div>
      <p>{children}</p>
      {promoLink && (
        <p className="font-semibold text-brand.bold">Read article &#x2192;</p>
      )}
    </div>
  )
}
