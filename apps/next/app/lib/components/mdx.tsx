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
    <article className="markdown max-w-none prose prose-sm prose-code:text-inherit prose-headings:no-underline prose-headings:after:content-['#'] prose-headings:after:ml-2 prose-headings:after:text-brand.bold prose-headings:text-inherit prose-p:text-subtle prose-li:text-subtle prose-blockquote:text-subtle hover:prose-a:text-brand.bold prose-a:text-inherit -mt-8">
      <Component />
      <p className="border-t mt-8 -mb-8 pt-8">
        You can read more of my <Link href="/posts">writing here</Link>. You can
        also subscribe to <a href="/rss.xml">my RSS feed here</a>.
      </p>
    </article>
  )
}
