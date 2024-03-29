'use client'
import { useLink } from './router'

export const Socials = () => {
  const Link = useLink()
  return (
    <address className="flex md:flex-row gap-2">
      <Link href="https://static.alhinds.com">Resumé &#x2197;</Link>
      <Link href="https://twitter.com/al_hinds">Twitter &#x2197;</Link>
      <Link href="https://github.com/DarkPurple141" rel="me">
        Github &#x2197;
      </Link>
    </address>
  )
}
