import { bundleMDX } from 'mdx-bundler'

import path from 'path'
import fs from 'fs'
import remarkSlug from 'remark-slug'

import { prisma } from '@portfolio/db'
import prettier from 'prettier'
import { generateRSS } from './rss'

function kebabToCamelCase(str: string) {
  return str.replace(/-./g, (x) => x.toUpperCase()[1])
}

async function build() {
  const postsDir = path.join(import.meta.dirname, 'posts')
  const posts = fs.readdirSync(postsDir)
  const postNames: string[] = []
  const postMetaData: any[] = []

  const user = await prisma.user.findFirst({
    where: { email: 'alex.hinds141@gmail.com' },
  })

  for (const post of posts) {
    const postPath = path.join(postsDir, post)
    const isDirectory = fs.statSync(postPath).isDirectory()
    const filePath = isDirectory ? path.join(postPath, 'index.mdx') : postPath

    if (isDirectory) {
      const assetPath = path.join(
        import.meta.dirname,
        '../../../apps/static/static/public',
        post,
      )
      if (!fs.existsSync(assetPath))
        fs.mkdirSync(assetPath, { recursive: true })

      fs.readdirSync(postPath).forEach((fileName) => {
        if (path.parse(fileName).name === 'index') return
        fs.copyFileSync(
          path.join(postPath, fileName),
          path.join(assetPath, fileName),
        )
      })
    }

    const file = fs.readFileSync(filePath, 'utf8')
    const fileMetaData = fs.statSync(filePath)
    const metaData = await bundleMDX({
      source: file,
      cwd: import.meta.dirname,
      mdxOptions(options) {
        options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkSlug]
        return options
      },
      esbuildOptions: (options) => {
        options.target = ['node16']
        options.outdir = path.join(import.meta.dirname, '../generated')
        options.define = {
          ...options.define,
          'process.env.NODE_ENV': '"production"',
        }
        return options
      },
    })

    if (metaData.frontmatter.description === 'about') {
      metaData.frontmatter.author = {
        name: user?.name,
        bio: user?.longDescription,
      }
    }

    const postCleanName = isDirectory ? post : path.parse(filePath).name

    const createdDate = metaData.frontmatter.published || fileMetaData.birthtime
    const createdDateObj = new Date(createdDate)

    const dateOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    } as const

    metaData.frontmatter.modified = {
      raw: fileMetaData.mtime,
      formatted: new Date(fileMetaData.mtime).toLocaleString(
        'en-US',
        dateOptions,
      ),
    }

    metaData.frontmatter.created = {
      raw: createdDate,
      formatted: createdDateObj.toLocaleString('en-US', dateOptions),
    }

    metaData.frontmatter.slug = `${postCleanName}-${createdDateObj.getFullYear()}-${createdDateObj.getMonth()}-${createdDateObj.getDate()}`

    const generatedDir = path.join(import.meta.dirname, '../generated')
    fs.writeFileSync(
      path.join(generatedDir, `${postCleanName}.generated.ts`),
      prettier.format(
        `/** THIS IS A GENERATED FILE\n * @command pnpm build\n */\nconst metaData = ${JSON.stringify(
          metaData,
        )}; export default metaData;`,
        {
          parser: 'babel',
          semi: false,
          singleQuote: true,
          printWidth: 80,
        },
      ),
    )

    postMetaData.push(metaData.frontmatter)
    postNames.push(postCleanName)
  }

  const generatedDir = path.join(import.meta.dirname, '../generated')
  fs.writeFileSync(
    path.join(generatedDir, 'index.ts'),
    postNames
      .map((post) => {
        return `export { default as ${kebabToCamelCase(post)} } from './${post}.generated'`
      })
      .join('\n'),
  )

  generateRSS(postMetaData)
}

build()
