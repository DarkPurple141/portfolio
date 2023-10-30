/** THIS IS A GENERATED FILE
  @command pnpm build
  */
const metaData = {
  code: 'var Component=(()=>{var c=Object.create;var o=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var p=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty;var y=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),g=(r,e)=>{for(var i in e)o(r,i,{get:e[i],enumerable:!0})},s=(r,e,i,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of f(e))!m.call(r,t)&&t!==i&&o(r,t,{get:()=>e[t],enumerable:!(a=u(e,t))||a.enumerable});return r};var w=(r,e,i)=>(i=r!=null?c(p(r)):{},s(e||!r||!r.__esModule?o(i,"default",{value:r,enumerable:!0}):i,r)),b=r=>s(o({},"__esModule",{value:!0}),r);var d=y((H,l)=>{l.exports=_jsx_runtime});var j={};g(j,{default:()=>_,frontmatter:()=>x});var n=w(d()),x={title:"What are \'Header\' files?",stub:"Understanding the use and application of header files",tags:"c,explainers"};function h(r){let e=Object.assign({h2:"h2",a:"a",p:"p",ul:"ul",li:"li",code:"code",blockquote:"blockquote"},r.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"understanding-the-use-and-application-of-header-files",children:(0,n.jsx)(e.a,{href:"#understanding-the-use-and-application-of-header-files",children:"Understanding the use and application of header files"})}),`\n`,(0,n.jsx)(e.p,{children:"Header files fulfil a few key principles of good modular code:"}),`\n`,(0,n.jsxs)(e.ul,{children:[`\n`,(0,n.jsx)(e.li,{children:"They allow us to separate out our related logic"}),`\n`,(0,n.jsx)(e.li,{children:"They allow us to reuse or not use elements of logic in different files as we see fit"}),`\n`,(0,n.jsx)(e.li,{children:"They provide an agreed common interface"}),`\n`]}),`\n`,(0,n.jsx)(e.h2,{id:"system-headers-sysh",children:(0,n.jsx)(e.a,{href:"#system-headers-sysh",children:"System Headers (<sys.h>)"})}),`\n`,(0,n.jsxs)(e.p,{children:["These are your run of the mill ",(0,n.jsx)(e.code,{children:"<stdio.h>"}),` type files. Though we don\'t strictly know\nwhat\'s in the underlying c-code that implements these libraries they do provide\na singular common interface for us to use functions like `,(0,n.jsx)(e.code,{children:"printf()"}),` or defines like\nEXIT_SUCCESS.`]}),`\n`,(0,n.jsx)(e.h2,{id:"your-own-headers-myheaderh",children:(0,n.jsx)(e.a,{href:"#your-own-headers-myheaderh",children:\'Your own headers ("myHeader.h")\'})}),`\n`,(0,n.jsx)(e.p,{children:`Your own headers allow you to support more complex programs in c that require\nseparated logic being used across multiple files.`}),`\n`,(0,n.jsx)(e.h2,{id:"nb",children:(0,n.jsx)(e.a,{href:"#nb",children:"NB"})}),`\n`,(0,n.jsx)(e.p,{children:"Header files are a sort of contract that you\'re making with compiler."}),`\n`,(0,n.jsxs)(e.blockquote,{children:[`\n`,(0,n.jsx)(e.p,{children:\'"I will implement this library elsewhere in another c file"\'}),`\n`]}),`\n`,(0,n.jsx)(e.p,{children:`As long as you do actually implement the library (and compile your program with it)\nyou can include and use the library in as many places as you see fit in other c-files.`}),`\n`,(0,n.jsx)(e.p,{children:"The power of this won\'t be immediately obvious, but trust us, it\'s powerful af."})]})}function k(r={}){let{wrapper:e}=r.components||{};return e?(0,n.jsx)(e,Object.assign({},r,{children:(0,n.jsx)(h,r)})):h(r)}var _=k;return b(j);})();\n;return Component;',
  frontmatter: {
    title: "What are 'Header' files?",
    stub: 'Understanding the use and application of header files',
    tags: 'c,explainers',
    createdDate: '2023-10-27T03:30:43.088Z',
    modifiedDate: '2023-10-27T03:30:43.088Z',
    slug: 'what_are_header_files.markdown-1698377443087.6782',
  },
  errors: [],
  matter: {
    content:
      "## Understanding the use and application of header files\nHeader files fulfil a few key principles of good modular code:\n\n* They allow us to separate out our related logic\n* They allow us to reuse or not use elements of logic in different files as we see fit\n* They provide an agreed common interface\n\n## System Headers (\\<sys.h\\>)\nThese are your run of the mill ```<stdio.h>``` type files. Though we don't strictly know\nwhat's in the underlying c-code that implements these libraries they do provide\na singular common interface for us to use functions like ```printf()``` or defines like\nEXIT_SUCCESS.\n\n## Your own headers (\"myHeader.h\")\nYour own headers allow you to support more complex programs in c that require\nseparated logic being used across multiple files.\n\n## NB\nHeader files are a sort of contract that you're making with compiler.\n> \"I will implement this library elsewhere in another c file\"\n\nAs long as you do actually implement the library (and compile your program with it)\nyou can include and use the library in as many places as you see fit in other c-files.\n\nThe power of this won't be immediately obvious, but trust us, it's powerful af.\n",
    data: {
      title: "What are 'Header' files?",
      stub: 'Understanding the use and application of header files',
      tags: 'c,explainers',
      createdDate: '2023-10-27T03:30:43.088Z',
      modifiedDate: '2023-10-27T03:30:43.088Z',
      slug: 'what_are_header_files.markdown-1698377443087.6782',
    },
    isEmpty: false,
    excerpt: '',
  },
}
export default metaData
