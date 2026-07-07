'use client'
import { ReactNode, useRef } from 'react'
import { Heading } from './heading'
import { useLink } from './router'

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
      className="group flex cursor-pointer flex-col gap-3 rounded-xl border border-border bg-elevated p-5 transition-colors duration-200 hover:bg-neutral-hover"
    >
      <div className="flex flex-col gap-1.5">
        {published && (
          <time className="heading-xs text-subtlest" dateTime={published.iso}>
            {published.formatted}
          </time>
        )}
        <Heading className="heading-md leading-tight" as="h2">
          <Link ref={ref} href={href}>
            {heading}
          </Link>
        </Heading>
      </div>
      <p className="body-sm">{children}</p>
      {promoLink && (
        <p className="mt-1 inline-flex items-center gap-1.5 font-semibold text-brand-bold">
          Read article
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            &#x2192;
          </span>
        </p>
      )}
    </div>
  )
}
