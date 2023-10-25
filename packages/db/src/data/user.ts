import type { User } from '@prisma/client'

export const userData: Omit<User, 'id'> = {
  name: 'Alex Hinds',
  email: 'alex.hinds141@gmail.com',
  shortDescription:
    'I am a software engineer with a passion for building beautiful and performant user interfaces.',
  longDescription: `I am a software engineer with a passion for building beautiful and performant user interfaces. I have a strong background in web development, with experience in React, Node.js, TypeScript, and GraphQL. I am a strong advocate for open source software and have contributed to a number of projects including @compiled, @emotion, storybook-addon-performance and eslint-codemod-utils. I am currently working at Atlassian on the Atlassian Design System.`,
}
