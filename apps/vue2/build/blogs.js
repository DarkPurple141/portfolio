const fs = require('fs')
const path = require('path')

const BASE = './posts'
const DEST = './public/api'

function success(err) {
  err ? console.error(err) : console.log('All done!')
}

function writeContents(name, meta, date, contents) {
  const json = {
    id: name,
    title: meta.title,
    content: contents,
    image: 'soon.jpg',
    meta: {
      published: date.created,
      modified: date.modified,
      description: meta.description,
      tags: meta.tags,
    },
  }

  return new Promise((res, rej) => {
    fs.writeFile(
      `${DEST}/post/${name}.json`,
      JSON.stringify(json, null, 2),
      function (err) {
        if (err) {
          rej(err)
        } else {
          // eslint-disable-next-line no-console
          console.log(`${name}.json saved!`)
          res(json)
        }
      }
    )
  })
}

function parseLineForKey(line, key) {
  if (line.startsWith(key)) {
    return line.substr(key.length)
  }
  return ''
}

function parseMetaInfo(file) {
  const lines = file.split('\n')
  let description = ''
  let title = ''
  let tags = ''
  for (const line in lines) {
    if (description && title && tags) break
    if (!title) title = parseLineForKey(lines[line], 'title: ')
    if (!description) description = parseLineForKey(lines[line], 'stub: ')
    if (!tags) tags = parseLineForKey(lines[line], 'tags: ')
  }
  tags = tags.split(',')

  return { description, title, tags }
}

function readContents(bytes, name, date) {
  const file = Buffer.from(bytes, 'utf-8')
  const ascii = file.toString('ascii')

  const body = Buffer.from(ascii.split('---')[2], 'ascii').toString('base64')
  const meta = parseMetaInfo(ascii)

  return writeContents(path.parse(name).name, meta, date, body)
}

function stat(path) {
  return new Promise((res, rej) => {
    fs.stat(path, (err, statObj) => {
      err ? rej(err) : res(statObj)
    })
  })
}

function readFile(path, statObj) {
  return new Promise((res, rej) => {
    fs.readFile(path, (err, data) => {
      err
        ? rej(err)
        : res(
            readContents(data, path, {
              created: statObj.birthtime,
              modified: statObj.ctime,
            })
          )
    })
  })
}

function asyncMain() {
  return new Promise((res, rej) => {
    fs.readdir(BASE, function (err, items) {
      if (err) throw err
      const promises = []
      for (let i = 0; i < items.length; i++) {
        stat(BASE + '/' + items[i])
          .then((data) => readFile(BASE + '/' + items[i], data))
          .then((data) => {
            promises.push(data)
            if (promises.length == items.length) {
              res(promises)
            }
          })
          .catch(rej)
      }
    })
  })
}
asyncMain()
  .then((data) =>
    data.map((item) => {
      return {
        id: item.id,
        title: item.title,
        date: item.meta.published,
        description: item.meta.description,
        tags: item.meta.tags,
      }
    })
  )
  .then((data) =>
    fs.writeFile(
      `${DEST}/feed.json`,
      JSON.stringify(
        {
          results: data,
        },
        null,
        2
      ),
      success
    )
  )
  // eslint-disable-next-line no-console
  .catch(console.error)
