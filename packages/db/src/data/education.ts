import type { Qualification } from '../../prisma/generated/client'

export const educationData: Omit<Qualification, 'id'>[] = [
  {
    course: 'B. Sci. (Computer Science)',
    graduation_year: new Date('2018').getFullYear(),
    provider: 'University of New South Wales',
    majors: 'HCI & data visualisation, security, web application engineering',
  },
  {
    course: 'B. Com. & Liberal Studies',
    graduation_year: new Date('2010').getFullYear(),
    provider: 'University of Sydney',
    majors: 'economics, political economy, psychology',
  },
]
