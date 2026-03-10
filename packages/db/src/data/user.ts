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
  {
    name: 'website',
    url: 'https://usehalyard.ai',
    username: 'usehalyard.ai',
  },
  {
    name: 'website',
    url: 'https://halyard.studio',
    username: 'halyard.studio',
  },
]

export const userData: Omit<User, 'id'> = {
  name: 'Alex Hinds',
  email: 'alex.hinds141@gmail.com',
  phone: '+61 411 849 217',
  shortDescription3rdPerson:
    'Alex Hinds is a technical and product leader building usehalyard.ai and consulting through halyard.studio, with deep roots in design engineering and AI.',
  longDescription3rdPerson:
    "Alex Hinds is building Halyard, an AI context platform, and consults on AI product strategy and engineering leadership through Halyard Studio. Previously he led product and engineering at Lorikeet from pre-revenue to Series B, and built design systems at Atlassian. He has a background in journalism and thrives at the intersection of design, product strategy and technical execution.",
  shortDescription: `I'm building something new and consulting and advising on the side. I focus on AI product strategy, engineering leadership and design systems.`,
  longDescription: `I'm building Halyard, an AI context platform that helps teams capture and share expertise. I also consult and advise on AI product strategy, engineering leadership and design systems through Halyard Studio. Previously I led product and engineering at Lorikeet from pre-revenue to Series B, and built design systems at Atlassian.`,
}
