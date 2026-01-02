import hbs from 'handlebars'
import fs from 'fs'
import { prisma } from '@portfolio/db'

async function main() {
  const jobs = await prisma.job.findMany({ orderBy: { start_date: 'desc' } })
  const qualifications = await prisma.qualification.findMany()
  const user = await prisma.user.findFirst({
    where: { email: 'alex.hinds141@gmail.com' },
    include: { socials: true },
  })

  const fileUrl = new URL('index.template.hbs', import.meta.url)

  fs.readFile(fileUrl, (err, rawTemplate) => {
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

    const outputUrl = new URL('../static/index.html', import.meta.url)

    fs.writeFileSync(outputUrl, compiled)
  })
}

main()
