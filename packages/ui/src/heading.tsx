import type { ReactNode } from 'react'

type HeadingProps = {
  className?: string
  children?: ReactNode
  as?: keyof typeof sizeMap
}

const sizeMap = {
  h1: 'text-4xl',
  h2: 'text-2xl',
  h3: 'text-base',
} as const

export function Heading({
  className = '',
  children,
  as: H = 'h3',
}: HeadingProps) {
  return <H className={`${sizeMap[H]} ${className}`}>{children}</H>
}
