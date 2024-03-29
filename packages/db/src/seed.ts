import { prisma } from '.'

import { educationData } from './data/education'
import { jobData } from './data/jobs'
import { socials, userData } from './data/user'
;(async () => {
  try {
    // eslint-disable-next-line no-console
    console.log('Seeding database...')
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

    // eslint-disable-next-line no-console
    console.log('Adding user...')
    await prisma.user.upsert({
      where: {
        email: userData.email,
      },
      update: {
        ...userData,
        socials: {
          upsert: socials.map((social) => ({
            where: { url: social.url },
            update: social,
            create: social,
          })),
        },
      },
      create: {
        ...userData,
        socials: {
          create: socials,
        },
      },
    })

    // eslint-disable-next-line no-console
    console.log('Adding jobs...')
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
    // eslint-disable-next-line no-console
    console.log('Seeding complete')
    await prisma.$disconnect()
  }
})()
