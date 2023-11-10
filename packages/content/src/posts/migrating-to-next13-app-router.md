---
title: Migrating to Next.js 13's app router
published: 2023-11-10T02:30:53.235Z
description:
  I wanted to try and migrate to the Next.js's app router and server components
  and test how much it tested my mental model and assumptions.
tags:
  - explainers
  - nextjs
  - configuration
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/YQMSietiFm0?si=fLu9Tc-WdgbYjC5c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

I'm pretty familiar with [Next.js](https://nextjs.org/). I've been using it
since Next 9/10 and the simplicity of its mental model was always a big draw for
me. The structure and the ability to opt-in to more dynamic features like server
rendering and API routes as simple optional additives was intuitive as much as
it was powerful.

Since version 13 though there's been a paradigm shift and it's changed the model
and its constraints. The `app` directory and certain new file conventions have
been introduced to allow for a new
[app router](https://nextjs.org/docs/routing/introduction) and
[server components](https://nextjs.org/docs/api-reference/next/server-components).
From afar and having watched videos like Lee Robinson's above it looked 'simple
enough', so I wanted to try it out for myself.

## The old way

Take this website for example. It's a simple blog with a few pages and a few
posts. The structure is as follows:

- `pages/_app.tsx` - the app shell
- `pages/index.tsx` - the home page
- `pages/about.tsx` - the about page
- `pages/posts/index.tsx` - the blog index page
- `pages/posts/[slug].tsx` - a blog post page

For the latter two, there are dynamic content requirements sourced from my blog
that need to be fetched and injected into the build. On the post index page, I
need to fetch a list of all the posts, on the post page I need to fetch the post
itself.

In Next &lt;= 12 using the `getStaticProps` and `getStaticPaths` functions is
enough to get this done. Overall the code is pretty simple and the mental model
is easy to grasp.

## The new way

The biggest shift in Next 13 is the introduction of
[React Server Components](https://www.joshwcomeau.com/react/server-components/)
(great explainer from Josh Comeau) - everything else that's shifted - the
removal and addition of new APIs, the directory re-structuring is a flow-on from
this main point.

Server components are _neat_ but require a little bit of rewiring of your
existing understanding of how [React works](https://react.dev/) to properly get
your head around. I'm on the fence if I'm a complete convert (there is certain
magic in requiring a compile step that didn't used to exist, AND now different
code runs on server and client) but on the whole I'd say there a net positive
for the user experience.

Overall this means the previous pages structure becomes something like this
after migration:

- `app/layout.tsx` - the app shell
- `app/page.tsx` - the home page
- `app/about/page.tsx` - the about page
- `app/posts/page.tsx` - the blog index page
- `app/posts/[slug]/page.tsx` - a blog post page

## The migration experience

Look, a big thanks to [Lee Robinson](leerob.io)'s video above because it made a
world of difference, but the one thing I would say is the migration experience
is not as smooth as I would have liked, and is only simple if you carefully
manage the refactor.

Here is the official guide to
[migration](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration).
It's comprehensive but it's a lot to take in. There are many parts that require
you to dive deeper into the [app router docs](https://nextjs.org/docs/app) to
understand the implications of the changes.

I was personally disappointed that there weren't codemods available to manage
the simple changes - but once I started to migrate I found this was probably a
good thing because the whole framework has changed.

I had to RTFM and then RTFM again to grok things.

## Overall observations

- A bit more verbose in the file structure but a bit less in having to manage
  the `getStaticProps` and `getStaticPaths` functions - that said there are a
  number of additional convention introduced that you need to be aware of
  including form actions, caching and revalidation.
- The rules of server components make sense once you know them but don't expect
  this to be instant.
- I wish a bit more of the migration could've been automated.
- The direction of Next is becoming more complex and richer but has traded IMHO
  a bit of its intuitive simplicity.
- The abstractions over the app head metadata seem like a bit of unfortunate
  indirection.
