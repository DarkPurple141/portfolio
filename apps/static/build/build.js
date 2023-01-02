const hbs = require('handlebars')
const path = require('path')
const fs = require('fs')
const { jobData } = require('@portfolio/content')

fs.readFile(path.join(__dirname, 'index.template.hbs'), (err, rawTemplate) => {
  if (err) {
    console.error(err)
    return
  }
  const file = rawTemplate.toString()
  const template = hbs.compile(file)
  const compiled = template({ jobs: jobData })

  fs.writeFileSync(path.join(__dirname, '../public/index.html'), compiled)
})
