import { prisma } from '.'

import { educationData } from './data/education'
import { jobData } from './data/jobs'
;(async () => {
  try {
    await Promise.all(
      educationData.map((qualification) =>
        prisma.qualification.upsert({
          where: {
            course: qualification.course,
          },
          update: {
            ...qualification,
          },
          create: {
            ...qualification,
          },
        })
      )
    )
    await Promise.all(
      jobData.map((job) =>
        prisma.job.upsert({
          where: {
            company: job.company,
          },
          update: {
            ...job,
          },
          create: {
            ...job,
          },
        })
      )
    )
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
})()
