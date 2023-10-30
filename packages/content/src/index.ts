import { bundleMDX } from 'mdx-bundler'
import path from 'path'
import fs from 'node:fs'
import remarkSlug from 'remark-slug'
import { prisma } from '@portfolio/db'

function kebabToCamelCase(str: string) {
  return str.replace(/-./g, (x) => x.toUpperCase()[1])
}

async function build() {
  const posts = fs.readdirSync(path.join(__dirname, 'posts'))
  const postNames: string[] = []

  const user = await prisma.user.findFirst({
    where: { email: 'alex.hinds141@gmail.com' },
    include: { socials: true },
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

    if (metaData.frontmatter.title === 'About') {
      metaData.frontmatter.author = {
        name: user?.name,
        socials: user?.socials,
        bio: user?.longDescription,
      }
    }

    const postCleanName = isDirectory ? post : path.parse(postPath).name

    const createdDate =
      metaData.frontmatter.firstPublished || fileMetaData.birthtime

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
      `/** THIS IS A GENERATED FILE\n  @command pnpm build\n  */\nconst metaData = ${JSON.stringify(
        metaData
      )}; export default metaData;`
    )

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
}

build()
