'use client'
import { Inline } from './inline'
import { LogoMark } from './logo-mark'
import { useLink, usePathname } from './router'

export const Header = () => {
  const Link = useLink()
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 flex flex-row items-center justify-between border-b border-border bg-surface/80 py-4 backdrop-blur-md">
      <LogoMark />
      <Inline gap="gap-4">
        {[
          {
            name: 'Posts',
            href: '/posts',
          },
          {
            name: 'About',
            href: '/about',
          },
        ].map(({ name, href }) => (
          <Link
            key={href}
            href={href}
            className={
              pathname === href
                ? 'font-semibold text-brand-bold'
                : 'font-medium'
            }
          >
            {name}
          </Link>
        ))}
      </Inline>
    </header>
  )
}
