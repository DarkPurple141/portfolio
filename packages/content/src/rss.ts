import { writeFileSync } from 'fs'
import path from 'path'
// @ts-expect-error
import RSS from 'rss'

type RSSOptions = Partial<{
  title: string
  description: string
  generator: string
  feed_url: string
  site_url: string
  image_url: string
  author: string
  categories: string[]
  pubDate: string
  hub: string
  docs: string
  managingEditor: string
  webMaster: string
  ttl: string
  geoRSS: boolean
  custom_namespaces: any
  custom_elements: any[]
  items: any[]
}>

export function generateRSS(posts: any[]) {
  const feed = new RSS({
    title: 'alhinds.com',
    description:
      'A collection of posts about web development, design and more.',
    feed_url: 'https://alhinds.com/rss.xml',
    site_url: 'https://alhinds.com',
    image_url: 'https://alhinds.com/android-chrome-192x192.png',
    managingEditor: 'Alex Hinds',
    webMaster: 'Alex Hinds',
    copyright: `${new Date().getFullYear()} Alex Hinds`,
    language: 'en',
  } as RSSOptions)

  posts
    .filter((post) => post.description !== 'about')
    .forEach((post) => {
      feed.item({
        title: post.title,
        author: 'Alex Hinds',
        description: post.description,
        url: `https://alhinds.com/posts/${post.slug}`,
        guid: post.slug,
        categories: post.tags,
        date: post.created.raw,
      })
    })

  const xml = feed.xml()

  writeFileSync(path.join(import.meta.dirname, '../generated/rss.xml'), xml)
}
