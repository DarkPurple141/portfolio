import type { ReactNode } from 'react'

type HeadingProps = {
  className?: string
  id?: string
  children?: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4'
}

export function Heading({
  id,
  className,
  children,
  as: H = 'h3',
}: HeadingProps) {
  return (
    <H id={id} className={className}>
      {children}
    </H>
  )
}
