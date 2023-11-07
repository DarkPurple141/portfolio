---
title: The tools I use for software development
published: 2023-11-05T02:30:53.235Z
description:
  What I'm using to build and design software in 2023. Tools, frameworks
  equipment and infrastructure.
tags:
  - software
  - personal
  - tools
---

A list of tools, frameworks and equipment that I use to build software - no
particular order. Many of these I've been using for some time.

## Infrastructure

- Version control - `git`
- Remote - [github](https://github.com/) never bet against microsoft
- Hosting - [vercel](https://vercel.com/) - simple and easy to use.
- Hosting - [fly.io](https://fly.io/) - when I need a server.
- Hosting advanced - [aws](https://aws.amazon.com/) - when I need specific
  functionality and complexity.
- Database (mostly wrapped by prisma)
  - none (if the repository data is enough)
  - [sqlite3](https://www.sqlite.org/index.html) (for most things)
  - [postgresql](https://www.postgresql.org/) (for more complex things usually
    via `fly.io`)

## Development environment

All the things I use to develop software.

- Preferred language - [typescript](https://www.typescriptlang.org/) - I've been
  using it for years and it's still the best option.
- Package manager - [pnpm](https://pnpm.io/) - To me the successor to
  [yarn](https://yarnpkg.com/) and with some elegantly designed smarts over
  [npm](https://www.npmjs.com/). Also independent.
- Editor - [vscode](https://code.visualstudio.com/) - never bet against
  microsoft
- Terminal - [iterm2](https://iterm2.com/) sometimes I still use `terminal`
  though.
- Code style - [prettier](https://prettier.io/) - Simple, opinionated and
  extensible.
- Linter - [eslint](https://eslint.org/) - extremely powerful and configurable.
- Shell - [zsh](https://ohmyz.sh/) with `oh-my-zsh`, played briefly with `fish`
  but found it had too many compatibilit issues.
- Browser - [chrome](https://www.google.com/intl/en_au/chrome/), will stil test
  on other browsers and experimented with [arc](https://arc.net/) but found it
  too slow / tried to do too many things.

### Frameworks

The key meta frameworks/tools that I use to build software.

- [Next.js](https://nextjs.org/) - my go to for build simple web apps for some
  time.
- [Prisma](https://www.prisma.io/) - a new addition as an ORM but excellent
  tooling means it's been easy to integrate.
- [Tailwind CSS](https://tailwindcss.com/) - great sensible defaults for design
  and excellent tooling. Easy to extend once you learn the basics.
- [Vite](https://vitejs.dev/) - just works.
- [React](https://reactjs.org/) - I'm liking it less in the last few years but
  it's still the standard. I would like to give Vue another go though.
- [TRPC](https://trpc.io/) - typesafety across network calls and works well with
  prisma.
- [MDX](https://mdxjs.com/) -
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Editor extensions

There are some here that I've omitted but these are the core set. I like to keep
the number of extensions to a minimum in general but I'm not afraid to add more
if need be.

- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) -
  a must for working with docker
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) -
  background process for running eslint while developing
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) -
  background process for running prettier while developing
- [Gitlens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) -
  key metadata and insights from commits inline
- [Github Actions](https://marketplace.visualstudio.com/items?itemName=cschleiden.vscode-github-actions) -
  syntax highlighting and snippets for github actions
- [Github Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) -
  AI pair programming
- [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)
- [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma) -
  a must for working with prisma.
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) -
  autocomplete for tailwind classes.
- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) -
  automatically rename paired HTML tags. Very useful for keeping refactoring
  simple.

## Design

- [Figma](https://www.figma.com/) - increasingly the defacto tool for designing
  for the web
- [Leonardo](https://leonardocolor.io/) - a neat dynamic palette generator
- [Style Dictionary](https://amzn.github.io/style-dictionary/) - a great tool
  for generating design tokens

## Project management

- [Notion](https://www.notion.so/) - it has all the things I need (databases +
  block based editing) and has a clean UI.

## Equipment

- Macbook Pro 14" 2023 - I previously was on a 2016 and hoo-boy the Apple
  silicon is phenomenal. Unix-based system with a great UI and integrates with
  all the other Apple ecosystem stuff I use.
- [Sony WH-1000XM5](https://store.sony.com.au/wh-1000xm5-headphones) - just the
  best headphones
- Apple Watch SE - simple, cheap, and does all the important things I need in a
  smart watch. Nice to have includes addressing push notifications directly,
  automatic logins and limiting distractions from my phone.
- [Artemide Tolomeo](https://www.artemide.com/en/subfamily/1849546/tolomeo-table)
  desk lamp - just a really nice lamp.
