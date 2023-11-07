---
title: I built a Tailwind preset
published: 2023-11-04T02:30:53.235Z
description:
  I wanted to play around with setting up and managing a shared configuration
  for tailwind. It's pretty simple.
tags:
  - explainers
  - tailwind
  - configuration
---

One thing I wanted to do with this website was create shareable atomic
mini-packages of confguration that I could leverage while experimenting. The
idea - to write a piece of configuration once and use it across projects in Vue,
React, Astro you name it.

I've done this already with my
[typescript configuration](https://github.com/DarkPurple141/portfolio/blob/master/packages/tsconfig/base.json),
my
[CSS reset](https://github.com/DarkPurple141/portfolio/blob/master/packages/reset/reset.css)
and my local
[UI library](https://github.com/DarkPurple141/portfolio/tree/master/packages/ui).

But I haven't yet truly abstracted my theme configuration - currently it remains
a single style sheet with a range of CSS Vars. I was certain I could craft a
shareable Tailwind configuration but I'd never really tried. At work we use
[@emotion](https://emotion.sh/docs/introduction) and
[@compiled](https://compiledcssinjs.com/) for styling (as well as some scatted
scss).

## Tailwind plugins and presets

Tailwind has a number of ways to extend its configuration. The most common is by
simply creating a [preset](https://tailwindcss.com/docs/presets) which is very
basic and just a javascript object. You can also create
[plugins](https://tailwindcss.com/docs/plugins) which are more complex and can
be used to extend the core functionality of Tailwind.

I sense a plugin is in my future but for now a preset is perfectly fine.

```js
// @portfolio/tailwind-preset/index.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      // this will provide these values as usable keywords for colors
      backgroundColor: {
        surface: 'var(--bg-color)',
        'neutral.hover': 'var(--bg-color-hover)',
        accent: 'var(--accent-bg-color)',
      },
      colors: {
        default: 'var(--text-color)',
        subtle: 'var(--text-color-subtle)',
        subtlest: 'var(--text-color-subtlest)',
        accent: 'var(--accent-bg-color)',
        'accent.bold': 'var(--accent-bg-color-bold)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
```

This is the first pass. It works and it's pretty simple. I'm currently using it
in my Next app and my UI library as such:

```js
// @portfolio/next/tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@portfolio/tailwind-preset')],
}
```

And it works great. I'm keen to extend it soon to typpgraphy as that's what more
of my current theme file does very little color and I'd prefer not to use the
typography plugin if it can be avoided!
