const fs = require('fs')
const path = require('path')

const BASE = './posts'
const DEST = './static/api'

function success(err) {
   err ? console.error(err) : console.log("All done!")
}

function writeContents(name, meta, date, contents) {

   let json = {
      id : name,
      title: meta.title,
      content: contents,
      image: "soon.jpg",
      meta: {
         published: date.created,
         modified: date.modified,
         description: meta.description,
         tags: meta.tags
      }
   }

   return new Promise((res, rej) => {
      fs.writeFile(`${DEST}/post/${name}.json`, JSON.stringify(json), function(err) {
         if (err) {
            rej(err)
         } else {
            console.log(`${name}.json saved!`)
            res(json)
         }
      })
   })
}

function parseLineForKey(line, key) {
   if (line.startsWith(key)) {
      return line.substr(key.length)
   }
   return ""
}

function parseMetaInfo(file) {

   let lines = file.split('\n')
   let description = ""
   let title = ""
   let tags = ""
   for (let line in lines) {
      if (description && title && tags) break
      if (!title)
         title = parseLineForKey(lines[line], 'title: ')
      if (!description)
         description = parseLineForKey(lines[line], 'stub: ')
      if (!tags)
         tags = parseLineForKey(lines[line], 'tags: ')
   }
   tags = tags.split(',')

   return { description, title, tags }
}

function readContents(bytes, name, date) {

   let file = Buffer.from(bytes, 'utf-8')
   let ascii = file.toString('ascii')

   let body = Buffer.from(ascii.split('---')[2], 'ascii').toString('base64')
   let meta = parseMetaInfo(ascii)

   return writeContents(
      path.parse(name).name,
      meta,
      date,
      body
   )
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
         err ? rej(err) : res(readContents(data, path, {
            created: statObj.birthtime,
            modified: statObj.ctime
         }))
      })
   })
}

function asyncMain() {
   return new Promise((res, rej) => {
      fs.readdir(BASE, function(err, items) {
         if (err) throw err
         let promises = []
         for (let i=0; i<items.length; i++) {
            stat(BASE + '/' + items[i])
            .then(data => readFile(BASE + '/' + items[i], data))
            .then(data => {
               promises.push(data)
               if (promises.length == items.length) {
                  res(promises)
               }
            })
            .catch(err => rej(err))
         }
      })
   })
}
asyncMain()
.then((data) => {
   data = data.map(item => {
      return {
         id: item.id,
         title: item.title,
         date: item.meta.published,
         description: item.meta.description,
         tags: item.meta.tags
      }
   })
   return data
})
.then(data => fs.writeFile(
   `${DEST}/feed.json`,
   JSON.stringify(
      {
         results : data
      }
   ),
   success
))
.catch(err => console.error(err))
