import type { User, Social } from '@prisma/client'

export const socials: Omit<Social, 'id' | 'userId'>[] = [
  {
    name: 'github',
    username: '@DarkPurple141',
    url: 'https://github.com/DarkPurple141',
  },
  {
    name: 'twitter',
    username: '@al_hinds',
    url: 'https://twitter.com/al_hinds',
  },
  {
    name: 'linkedin',
    username: 'Alex Hinds',
    url: 'https://www.linkedin.com/in/alex-hinds-12449660/',
  },
  {
    name: 'website',
    url: 'https://alhinds.com',
    username: 'alhinds.com',
  },
]

export const userData: Omit<User, 'id'> = {
  name: 'Alex Hinds',
  email: 'alex.hinds141@gmail.com',
  phone: '+61 411 849 217',
  shortDescription3rdPerson:
    'Alex Hinds is a web developer who thrives at the intersection of design and engineering.',
  longDescription3rdPerson:
    'Alex Hinds is a software engineer and former journalist with a passion for UX/UI, frontend engineering and web development. He thrives at the intersection of design and engineering, and has worked with some of the best technology companies in the industry.',
  shortDescription: `I'm a design-focused software engineer and former journalist with
    a passion for delivering great user experiences for the web.`,
  longDescription: `I'm a design-focused software engineer and former journalist with
  a passion for delivering great user experiences for the web. I've
  honed my craft at some of the world's best technology companies,
  working in many different problem domains. I thrive at the
  intersection of design and engineering, and my latest focus has
  been on building Design Systems at scale.`,
}
