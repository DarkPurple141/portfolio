/** THIS IS A GENERATED FILE
 * @command pnpm build
 */
const metaData = {
  code: 'var Component=(()=>{var d=Object.create;var i=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var m=Object.getPrototypeOf,f=Object.prototype.hasOwnProperty;var g=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),w=(n,e)=>{for(var o in e)i(n,o,{get:e[o],enumerable:!0})},s=(n,e,o,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of p(e))!f.call(n,a)&&a!==o&&i(n,a,{get:()=>e[a],enumerable:!(r=u(e,a))||r.enumerable});return n};var b=(n,e,o)=>(o=n!=null?d(m(n)):{},s(e||!n||!n.__esModule?i(o,"default",{value:n,enumerable:!0}):o,n)),y=n=>s(i({},"__esModule",{value:!0}),n);var c=g((_,l)=>{l.exports=_jsx_runtime});var I={};w(I,{default:()=>x,frontmatter:()=>v});var t=b(c()),v={title:"Abstraction",published:new Date(1422585053235),description:"What is abstraction and how does it apply to programming? One of my original blogs about programming!",tags:["explainers","c","abstraction"]};function h(n){let e=Object.assign({p:"p",blockquote:"blockquote",h2:"h2",a:"a",code:"code"},n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:`Abstraction is the concept of properly targeting our thinking around the level\nthat makes most the contextual sense. It allows us to drill down and become more\nspecific when we need to, or break out into broader more general concepts.`}),`\n`,(0,t.jsx)(e.p,{children:`You use it everyday, in such an intuitive way that you may not even be aware of\nit. Let\'s say you\'re at the train station and you need to buy a train ticket.`}),`\n`,(0,t.jsx)(e.p,{children:"You would simply ask:"}),`\n`,(0,t.jsxs)(e.blockquote,{children:[`\n`,(0,t.jsx)(e.p,{children:"Can I have a ticket for the AB train please?."}),`\n`]}),`\n`,(0,t.jsx)(e.p,{children:"But you could equally say:"}),`\n`,(0,t.jsxs)(e.blockquote,{children:[`\n`,(0,t.jsx)(e.p,{children:`I need a piece of paper that holds ticketing information that I will be able\nto present to a ticket inspector which proves that I I am allowed to travel on\nthe train from A to B and only on this train and on no other.`}),`\n`]}),`\n`,(0,t.jsx)(e.p,{children:`It\'s impractical and somewhat confusing to say the latter, but it\'s the latter\nthat is implied and understood by the former.`}),`\n`,(0,t.jsx)(e.p,{children:`Sometimes of course it pays to be more specific. If we\'re talking about the\nmicrobiology of the gut of a cow, it doesn\'t really matter that the cow\'s name\nis Sally, does it?`}),`\n`,(0,t.jsx)(e.h2,{id:"abstraction-in-programming",children:"Abstraction in programming"}),`\n`,(0,t.jsxs)(e.p,{children:[`In programming, abstraction allows us to break our software into different\nlevels of logic appropriate for the context of the software. For example, using\n`,(0,t.jsx)(e.a,{href:"17_functions.html",children:"functions"}),", we might be building a mail application."]}),`\n`,(0,t.jsxs)(e.p,{children:["At the top level we could have functions like ",(0,t.jsx)(e.code,{children:"sendMail"}),", ",(0,t.jsx)(e.code,{children:"retrieveMail"}),`. This\nis perhaps the level our user might interact with our software. It\'s\nuncomplicated and clear.`]}),`\n`,(0,t.jsxs)(e.p,{children:["At a lower level we might have some helper functions. For our ",(0,t.jsx)(e.code,{children:"sendMail"}),`\nfunction for example, we might have `,(0,t.jsx)(e.code,{children:"setUpConnection"}),", ",(0,t.jsx)(e.code,{children:"encodeMessage"}),`,\n`,(0,t.jsx)(e.code,{children:"addHeaders"}),", ",(0,t.jsx)(e.code,{children:"sendData"}),` etc. These all have could have further abstractions\nstill. And so on so forth.`]}),`\n`,(0,t.jsx)(e.h2,{id:"so-what",children:"So what?"}),`\n`,(0,t.jsx)(e.p,{children:`By breaking out our logic into these abstracted levels we make our code easier\nto develop and manage. It also makes it easier for us to avoid costly refactors\nor rewrites if we\'ve made sensible abstractions that allow us to change or\nevolve the internals of a system without affecting the external interface.`}),`\n`,(0,t.jsx)(e.p,{children:`Again, considering the mail application, if we wanted to change the type of\nserver our application ran on we could do so without changing anything\nuser-facing.`}),`\n`,(0,t.jsx)(e.p,{children:`Abstraction is a powerful tool for designing software. It\'s also a powerful tool\nin our everyday lives.`})]})}function k(n={}){let{wrapper:e}=n.components||{};return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(h,n)})):h(n)}var x=k;return y(I);})();\n;return Component;',
  frontmatter: {
    title: 'Abstraction',
    published: '2015-01-30T02:30:53.235Z',
    description:
      'What is abstraction and how does it apply to programming? One of my original blogs about programming!',
    tags: ['explainers', 'c', 'abstraction'],
    modified: {
      raw: '2026-02-09T09:35:58.626Z',
      formatted: 'February 9, 2026',
    },
    created: { raw: '2015-01-30T02:30:53.235Z', formatted: 'January 30, 2015' },
    slug: 'abstraction-2015-0-30',
  },
  errors: [],
  matter: {
    content:
      "\nAbstraction is the concept of properly targeting our thinking around the level\nthat makes most the contextual sense. It allows us to drill down and become more\nspecific when we need to, or break out into broader more general concepts.\n\nYou use it everyday, in such an intuitive way that you may not even be aware of\nit. Let's say you're at the train station and you need to buy a train ticket.\n\nYou would simply ask:\n\n> Can I have a ticket for the AB train please?.\n\nBut you could equally say:\n\n> I need a piece of paper that holds ticketing information that I will be able\n> to present to a ticket inspector which proves that I I am allowed to travel on\n> the train from A to B and only on this train and on no other.\n\nIt's impractical and somewhat confusing to say the latter, but it's the latter\nthat is implied and understood by the former.\n\nSometimes of course it pays to be more specific. If we're talking about the\nmicrobiology of the gut of a cow, it doesn't really matter that the cow's name\nis Sally, does it?\n\n## Abstraction in programming\n\nIn programming, abstraction allows us to break our software into different\nlevels of logic appropriate for the context of the software. For example, using\n[functions](17_functions.html), we might be building a mail application.\n\nAt the top level we could have functions like `sendMail`, `retrieveMail`. This\nis perhaps the level our user might interact with our software. It's\nuncomplicated and clear.\n\nAt a lower level we might have some helper functions. For our `sendMail`\nfunction for example, we might have `setUpConnection`, `encodeMessage`,\n`addHeaders`, `sendData` etc. These all have could have further abstractions\nstill. And so on so forth.\n\n## So what?\n\nBy breaking out our logic into these abstracted levels we make our code easier\nto develop and manage. It also makes it easier for us to avoid costly refactors\nor rewrites if we've made sensible abstractions that allow us to change or\nevolve the internals of a system without affecting the external interface.\n\nAgain, considering the mail application, if we wanted to change the type of\nserver our application ran on we could do so without changing anything\nuser-facing.\n\nAbstraction is a powerful tool for designing software. It's also a powerful tool\nin our everyday lives.\n",
    data: {
      title: 'Abstraction',
      published: '2015-01-30T02:30:53.235Z',
      description:
        'What is abstraction and how does it apply to programming? One of my original blogs about programming!',
      tags: ['explainers', 'c', 'abstraction'],
      modified: {
        raw: '2026-02-09T09:35:58.626Z',
        formatted: 'February 9, 2026',
      },
      created: {
        raw: '2015-01-30T02:30:53.235Z',
        formatted: 'January 30, 2015',
      },
      slug: 'abstraction-2015-0-30',
    },
    isEmpty: false,
    excerpt: '',
  },
}
export default metaData
