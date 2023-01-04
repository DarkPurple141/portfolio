import type { Job } from '@prisma/client'

export const jobData: Omit<Job, 'id'>[] = [
  {
    title: 'Software Engineer',
    company: 'Atlassian',
    href: 'https://atlassian.design',
    start_date: new Date('2019').getFullYear(),
    end_date: null,
    description:
      "Developed an innvoative solution to Atlassian's real user monitoring. Polished exisiting design systems. Mostly working with React/Node.js, golang.",
  },
  {
    title: 'Web Developer',
    company: 'Kayo Sports',
    href: 'https://www.kayosports.com.au/',
    start_date: new Date('2018').getFullYear(),
    end_date: new Date('2019').getFullYear(),
    description:
      'Helped develop and launch a new sports video streaming platform since mid-2018. Mostly working with React/Node.js.',
  },
  {
    title: 'Developer',
    company: 'Buy Somewhere',
    start_date: new Date('2017').getFullYear(),
    end_date: new Date('2017').getFullYear(),
    href: 'https://www.buysomewhere.com/',
    description:
      'An independent game label, launching an augmented reality Monopoly-esque game for mobile. I was a part of a small backend team driving the games geolocating mechanics.',
  },
  {
    title: 'Web Developer',
    company: 'Freelance',
    href: 'https://halyard.dev',
    start_date: new Date('2015').getFullYear(),
    end_date: null,
    description:
      'I built and helped maintain websites for Universities, architecture firms and NFPs.',
  },
  {
    title: 'Open Source Contributor',
    company: 'Web',
    href: 'https://github.com/DarkPurple141/eslint-codemod-utils',
    start_date: new Date('2018').getFullYear(),
    end_date: null,
    description:
      'I have been a regular contributor to OSS projects including @compiled, @emotion, storybook-addon-performance and eslint-codemod-utils. I see contribution as an important part of being a developer.',
  },
  {
    title: 'TA / Tutor',
    company: 'University of New South Wales',
    href: 'https://teaching.alhinds.com',
    start_date: new Date('2016').getFullYear(),
    end_date: new Date('2019').getFullYear(),
    description:
      "Tutored and been a lecturer's assistant in UNSW's foundational computer science subjects since 2016. In 2018, I helped architect a new JavaScript course.",
  },
  {
    title: 'Deputy Editor (Sport & Tech)',
    company: 'The Guardian',
    href: 'https://www.theguardian.com/',
    start_date: new Date('2015').getFullYear(),
    end_date: new Date('2016').getFullYear(),
    description:
      'Wrote news and features, took charge of community engagement through social media, ran liveblogs, and liaised with potential writers to engage them if and when required on relevant issues.',
  },
  {
    title: 'Journalist / Digital Producer',
    company: 'SBS',
    href: 'https://sbs.com.au/',
    start_date: new Date('2011').getFullYear(),
    end_date: new Date('2015').getFullYear(),
    description:
      'Wrote op-eds, news, liveblogs and other features for their online sport platforms. Covered the Tour de France on location as part of the broadcast team. Hosted and produced a revamped SBS Cycling podcast, which twice featured among iTunes top-10 sports podcasts.',
  },
]
