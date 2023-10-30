/** THIS IS A GENERATED FILE
 * @command pnpm build
 */
const metaData = {
  code: 'var Component=(()=>{var h=Object.create;var t=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var p=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty;var y=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports),g=(i,e)=>{for(var o in e)t(i,o,{get:e[o],enumerable:!0})},s=(i,e,o,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of f(e))!m.call(i,r)&&r!==o&&t(i,r,{get:()=>e[r],enumerable:!(l=u(e,r))||l.enumerable});return i};var w=(i,e,o)=>(o=i!=null?h(p(i)):{},s(e||!i||!i.__esModule?t(o,"default",{value:i,enumerable:!0}):o,i)),b=i=>s(t({},"__esModule",{value:!0}),i);var d=y((T,a)=>{a.exports=_jsx_runtime});var _={};g(_,{default:()=>C,frontmatter:()=>x});var n=w(d()),x={title:"What\'s the use of C\'s header files?",stub:"Header files in C fulfil a few key principles of good modular programming allowing us to separate out our related logic, reuse or not use elements of logic in different files as we see fit and provide an agreed common interface for implementation.",published:new Date(1452047453235),tags:["c","explainers"]};function c(i){let e=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",code:"code",blockquote:"blockquote"},i.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"understanding-the-use-and-application-of-header-files",children:"Understanding the use and application of header files"}),`\n`,(0,n.jsx)(e.p,{children:"Header files fulfil a few key principles of good modular code:"}),`\n`,(0,n.jsxs)(e.ul,{children:[`\n`,(0,n.jsx)(e.li,{children:"They allow us to separate out our related logic"}),`\n`,(0,n.jsx)(e.li,{children:"They allow us to reuse or not use elements of logic in different files as we see fit"}),`\n`,(0,n.jsx)(e.li,{children:"They provide an agreed common interface"}),`\n`]}),`\n`,(0,n.jsx)(e.h2,{id:"system-headers-sysh",children:"System Headers (<sys.h>)"}),`\n`,(0,n.jsxs)(e.p,{children:["These are your run of the mill ",(0,n.jsx)(e.code,{children:"<stdio.h>"}),` type files. Though we don\'t strictly know\nwhat\'s in the underlying c-code that implements these libraries they do provide\na singular common interface for us to use functions like `,(0,n.jsx)(e.code,{children:"printf()"}),` or defines like\nEXIT_SUCCESS.`]}),`\n`,(0,n.jsx)(e.h2,{id:"your-own-headers-myheaderh",children:\'Your own headers ("myHeader.h")\'}),`\n`,(0,n.jsx)(e.p,{children:`Your own headers allow you to support more complex programs in c that require\nseparated logic being used across multiple files.`}),`\n`,(0,n.jsx)(e.h2,{id:"nb",children:"NB"}),`\n`,(0,n.jsx)(e.p,{children:"Header files are a sort of contract that you\'re making with the compiler."}),`\n`,(0,n.jsxs)(e.blockquote,{children:[`\n`,(0,n.jsx)(e.p,{children:"I will implement this library elsewhere in another C file"}),`\n`]}),`\n`,(0,n.jsx)(e.p,{children:`As long as you do actually implement the library (and compile your program with it),\nyou can include and use the library in as many places as you see fit in other C-files.`}),`\n`,(0,n.jsx)(e.p,{children:"The power of this won\'t be immediately obvious, but trust us, it\'s powerful af."})]})}function k(i={}){let{wrapper:e}=i.components||{};return e?(0,n.jsx)(e,Object.assign({},i,{children:(0,n.jsx)(c,i)})):c(i)}var C=k;return b(_);})();\n;return Component;',
  frontmatter: {
    title: "What's the use of C's header files?",
    stub: 'Header files in C fulfil a few key principles of good modular programming allowing us to separate out our related logic, reuse or not use elements of logic in different files as we see fit and provide an agreed common interface for implementation.',
    published: '2016-01-06T02:30:53.235Z',
    tags: ['c', 'explainers'],
    modified: { raw: '2023-10-30T10:23:07.148Z', formatted: '30/10/2023' },
    created: { raw: '2016-01-06T02:30:53.235Z', formatted: '06/01/2016' },
    slug: 'what-are-header-files-2016-0-6',
  },
  errors: [],
  matter: {
    content:
      "\n## Understanding the use and application of header files\n\nHeader files fulfil a few key principles of good modular code:\n\n- They allow us to separate out our related logic\n- They allow us to reuse or not use elements of logic in different files as we see fit\n- They provide an agreed common interface\n\n## System Headers (\\<sys.h\\>)\n\nThese are your run of the mill `<stdio.h>` type files. Though we don't strictly know\nwhat's in the underlying c-code that implements these libraries they do provide\na singular common interface for us to use functions like `printf()` or defines like\nEXIT_SUCCESS.\n\n## Your own headers (\"myHeader.h\")\n\nYour own headers allow you to support more complex programs in c that require\nseparated logic being used across multiple files.\n\n## NB\n\nHeader files are a sort of contract that you're making with the compiler.\n\n> I will implement this library elsewhere in another C file\n\nAs long as you do actually implement the library (and compile your program with it),\nyou can include and use the library in as many places as you see fit in other C-files.\n\nThe power of this won't be immediately obvious, but trust us, it's powerful af.\n",
    data: {
      title: "What's the use of C's header files?",
      stub: 'Header files in C fulfil a few key principles of good modular programming allowing us to separate out our related logic, reuse or not use elements of logic in different files as we see fit and provide an agreed common interface for implementation.',
      published: '2016-01-06T02:30:53.235Z',
      tags: ['c', 'explainers'],
      modified: { raw: '2023-10-30T10:23:07.148Z', formatted: '30/10/2023' },
      created: { raw: '2016-01-06T02:30:53.235Z', formatted: '06/01/2016' },
      slug: 'what-are-header-files-2016-0-6',
    },
    isEmpty: false,
    excerpt: '',
  },
}
export default metaData
