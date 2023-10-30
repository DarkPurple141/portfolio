/** THIS IS A GENERATED FILE
  @command pnpm build
  */
const metaData = {
  code: 'var Component=(()=>{var d=Object.create;var i=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var m=Object.getPrototypeOf,f=Object.prototype.hasOwnProperty;var g=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),b=(t,e)=>{for(var o in e)i(t,o,{get:e[o],enumerable:!0})},s=(t,e,o,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of p(e))!f.call(t,a)&&a!==o&&i(t,a,{get:()=>e[a],enumerable:!(r=u(e,a))||r.enumerable});return t};var w=(t,e,o)=>(o=t!=null?d(m(t)):{},s(e||!t||!t.__esModule?i(o,"default",{value:t,enumerable:!0}):o,t)),y=t=>s(i({},"__esModule",{value:!0}),t);var c=g((j,l)=>{l.exports=_jsx_runtime});var A={};b(A,{default:()=>x,frontmatter:()=>v});var n=w(c()),v={title:"Abstraction",stub:"What is abstraction and how does it apply to programming?",tags:"explainers,c"};function h(t){let e=Object.assign({p:"p",blockquote:"blockquote",h2:"h2",a:"a"},t.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:`Abstraction is the concept of properly targeting our thinking around the level that\nmakes most the contextual sense. It allows us to drill down and become more specific when we need to, or break out into broader more general concepts.`}),`\n`,(0,n.jsx)(e.p,{children:"You use it everyday, in such an intuitive way that you may not even be aware of it. Let\'s say you\'re at the train station and you need to buy a train ticket."}),`\n`,(0,n.jsx)(e.p,{children:"You would simply ask:"}),`\n`,(0,n.jsxs)(e.blockquote,{children:[`\n`,(0,n.jsx)(e.p,{children:"Can I have a ticket for the AB train please?."}),`\n`]}),`\n`,(0,n.jsx)(e.p,{children:"But you could equally say:"}),`\n`,(0,n.jsxs)(e.blockquote,{children:[`\n`,(0,n.jsx)(e.p,{children:"I need a piece of paper that holds ticketing information that will allow me to travel on the train from A to B"}),`\n`]}),`\n`,(0,n.jsx)(e.p,{children:"It\'s impractical and somewhat confusing to say the latter, but its the latter that is implied and understood by the former."}),`\n`,(0,n.jsx)(e.p,{children:"Sometimes of course it pays to be more specific. If we\'re talking about the microbiology of the gut of a cow, it doesn\'t really matter that the cow\'s name is Sally, does it?"}),`\n`,(0,n.jsx)(e.h2,{id:"abstraction-in-programming",children:"Abstraction in programming"}),`\n`,(0,n.jsxs)(e.p,{children:[`In programming, abstraction allows us to break our software into different levels of logic\nappropriate for the context of the software. For example, using `,(0,n.jsx)(e.a,{href:"17_functions.html",children:"functions"}),`,\nwe might be building a mail application.`]}),`\n`,(0,n.jsx)(e.p,{children:"At the top level we could have functions like sendMail, retrieveMail. This is perhaps the level our user might interact with our software. It\'s uncomplicated and clear."}),`\n`,(0,n.jsx)(e.p,{children:"At a lower level we might have some helper functions. For our sendMail function for example, we might have setUpConnection, encodeMessage, addHeaders, sendData etc. These all have could have further abstractions still. And so on so forth."}),`\n`,(0,n.jsx)(e.p,{children:"By breaking out our logic into these abstracted levels we make our code easier to develop and manage."})]})}function k(t={}){let{wrapper:e}=t.components||{};return e?(0,n.jsx)(e,Object.assign({},t,{children:(0,n.jsx)(h,t)})):h(t)}var x=k;return y(A);})();\n;return Component;',
  frontmatter: {
    title: 'Abstraction',
    stub: 'What is abstraction and how does it apply to programming?',
    tags: 'explainers,c',
    modified: { raw: '2023-10-28T02:30:53.235Z', formatted: '28/10/2023' },
    created: { raw: '2023-10-28T02:30:53.235Z', formatted: '28/10/2023' },
    slug: 'abstraction-2023-9-28',
  },
  errors: [],
  matter: {
    content:
      "\nAbstraction is the concept of properly targeting our thinking around the level that\nmakes most the contextual sense. It allows us to drill down and become more specific when we need to, or break out into broader more general concepts.\n\nYou use it everyday, in such an intuitive way that you may not even be aware of it. Let's say you're at the train station and you need to buy a train ticket.\n\nYou would simply ask:\n\n> Can I have a ticket for the AB train please?.\n\nBut you could equally say:\n\n> I need a piece of paper that holds ticketing information that will allow me to travel on the train from A to B\n\nIt's impractical and somewhat confusing to say the latter, but its the latter that is implied and understood by the former.\n\nSometimes of course it pays to be more specific. If we're talking about the microbiology of the gut of a cow, it doesn't really matter that the cow's name is Sally, does it?\n\n## Abstraction in programming\n\nIn programming, abstraction allows us to break our software into different levels of logic\nappropriate for the context of the software. For example, using [functions](17_functions.html),\nwe might be building a mail application.\n\nAt the top level we could have functions like sendMail, retrieveMail. This is perhaps the level our user might interact with our software. It's uncomplicated and clear.\n\nAt a lower level we might have some helper functions. For our sendMail function for example, we might have setUpConnection, encodeMessage, addHeaders, sendData etc. These all have could have further abstractions still. And so on so forth.\n\nBy breaking out our logic into these abstracted levels we make our code easier to develop and manage.\n",
    data: {
      title: 'Abstraction',
      stub: 'What is abstraction and how does it apply to programming?',
      tags: 'explainers,c',
      modified: { raw: '2023-10-28T02:30:53.235Z', formatted: '28/10/2023' },
      created: { raw: '2023-10-28T02:30:53.235Z', formatted: '28/10/2023' },
      slug: 'abstraction-2023-9-28',
    },
    isEmpty: false,
    excerpt: '',
  },
}
export default metaData
