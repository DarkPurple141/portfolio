const metaData = {
  code: 'var Component=(()=>{var h=Object.create;var o=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var f=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty;var u=(t,n)=>()=>(n||t((n={exports:{}}).exports,n),n.exports),_=(t,n)=>{for(var r in n)o(t,r,{get:n[r],enumerable:!0})},i=(t,n,r,a)=>{if(n&&typeof n=="object"||typeof n=="function")for(let s of p(n))!j.call(t,s)&&s!==r&&o(t,s,{get:()=>n[s],enumerable:!(a=d(n,s))||a.enumerable});return t};var g=(t,n,r)=>(r=t!=null?h(f(t)):{},i(n||!t||!t.__esModule?o(r,"default",{value:t,enumerable:!0}):r,t)),M=t=>i(o({},"__esModule",{value:!0}),t);var m=u((F,c)=>{c.exports=_jsx_runtime});var C={};_(C,{default:()=>b,frontmatter:()=>x});var e=g(m()),x={title:"Example Post"};function l(t){let n=Object.assign({h1:"h1",a:"a",p:"p"},t.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h1,{id:"frontmattertitle",children:(0,e.jsx)(n.a,{href:"#frontmattertitle",children:x.title})}),`\n`,(0,e.jsx)(n.p,{children:"This is an example post. It is written in Markdown."})]})}function w(t={}){let{wrapper:n}=t.components||{};return n?(0,e.jsx)(n,Object.assign({},t,{children:(0,e.jsx)(l,t)})):l(t)}var b=w;return M(C);})();\n;return Component;',
  frontmatter: {
    title: 'Example Post',
    createdDate: '2023-10-26T00:20:35.581Z',
    modifiedDate: '2023-10-26T02:51:38.028Z',
    slug: 'test-page-1698279635581.0063',
  },
  errors: [],
  matter: {
    content:
      '\n# {frontmatter.title}\n\nThis is an example post. It is written in Markdown.\n',
    data: {
      title: 'Example Post',
      createdDate: '2023-10-26T00:20:35.581Z',
      modifiedDate: '2023-10-26T02:51:38.028Z',
      slug: 'test-page-1698279635581.0063',
    },
    isEmpty: false,
    excerpt: '',
  },
}
export default metaData
