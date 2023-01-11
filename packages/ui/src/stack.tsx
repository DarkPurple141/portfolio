import type { ReactNode } from 'react'

type StackProps = {
  children?: ReactNode
  gap?: 'gap-1' | 'gap-2' | 'gap-3' | 'gap-4'
}

export function Stack({ children, gap }: StackProps) {
  return <div className={`flex flex-col ${gap}`}>{children}</div>
}
