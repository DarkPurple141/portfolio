import type { ReactNode } from 'react'
import { Heading } from './heading'

type PanelProps = {
  title?: ReactNode
  children: ReactNode
  columns?: 1 | 2
  className?: string
}

/*
 * A titled editorial section: a tracked, uppercase eyebrow above a grid of
 * content (typically PreviewCards). Sits on the page background with a hairline
 * top rule — the cards carry their own elevation, so they read identically here
 * and in the standalone posts list.
 */
export function Panel({ title, children, columns = 1, className }: PanelProps) {
  return (
    <section
      className={`flex flex-col gap-6 border-t border-border pt-8${
        className ? ' ' + className : ''
      }`}
    >
      {title && (
        <Heading as="h2" className="heading-xs text-subtlest">
          {title}
        </Heading>
      )}
      <div className={`grid gap-6${columns === 2 ? ' sm:grid-cols-2' : ''}`}>
        {children}
      </div>
    </section>
  )
}
