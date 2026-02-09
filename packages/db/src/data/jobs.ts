import type { Job } from '../../prisma/generated/client'

export const jobData: Omit<Job, 'id'>[] = [
  {
    title: 'Founding Product & Engineering Lead',
    company: 'Lorikeet',
    href: 'https://lorikeetcx.ai',
    start_date: new Date('2023').getFullYear(),
    end_date: null,
    description:
      'Employee #2 at Lorikeet, a company building the bleeding edge of CX platforms and revolutionising how we think about support.',
    extended_description: `I wanted to go deep on the bleeding edge of AI + flex in a high-agency, high velocity environment brimming with ambition and possibility.. so I joined as employee #2 of Lorikeet. I drove the technical and product foundations as we grew from pre-revenue to Series B. My role was cross-functional:

- I worked across design (I hired the entire design team, and drove the iteration and development of the brand and product UI foundations). I worked with external contractors on ideation and bridged the gap where needed into the technical implementation (there was nobody else)
- I worked across product (I drove the iteration, and evolution of the workflow editor, the application and product taxonomy, the LLM controllers and design, the data flows and much more). At a startup I found this role the most challenging and rewarding. Everyday in the age of a coding-agents an LLM-generated code is an opportunity for the product to fray or turn into a feature fountain. Keeping it level is a habit.
- I worked across engineering, creating a system of runbooks and technical processes, guiding the development and evolution of our infrastructure, running technical learning sessions and providing guidance to juniors. I did less of this role over the course of my tenure as I focused on product and design but over the first 18 months I led all the dev productivity metrics (not that it matters).

We moved from having a product that was more mechanical turk than real software to a key part of operational infrastructure serving 10s of thousands of customer requests every day for companies all across the globe.`,
  },
  {
    title: 'Senior Software Engineer',
    company: 'Atlassian Design System',
    href: 'https://atlassian.design',
    start_date: new Date('2020').getFullYear(),
    end_date: new Date('2023').getFullYear(),
    description:
      'Took a leading role in evolving the Atlassian Design System, working closely with designers to build a new generation of components and tools. Led the architecture and rollout of new spacing and typography foundations for the company.',
    extended_description: null,
  },
  {
    title: 'Software Engineer',
    company: 'Atlassian',
    href: 'https://atlassian.com',
    start_date: new Date('2019').getFullYear(),
    end_date: new Date('2020').getFullYear(),
    description:
      "Developed an innovative solution to Atlassian's real user monitoring and rolled out a scalable system across cloud and server products. Mostly working with Node.js, docker, AWS and golang.",
    extended_description: null,
  },
  {
    title: 'Web Developer',
    company: 'Kayo Sports',
    href: 'https://www.kayosports.com.au/',
    start_date: new Date('2018').getFullYear(),
    end_date: new Date('2019').getFullYear(),
    description:
      'Helped develop and launch a new sports video streaming platform for the web. Mostly working with React/Node.js.',
    extended_description: null,
  },
  {
    title: 'Developer',
    company: 'Buy Somewhere',
    start_date: new Date('2017').getFullYear(),
    end_date: new Date('2017').getFullYear(),
    href: 'https://www.buysomewhere.com/',
    description:
      'Worked as a core developer on an independent game label, launching an augmented reality Monopoly-esque game for mobile. I was a part of a small team driving the games geo-location mechanics.',
    extended_description: null,
  },
  {
    title: 'Web Developer',
    company: 'Freelance',
    href: 'https://halyard.dev',
    start_date: new Date('2015').getFullYear(),
    end_date: null,
    description:
      'Built and helped maintain websites for universities, architecture firms and not-for-profit organisations.',
    extended_description: null,
  },
  {
    title: 'Open Source Contributor',
    company: 'Web / OSS',
    href: 'https://github.com/DarkPurple141/eslint-codemod-utils',
    start_date: new Date('2018').getFullYear(),
    end_date: null,
    description:
      'Contributed regularly to OSS projects including @compiled, @emotion, storybook-addon-performance and eslint-codemod-utils. I see OSS contribution as an important part of being a developer.',
    extended_description: null,
  },
  {
    title: 'TA / Tutor',
    company: 'University of New South Wales',
    href: 'https://teaching.alhinds.com',
    start_date: new Date('2016').getFullYear(),
    end_date: new Date('2019').getFullYear(),
    description:
      "Tutored and acted as a lecturer's assistant in UNSW's foundational computer science subjects since 2016. In 2018, I helped architect a new JavaScript and UI course.",
    extended_description: null,
  },
  {
    title: 'Deputy Editor (Sport & Tech)',
    company: 'The Guardian',
    href: 'https://www.theguardian.com/',
    start_date: new Date('2015').getFullYear(),
    end_date: new Date('2016').getFullYear(),
    description:
      "Acted as digital producer for the Guardian's data visualisation projects. Wrote news and features, took charge of community engagement, ran liveblogs, and commissioned work from external contributors.",
    extended_description: null,
  },
  {
    title: 'Journalist / Digital Producer',
    company: 'SBS',
    href: 'https://sbs.com.au/',
    start_date: new Date('2011').getFullYear(),
    end_date: new Date('2015').getFullYear(),
    description:
      "Wrote op-eds, news, liveblogs and other features for SBS's online sport platforms. Covered the Tour de France on location as part of the broadcast team. Hosted and produced a revamped SBS Cycling podcast, which twice featured among iTunes top-10 sports podcasts.",
    extended_description: null,
  },
]
