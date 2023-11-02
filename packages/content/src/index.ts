import { bundleMDX } from 'mdx-bundler'
// @ts-expect-error
import RSS from 'rss'
import path from 'path'
import fs from 'fs'
import remarkSlug from 'remark-slug'
import { prisma } from '@portfolio/db'
import prettier from 'prettier'

function kebabToCamelCase(str: string) {
  return str.replace(/-./g, (x) => x.toUpperCase()[1])
}

async function build() {
  const posts = fs.readdirSync(path.join(__dirname, 'posts'))
  const postNames: string[] = []
  const postMetaData: any[] = []

  const user = await prisma.user.findFirst({
    where: { email: 'alex.hinds141@gmail.com' },
  })

  for (const post of posts) {
    const isDirectory = fs
      .statSync(path.join(__dirname, 'posts', post))
      .isDirectory()
    const postPath = isDirectory
      ? path.join(__dirname, 'posts', post, 'index.mdx')
      : path.join(__dirname, 'posts', post)
    const file = fs.readFileSync(postPath, 'utf8')
    const fileMetaData = fs.statSync(postPath)
    const metaData = await bundleMDX({
      source: file,
      cwd: path.join(__dirname, 'posts', post),
      mdxOptions(options) {
        options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkSlug]

        return options
      },
      esbuildOptions: (options) => {
        // Set the `outdir` to a public location for this bundle.
        options.target = ['node16']
        options.outdir = path.join(__dirname, '../generated')
        options.define = {
          ...options.define,
          'process.env.NODE_ENV': '"production"',
        }

        return options
      },
    })

    if (metaData.frontmatter.stub === 'about') {
      metaData.frontmatter.author = {
        name: user?.name,
        bio: user?.longDescription,
      }
    }

    const postCleanName = isDirectory ? post : path.parse(postPath).name

    const createdDate = metaData.frontmatter.published || fileMetaData.birthtime

    const createdDateObj = new Date(createdDate)

    // eg: 2023-10-28T02:30:53.235Z
    metaData.frontmatter.modified = {
      raw: fileMetaData.mtime,
      formatted: new Date(fileMetaData.mtime).toLocaleDateString('en-gb'),
    }

    // eg: 2023-10-28T02:30:53.235Z
    metaData.frontmatter.created = {
      raw: createdDate,
      formatted: createdDateObj.toLocaleDateString('en-gb'),
    }

    metaData.frontmatter.slug = `${postCleanName}-${createdDateObj.getFullYear()}-${createdDateObj.getMonth()}-${createdDateObj.getDate()}`

    fs.writeFileSync(
      path.join(__dirname, '../generated', `${postCleanName}.generated.ts`),
      prettier.format(
        `/** THIS IS A GENERATED FILE\n * @command pnpm build\n */\nconst metaData = ${JSON.stringify(
          metaData
        )}; export default metaData;`,
        {
          parser: 'babel',
          semi: false,
          singleQuote: true,
          printWidth: 80,
        }
      )
    )

    postMetaData.push(metaData.frontmatter)
    postNames.push(postCleanName)
  }

  fs.writeFileSync(
    path.join(__dirname, '../generated/index.ts'),
    postNames
      .map((post) => {
        return `export { default as ${kebabToCamelCase(
          post
        )} } from './${post}.generated'`
      })
      .join('\n')
  )

  /* lets create an rss feed */
  const feed = new RSS({
    title: "Alex Hinds' Blog",
    description:
      'A collection of posts about web development, design and more.',
    feed_url: 'https://alhinds.com/rss.xml',
    site_url: 'https://alhinds.com',
    image_url: 'https://alhinds.com/og-image.png',
    managingEditor: 'Alex Hinds',
    webMaster: 'Alex Hinds',
    copyright: `${new Date().getFullYear()} Alex Hinds`,
    language: 'en',
  })

  postMetaData.forEach((post) => {
    feed.item({
      title: post.title,
      author: 'Alex Hinds',
      description: post.stub,
      url: `https://alhinds.com/posts/${post.slug}`,
      guid: post.slug,
      categories: post.tags,
      date: post.created.raw,
    })
  })
  // cache the xml to send to clients
  const xml = feed.xml()

  fs.writeFileSync(path.join(__dirname, '../generated/rss.xml'), xml)
}

build()
