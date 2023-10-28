import { bundleMDX } from 'mdx-bundler'
import path from 'path'
import fs from 'node:fs'
import remarkSlug from 'remark-slug'

function kebabToCamelCase(str: string) {
  return str.replace(/-./g, (x) => x.toUpperCase()[1])
}

async function build() {
  const posts = fs.readdirSync(path.join(__dirname, 'posts'))
  const postNames: string[] = []

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

    const postCleanName = isDirectory ? post : path.parse(postPath).name

    metaData.frontmatter.createdDate = fileMetaData.birthtime
    metaData.frontmatter.modifiedDate = fileMetaData.mtime
    metaData.frontmatter.slug = `${postCleanName}-${fileMetaData.birthtimeMs}`

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
