---
title: 'Frontend Performance: Why Lighthouse has made us lazy'
published: 2021-01-06T02:30:53.235Z
description:
  The greatest trap of optimising web application performance is failing to
  understand the limitations of the tools we use to measure it, and the type of
  performance we’re trying to extract.
tags:
  - performance
  - web development
  - lighthouse
---

The greatest trap of optimising web application performance is failing to
understand the limitations of the tools we use to measure it, and the type of
performance we’re trying to extract. These are far less objective decisions than
most would like to believe and don’t naturally lead to the same outcome.

Consider the performance needs a content-driven website, like a site that
delivers news content, a wiki, or maybe a basic ecommerce offering will require.
Mostly, they’ll feel performant if they _load fast_. So how can we make a site
load fast? Well, we can;

- Send less bytes over the wire and cache where possible (scripts, stylesheets,
  assets etc), defer non-critical assets where possible and asynchronously load
  additional content
- Serve static or server rendered pages to show content faster (without scripts)
- Minimise above the fold reflows

If executed well, the above will make a site load fast.

But some of these things come at an implicit performance tradeoff, and this
tradeoff needs to be considered more carefully the more rich / or complex a web
application becomes. For a proper Single Page Application (SPA), or non-trivial
web application pushing load time too far starts to erode the SPA’s runtime
performance.

Sure, bloated scripts will affect both the initial load time and runtime
overhead of the application, but if an application requires additional deferred
or lazily-loaded scripts to arrive before its properly functional, it’s not
really loaded. The loaded experience also fails to properly encompass the
complex combination of interactions of an entire user session. A user might
_see_ content fast, but if the 99% of their time in the app thereafter feels
sluggish, we’ll still hear the same complaints about performance.

Let’s consider the original two points above in the context of a SPA like Jira.

> Send less bytes over the wire and cache where possible (scripts, stylesheets,
> assets etc), defer non-critical assets where possible and asynchronously load
> additional content

\> Sending less bytes also means sending more later. If all of a user’s paths
from a Kanban board (for example) are deferred scripts; to create an issue,
update an epic, edit a sprint; every time a user moves away they’ll be hit by
the friction of additional loading spinners, and lost time. This is
fundamentally performance degradation.

> _Serve static or server rendered pages to show content faster (without
> scripts)_

\> SSR or even statically rendered pages still require hydration to be useful in
the context of a SPA. Servers need to do more processing to produce pages, and
the usefulness of these pages is questionable if a user is still stuck waiting
for more parts of a core experience to load even after the page is delivered.

This is to say nothing of the additional complexity we add to our application
code by trying to allow for more asynchronous operations. And yet, we put
considerable time into optimising these same things for all applications.

Why do we do this? That’s been a burning question I’ve been pondering in my mind
for some time, but if I’m honest I believe it comes to down to how we measure,
and what we measure with. The biggest issue with frontend metric-ing is the
absence of good proxies for things we’re used to leaning on server-side. Things
like CPU and Memory usage, and more user-focused things like the amount of time
the main thread is blocked by scripting. We can guesstimate and discern some of
these things using synthetic testing or by piercing the browser internals in lab
environments to get some of these metrics directly, but if we want true,
‘real-user’ metrics, we’re limited.

So invariably we measure what we can, and this gets us into trouble.

[Consider, Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/).
The distilled simplicity makes it an attractive offering. TTI (Time to
Interactive), FID (First Input Delay), FMP/TTR (First Meaningful Paint/Time to
Render), CLS (Cumulative Layout Shift) — together these are great heuristics for
measuring a web application’s performance. And while I wouldn’t say that an
application could be performant and fail Lighthouse’s heuristics, it also gives
false significance to what some of these metrics mean. The biggest issue with
them is how much they all focus on the load performance experience. And as I’ve
already said, this is a false idol.

Science struggles with ill-defined objectives. Humans love to aim for
simplicity. But sometimes the reality is neither. Better performance measurement
pushes most of these notions aside, using them as guides rather than gospel.
Unfortunately it’s also more complex to instrument, more subjective, and harder
to abstract, and when time pressed we’re lazy.

This article was originally published on
[medium](https://al-hinds.medium.com/frontend-performance-why-lighthouse-has-made-us-lazy-b7a1247db7cb).
