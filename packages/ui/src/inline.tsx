import type { ReactNode } from 'react'

type InlineProps = {
  children?: ReactNode
  gap?: 'gap-1' | 'gap-2' | 'gap-3' | 'gap-4'
  align?: 'center' | 'start'
}

export function Inline({ children, gap, align }: InlineProps) {
  return (
    <div className={`flex items-${align} ${gap} sm:flex-nowrap flex-wrap`}>
      {children}
    </div>
  )
}
