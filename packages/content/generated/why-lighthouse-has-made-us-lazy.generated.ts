/** THIS IS A GENERATED FILE
 * @command pnpm build
 */
const metaData = {
  code: 'var Component=(()=>{var h=Object.create;var o=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var f=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty;var g=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports),b=(i,e)=>{for(var n in e)o(i,n,{get:e[n],enumerable:!0})},r=(i,e,n,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of p(e))!u.call(i,s)&&s!==n&&o(i,s,{get:()=>e[s],enumerable:!(a=m(e,s))||a.enumerable});return i};var w=(i,e,n)=>(n=i!=null?h(f(i)):{},r(e||!i||!i.__esModule?o(n,"default",{value:i,enumerable:!0}):n,i)),y=i=>r(o({},"__esModule",{value:!0}),i);var c=g((I,l)=>{l.exports=_jsx_runtime});var T={};b(T,{default:()=>S,frontmatter:()=>v});var t=w(c()),v={title:"Frontend Performance: Why Lighthouse has made us lazy",published:new Date(1609900253235),stub:"The greatest trap of optimising web application performance is failing to understand the limitations of the tools we use to measure it, and the type of performance we\\u2019re trying to extract.",tags:["performance","web development","lighthouse"]};function d(i){let e=Object.assign({p:"p",em:"em",ul:"ul",li:"li",blockquote:"blockquote"},i.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"The greatest trap of optimising web application performance is failing to understand the limitations of the tools we use to measure it, and the type of performance we\\u2019re trying to extract. These are far less objective decisions than most would like to believe and don\\u2019t naturally lead to the same outcome."}),`\n`,(0,t.jsxs)(e.p,{children:["Consider the performance needs a content-driven website, like a site that delivers news content, a wiki, or maybe a basic ecommerce offering will require. Mostly, they\\u2019ll feel performant if they ",(0,t.jsx)(e.em,{children:"load fast"}),". So how can we make a site load fast? Well, we can;"]}),`\n`,(0,t.jsxs)(e.ul,{children:[`\n`,(0,t.jsx)(e.li,{children:"Send less bytes over the wire and cache where possible (scripts, stylesheets, assets etc), defer non-critical assets where possible and asynchronously load additional content"}),`\n`,(0,t.jsx)(e.li,{children:"Serve static or server rendered pages to show content faster (without scripts)"}),`\n`,(0,t.jsx)(e.li,{children:"Minimise above the fold reflows"}),`\n`]}),`\n`,(0,t.jsx)(e.p,{children:"If executed well, the above will make a site load fast."}),`\n`,(0,t.jsx)(e.p,{children:"But some of these things come at an implicit performance tradeoff, and this tradeoff needs to be considered more carefully the more rich / or complex a web application becomes. For a proper Single Page Application (SPA), or non-trivial web application pushing load time too far starts to erode the SPA\\u2019s runtime performance."}),`\n`,(0,t.jsxs)(e.p,{children:["Sure, bloated scripts will affect both the initial load time and runtime overhead of the application, but if an application requires additional deferred or lazily-loaded scripts to arrive before its properly functional, it\\u2019s not really loaded. The loaded experience also fails to properly encompass the complex combination of interactions of an entire user session. A user might ",(0,t.jsx)(e.em,{children:"see"})," content fast, but if the 99% of their time in the app thereafter feels sluggish, we\\u2019ll still hear the same complaints about performance."]}),`\n`,(0,t.jsx)(e.p,{children:"Let\\u2019s consider the original two points above in the context of a SPA like Jira."}),`\n`,(0,t.jsxs)(e.blockquote,{children:[`\n`,(0,t.jsx)(e.p,{children:"Send less bytes over the wire and cache where possible (scripts, stylesheets, assets etc), defer non-critical assets where possible and asynchronously load additional content"}),`\n`]}),`\n`,(0,t.jsx)(e.p,{children:"> Sending less bytes also means sending more later. If all of a user\\u2019s paths from a Kanban board (for example) are deferred scripts; to create an issue, update an epic, edit a sprint; every time a user moves away they\\u2019ll be hit by the friction of additional loading spinners, and lost time. This is fundamentally performance degradation."}),`\n`,(0,t.jsxs)(e.blockquote,{children:[`\n`,(0,t.jsx)(e.p,{children:(0,t.jsx)(e.em,{children:"Serve static or server rendered pages to show content faster (without scripts)"})}),`\n`]}),`\n`,(0,t.jsx)(e.p,{children:"> SSR or even statically rendered pages still require hydration to be useful in the context of a SPA. Servers need to do more processing to produce pages, and the usefulness of these pages is questionable if a user is still stuck waiting for more parts of a core experience to load even after the page is delivered."}),`\n`,(0,t.jsx)(e.p,{children:"This is to say nothing of the additional complexity we add to our application code by trying to allow for more asynchronous operations. And yet, we put considerable time into optimising these same things for all applications."}),`\n`,(0,t.jsx)(e.p,{children:"Why do we do this? That\\u2019s been a burning question I\\u2019ve been pondering in my mind for some time, but if I\\u2019m honest I believe it comes to down to how we measure, and what we measure with. The biggest issue with frontend metric-ing is the absence of good proxies for things we\\u2019re used to leaning on server-side. Things like CPU and Memory usage, and more user-focused things like the amount of time the main thread is blocked by scripting. We can guesstimate and discern some of these things using synthetic testing or by piercing the browser internals in lab environments to get some of these metrics directly, but if we want true, \\u2018real-user\\u2019 metrics, we\\u2019re limited."}),`\n`,(0,t.jsx)(e.p,{children:"So invariably we measure what we can, and this gets us into trouble."}),`\n`,(0,t.jsx)(e.p,{children:"Consider, Lighthouse. The distilled simplicity makes it an attractive offering. TTI (Time to Interactive), FID (First Input Delay), FMP/TTR (First Meaningful Paint/Time to Render), CLS (Cumulative Layout Shift) \\u2014 together these are great heuristics for measuring a web application\\u2019s performance. And while I wouldn\\u2019t say that an application could be performant and fail Lighthouse\\u2019s heuristics, it also gives false significance to what some of these metrics mean. The biggest issue with them is how much they all focus on the load performance experience. And as I\\u2019ve already said, this is a false idol."}),`\n`,(0,t.jsx)(e.p,{children:"Science struggles with ill-defined objectives. Humans love to aim for simplicity. But sometimes the reality is neither. Better performance measurement pushes most of these notions aside, using them as guides rather than gospel. Unfortunately it\\u2019s also more complex to instrument, more subjective, and harder to abstract, and when time pressed we\\u2019re lazy."})]})}function x(i={}){let{wrapper:e}=i.components||{};return e?(0,t.jsx)(e,Object.assign({},i,{children:(0,t.jsx)(d,i)})):d(i)}var S=x;return y(T);})();\n;return Component;',
  frontmatter: {
    title: 'Frontend Performance: Why Lighthouse has made us lazy',
    published: '2021-01-06T02:30:53.235Z',
    stub: 'The greatest trap of optimising web application performance is failing to understand the limitations of the tools we use to measure it, and the type of performance we’re trying to extract.',
    tags: ['performance', 'web development', 'lighthouse'],
    modified: { raw: '2023-10-30T10:12:36.475Z', formatted: '30/10/2023' },
    created: { raw: '2021-01-06T02:30:53.235Z', formatted: '06/01/2021' },
    slug: 'why-lighthouse-has-made-us-lazy-2021-0-6',
  },
  errors: [],
  matter: {
    content:
      '\nThe greatest trap of optimising web application performance is failing to understand the limitations of the tools we use to measure it, and the type of performance we’re trying to extract. These are far less objective decisions than most would like to believe and don’t naturally lead to the same outcome.\n\nConsider the performance needs a content-driven website, like a site that delivers news content, a wiki, or maybe a basic ecommerce offering will require. Mostly, they’ll feel performant if they *load fast*. So how can we make a site load fast? Well, we can;\n\n* Send less bytes over the wire and cache where possible (scripts, stylesheets, assets etc), defer non-critical assets where possible and asynchronously load additional content\n* Serve static or server rendered pages to show content faster (without scripts)\n* Minimise above the fold reflows\n\nIf executed well, the above will make a site load fast.\n\nBut some of these things come at an implicit performance tradeoff, and this tradeoff needs to be considered more carefully the more rich / or complex a web application becomes. For a proper Single Page Application (SPA), or non-trivial web application pushing load time too far starts to erode the SPA’s runtime performance.\n\nSure, bloated scripts will affect both the initial load time and runtime overhead of the application, but if an application requires additional deferred or lazily-loaded scripts to arrive before its properly functional, it’s not really loaded. The loaded experience also fails to properly encompass the complex combination of interactions of an entire user session. A user might *see* content fast, but if the 99% of their time in the app thereafter feels sluggish, we’ll still hear the same complaints about performance.\n\nLet’s consider the original two points above in the context of a SPA like Jira.\n\n> Send less bytes over the wire and cache where possible (scripts, stylesheets, assets etc), defer non-critical assets where possible and asynchronously load additional content\n\n\\> Sending less bytes also means sending more later. If all of a user’s paths from a Kanban board (for example) are deferred scripts; to create an issue, update an epic, edit a sprint; every time a user moves away they’ll be hit by the friction of additional loading spinners, and lost time. This is fundamentally performance degradation.\n\n> *Serve static or server rendered pages to show content faster (without scripts)*\n\n\\> SSR or even statically rendered pages still require hydration to be useful in the context of a SPA. Servers need to do more processing to produce pages, and the usefulness of these pages is questionable if a user is still stuck waiting for more parts of a core experience to load even after the page is delivered.\n\nThis is to say nothing of the additional complexity we add to our application code by trying to allow for more asynchronous operations. And yet, we put considerable time into optimising these same things for all applications.\n\nWhy do we do this? That’s been a burning question I’ve been pondering in my mind for some time, but if I’m honest I believe it comes to down to how we measure, and what we measure with. The biggest issue with frontend metric-ing is the absence of good proxies for things we’re used to leaning on server-side. Things like CPU and Memory usage, and more user-focused things like the amount of time the main thread is blocked by scripting. We can guesstimate and discern some of these things using synthetic testing or by piercing the browser internals in lab environments to get some of these metrics directly, but if we want true, ‘real-user’ metrics, we’re limited.\n\nSo invariably we measure what we can, and this gets us into trouble.\n\nConsider, Lighthouse. The distilled simplicity makes it an attractive offering. TTI (Time to Interactive), FID (First Input Delay), FMP/TTR (First Meaningful Paint/Time to Render), CLS (Cumulative Layout Shift) — together these are great heuristics for measuring a web application’s performance. And while I wouldn’t say that an application could be performant and fail Lighthouse’s heuristics, it also gives false significance to what some of these metrics mean. The biggest issue with them is how much they all focus on the load performance experience. And as I’ve already said, this is a false idol.\n\nScience struggles with ill-defined objectives. Humans love to aim for simplicity. But sometimes the reality is neither. Better performance measurement pushes most of these notions aside, using them as guides rather than gospel. Unfortunately it’s also more complex to instrument, more subjective, and harder to abstract, and when time pressed we’re lazy.\n',
    data: {
      title: 'Frontend Performance: Why Lighthouse has made us lazy',
      published: '2021-01-06T02:30:53.235Z',
      stub: 'The greatest trap of optimising web application performance is failing to understand the limitations of the tools we use to measure it, and the type of performance we’re trying to extract.',
      tags: ['performance', 'web development', 'lighthouse'],
      modified: { raw: '2023-10-30T10:12:36.475Z', formatted: '30/10/2023' },
      created: { raw: '2021-01-06T02:30:53.235Z', formatted: '06/01/2021' },
      slug: 'why-lighthouse-has-made-us-lazy-2021-0-6',
    },
    isEmpty: false,
    excerpt: '',
  },
}
export default metaData
