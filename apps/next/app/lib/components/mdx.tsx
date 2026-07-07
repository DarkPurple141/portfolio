'use client'
import { getMDXComponent } from 'mdx-bundler/client'
import Link from 'next/link'
import { useMemo } from 'react'
import { Post } from '../clients/posts'

export const MDX = ({
  code,
  frontmatter,
}: Pick<Post, 'code' | 'frontmatter'>) => {
  const Component = useMemo(() => getMDXComponent(code, frontmatter), [code])
  return (
    <article className="markdown prose-portfolio -mt-8">
      <a href={`/posts/${frontmatter.slug}`} className="sr-only u-url u-uid">
        Permalink
      </a>
      <div className="e-content">
        <Component />
      </div>
      <p className="border-t mt-8 -mb-8 pt-8">
        You can read more of my <Link href="/posts">writing here</Link>. You can
        also subscribe to <a href="/rss.xml">my RSS feed here</a>.
      </p>
    </article>
  )
}
