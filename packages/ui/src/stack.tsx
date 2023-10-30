import type { ReactNode } from 'react'

type StackProps = {
  children?: ReactNode
  className?: string
  gap?: `gap-${number}`
}

export function Stack({ children, gap, className }: StackProps) {
  return (
    <div
      className={`flex flex-col ${gap + (className ? ' ' + className : '')}`}
    >
      {children}
    </div>
  )
}
