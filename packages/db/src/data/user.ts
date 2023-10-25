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
    'Alex Hinds is a software engineer and former journalist with a passion for UX/UI, frontend engineering and web development. He thrives at the intersection of design and engineering, and has worked with some of the best technology teams in the industry.',
  shortDescription:
    'I am a software engineer with a passion for building beautiful and performant user interfaces.',
  longDescription: `I am a software engineer with a passion for building beautiful and performant user interfaces. I have a strong background in web development, with experience in React, Node.js, TypeScript, and GraphQL. I am a strong advocate for open source software and have contributed to a number of projects including @compiled, @emotion, storybook-addon-performance and eslint-codemod-utils. I am currently working at Atlassian on the Atlassian Design System.`,
}
