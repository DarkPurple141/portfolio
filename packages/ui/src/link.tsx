import { ContextType, ReactNode, createContext, useContext } from 'react'

const LinkContext = createContext<any>('a')

export const useLink = () => useContext(LinkContext)

export const LinkProvider = ({
  children,
  value,
}: {
  children: ReactNode
  value: ContextType<typeof LinkContext>
}) => <LinkContext.Provider value={value}>{children}</LinkContext.Provider>
