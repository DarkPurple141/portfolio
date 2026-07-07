'use client'
import { useLink } from './router'

export const Socials = () => {
  const Link = useLink()
  return (
    <address className="flex flex-wrap gap-x-4 gap-y-1 not-italic">
      <Link
        className="underline-offset-4 hover:underline"
        href="https://static.alhinds.com"
      >
        Resumé &#x2197;
      </Link>
      <Link
        className="underline-offset-4 hover:underline"
        href="https://twitter.com/al_hinds"
      >
        Twitter &#x2197;
      </Link>
      <Link
        className="underline-offset-4 hover:underline"
        href="https://github.com/DarkPurple141"
        rel="me"
      >
        Github &#x2197;
      </Link>
    </address>
  )
}
