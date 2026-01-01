import hbs from 'handlebars'
import path from 'path'
import fs from 'fs'
import { prisma } from '@portfolio/db'

async function main() {
  const jobs = await prisma.job.findMany({ orderBy: { start_date: 'desc' } })
  const qualifications = await prisma.qualification.findMany()
  const user = await prisma.user.findFirst({
    where: { email: 'alex.hinds141@gmail.com' },
    include: { socials: true },
  })

  fs.readFile(
    path.join(__dirname, 'index.template.hbs'),
    (err, rawTemplate) => {
      if (err) {
        console.error(err)
        return
      }

      const file = rawTemplate.toString()
      const template = hbs.compile(file)
      const compiled = template({
        jobs,
        qualifications,
        published_year: new Date().getFullYear(),
        user,
      })

      fs.writeFileSync(path.join(__dirname, '../static/index.html'), compiled)
    },
  )
}

main()
