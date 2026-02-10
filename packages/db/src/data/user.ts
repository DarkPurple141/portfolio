import type { User, Social } from '../../prisma/generated/client'

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
    'Alex Hinds is a technical and product leader with deep roots in design engineering and a track record shipping software across startups and enterprise.',
  longDescription3rdPerson:
    "Alex Hinds is a design-minded engineer and product leader who has led product and engineering at the frontier of AI with some of Australia's fastest-growing startups, and built design systems at Atlassian. He has a background in journalism and thrives at the intersection of design, product strategy and technical execution.",
  shortDescription: `I'm a design-minded engineer and technical leader with a background in journalism and a focus on building great software for the web.`,
  longDescription: `I'm a design-minded engineer and product leader with a background in journalism. Most recently I've been leading product and engineering at the frontier of AI, building the technical and product foundations for some of Australia's fastest-growing startups. Before that I built design systems at Atlassian. I thrive at the intersection of design, product strategy and technical execution.`,
}
