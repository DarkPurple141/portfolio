'use client'
import { Inline } from './inline'
import { LogoMark } from './logo-mark'
import { useLink, usePathname } from './router'

export const Header = () => {
  const Link = useLink()
  const pathname = usePathname()
  return (
    <header className="sticky top-0 left-0 right-0 flex flex-row justify-between items-center py-4 bg-surface">
      <LogoMark />
      <Inline gap="gap-3">
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
            className={pathname === href ? 'text-brand.bold' : undefined}
          >
            {name}
          </Link>
        ))}
      </Inline>
    </header>
  )
}
