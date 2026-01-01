import type { Job } from '../../prisma/generated/client'

export const jobData: Omit<Job, 'id'>[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Atlassian Design System',
    href: 'https://atlassian.design',
    start_date: new Date('2020').getFullYear(),
    end_date: null,
    description:
      'Took a leading role in evolving the Atlassian Design System, working closely with designers to build a new generation of components and tools. Led the architecture and rollout of new spacing and typography foundations for the company.',
  },
  {
    title: 'Software Engineer',
    company: 'Atlassian',
    href: 'https://atlassian.com',
    start_date: new Date('2019').getFullYear(),
    end_date: new Date('2020').getFullYear(),
    description:
      "Developed an innovative solution to Atlassian's real user monitoring and rolled out a scalable system across cloud and server products. Mostly working with Node.js, docker, AWS and golang.",
  },
  {
    title: 'Web Developer',
    company: 'Kayo Sports',
    href: 'https://www.kayosports.com.au/',
    start_date: new Date('2018').getFullYear(),
    end_date: new Date('2019').getFullYear(),
    description:
      'Helped develop and launch a new sports video streaming platform for the web. Mostly working with React/Node.js.',
  },
  {
    title: 'Developer',
    company: 'Buy Somewhere',
    start_date: new Date('2017').getFullYear(),
    end_date: new Date('2017').getFullYear(),
    href: 'https://www.buysomewhere.com/',
    description:
      'Worked as a core developer on an independent game label, launching an augmented reality Monopoly-esque game for mobile. I was a part of a small team driving the games geo-location mechanics.',
  },
  {
    title: 'Web Developer',
    company: 'Freelance',
    href: 'https://halyard.dev',
    start_date: new Date('2015').getFullYear(),
    end_date: null,
    description:
      'Built and helped maintain websites for universities, architecture firms and not-for-profit organisations.',
  },
  {
    title: 'Open Source Contributor',
    company: 'Web / OSS',
    href: 'https://github.com/DarkPurple141/eslint-codemod-utils',
    start_date: new Date('2018').getFullYear(),
    end_date: null,
    description:
      'Contributed regularly to OSS projects including @compiled, @emotion, storybook-addon-performance and eslint-codemod-utils. I see OSS contribution as an important part of being a developer.',
  },
  {
    title: 'TA / Tutor',
    company: 'University of New South Wales',
    href: 'https://teaching.alhinds.com',
    start_date: new Date('2016').getFullYear(),
    end_date: new Date('2019').getFullYear(),
    description:
      "Tutored and acted as a lecturer's assistant in UNSW's foundational computer science subjects since 2016. In 2018, I helped architect a new JavaScript and UI course.",
  },
  {
    title: 'Deputy Editor (Sport & Tech)',
    company: 'The Guardian',
    href: 'https://www.theguardian.com/',
    start_date: new Date('2015').getFullYear(),
    end_date: new Date('2016').getFullYear(),
    description:
      "Acted as digital producer for the Guardian's data visualisation projects. Wrote news and features, took charge of community engagement, ran liveblogs, and commissioned work from external contributors.",
  },
  {
    title: 'Journalist / Digital Producer',
    company: 'SBS',
    href: 'https://sbs.com.au/',
    start_date: new Date('2011').getFullYear(),
    end_date: new Date('2015').getFullYear(),
    description:
      "Wrote op-eds, news, liveblogs and other features for SBS's online sport platforms. Covered the Tour de France on location as part of the broadcast team. Hosted and produced a revamped SBS Cycling podcast, which twice featured among iTunes top-10 sports podcasts.",
  },
]
