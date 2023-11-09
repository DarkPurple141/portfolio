'use client'
import {
  ContextType,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
} from 'react'

const LinkContext = createContext<any>('a')
const PathnameContext = createContext<string>('/')

export const useLink = () => useContext(LinkContext)
export const usePathname = () => useContext(PathnameContext)

export const PathnameProvider = ({ children }: { children: ReactNode }) => {
  const ref = useRef<string>('')
  useEffect(() => {
    if (typeof window === 'undefined') return
    ref.current = window.location.pathname
  }, [typeof window !== 'undefined' && window.location.pathname])
  return (
    <PathnameContext.Provider value={ref.current}>
      {children}
    </PathnameContext.Provider>
  )
}

export const LinkProvider = ({
  children,
  value,
}: {
  children: ReactNode
  value: ContextType<typeof LinkContext>
}) => <LinkContext.Provider value={value}>{children}</LinkContext.Provider>
