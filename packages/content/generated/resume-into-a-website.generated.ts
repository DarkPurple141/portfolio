/** THIS IS A GENERATED FILE
 * @command pnpm build
 */
const metaData = {
  code: 'var Component=(()=>{var d=Object.create;var a=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var u=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var w=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),f=(n,e)=>{for(var i in e)a(n,i,{get:e[i],enumerable:!0})},r=(n,e,i,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of p(e))!g.call(n,s)&&s!==i&&a(n,s,{get:()=>e[s],enumerable:!(o=m(e,s))||o.enumerable});return n};var b=(n,e,i)=>(i=n!=null?d(u(n)):{},r(e||!n||!n.__esModule?a(i,"default",{value:n,enumerable:!0}):i,n)),y=n=>r(a({},"__esModule",{value:!0}),n);var h=w((T,l)=>{l.exports=_jsx_runtime});var j={};f(j,{default:()=>S,frontmatter:()=>I});var t=b(h()),I={title:"How I made my resum\\xE9 into a website",published:new Date(1698805853235),stub:"Along time ago I designed and built my resum\\xE9 in HTML. It was a fun little project. I\\u2019ve recently transformed the same HTML into a website. This is how I did it.",tags:["web development","html","css"]};function c(n){let e=Object.assign({p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li",h2:"h2"},n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[`Some people find their websites become glorified resum\\xE9s. About five years ago I\nset out to do the opposite, I made my resum\\xE9 from HTML and hosted it on one of\nmy `,(0,t.jsx)(e.a,{href:"https://misc.alhinds.com/resume",children:"miscellaneous domains"}),`. This was pretty\ncool. It gave me a bunch of flexibility and allowed me to leverage the same CSS\ntheme across other personal branding projects. A nifty little feature is with\nthe following CSS:`]}),`\n`,(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-css",children:`@page {\n  size: 210mm 317mm;\n  margin: 0;\n}\n`})}),`\n`,(0,t.jsx)(e.p,{children:`... It also prints correctly on A4 paper. So if I ever needed a PDF for a\nrecruiter I could print the page and voila, I had a PDF (I know, I know, I could\nhave just made a PDF, but where\\u2019s the fun in that?).`}),`\n`,(0,t.jsx)("img",{src:"https://static.alhinds.com/resume-into-a-website/print.png",alt:"Screenshot of the printing behavior of the resume"}),`\n`,(0,t.jsx)(e.p,{children:`Over the years I\\u2019ve made a few updates to the resum\\xE9, but it\\u2019s mostly remained\nthe same. It was bugging me though that it wasn\'t really a website. It was a PDF\npretending to be one. It wasn\'t:`}),`\n`,(0,t.jsxs)(e.ul,{children:[`\n`,(0,t.jsx)(e.li,{children:"responsive"}),`\n`,(0,t.jsx)(e.li,{children:"accessible (there were all sorts of contrast violations)"}),`\n`,(0,t.jsx)(e.li,{children:`it didn\'t have dark mode (okay this is probably not necessary, but I wanted\nit)`}),`\n`]}),`\n`,(0,t.jsxs)(e.p,{children:[`So I did a revamp. It\'s live now at\n`,(0,t.jsx)(e.a,{href:"https://static.alhinds.com",children:"static.alhinds.com"}),"."]}),`\n`,(0,t.jsx)(e.h2,{id:"before-and-after",children:"Before and after"}),`\n`,(0,t.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},children:[(0,t.jsx)("img",{src:"https://static.alhinds.com/resume-into-a-website/mobile-before.png",alt:"Screenshot of the old resume in mobile"}),(0,t.jsx)("img",{src:"https://static.alhinds.com/resume-into-a-website/mobile.png",alt:"Screenshot of the new resume in mobile"})]}),`\n`,(0,t.jsx)(e.p,{children:`Note this still prints at A4. I didn\'t change the HTML structure at all. What I\ndid change was some of the design constraints (via CSS) for the mobile view. The\nkey now is that all content flows in a column/block layout on all viewports,\nwith some of the typography and spacing also scaling with the viewport.`}),`\n`,(0,t.jsx)(e.p,{children:`Because I\'ve been working heavily in the design system space recently I also\ncoined a proper theme file for the site which I\'m now sharing with this website\ntoo. This means all the typography, color and space requirements are defined in\none place and this helps to keep the two sites in relative harmony.`})]})}function v(n={}){let{wrapper:e}=n.components||{};return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(c,n)})):c(n)}var S=v;return y(j);})();\n;return Component;',
  frontmatter: {
    title: 'How I made my resumé into a website',
    published: '2023-11-01T02:30:53.235Z',
    stub: 'Along time ago I designed and built my resumé in HTML. It was a fun little project. I’ve recently transformed the same HTML into a website. This is how I did it.',
    tags: ['web development', 'html', 'css'],
    modified: {
      raw: '2023-11-04T00:56:49.129Z',
      formatted: 'November 4, 2023',
    },
    created: { raw: '2023-11-01T02:30:53.235Z', formatted: 'November 1, 2023' },
    slug: 'resume-into-a-website-2023-10-1',
  },
  errors: [],
  matter: {
    content:
      "\nSome people find their websites become glorified resumés. About five years ago I\nset out to do the opposite, I made my resumé from HTML and hosted it on one of\nmy [miscellaneous domains](https://misc.alhinds.com/resume). This was pretty\ncool. It gave me a bunch of flexibility and allowed me to leverage the same CSS\ntheme across other personal branding projects. A nifty little feature is with\nthe following CSS:\n\n```css\n@page {\n  size: 210mm 317mm;\n  margin: 0;\n}\n```\n\n... It also prints correctly on A4 paper. So if I ever needed a PDF for a\nrecruiter I could print the page and voila, I had a PDF (I know, I know, I could\nhave just made a PDF, but where’s the fun in that?).\n\n<img\n  src=\"https://static.alhinds.com/resume-into-a-website/print.png\"\n  alt=\"Screenshot of the printing behavior of the resume\"\n/>\n\nOver the years I’ve made a few updates to the resumé, but it’s mostly remained\nthe same. It was bugging me though that it wasn't really a website. It was a PDF\npretending to be one. It wasn't:\n\n- responsive\n- accessible (there were all sorts of contrast violations)\n- it didn't have dark mode (okay this is probably not necessary, but I wanted\n  it)\n\nSo I did a revamp. It's live now at\n[static.alhinds.com](https://static.alhinds.com).\n\n## Before and after\n\n<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>\n  <img\n    src=\"https://static.alhinds.com/resume-into-a-website/mobile-before.png\"\n    alt=\"Screenshot of the old resume in mobile\"\n  />\n  <img\n    src=\"https://static.alhinds.com/resume-into-a-website/mobile.png\"\n    alt=\"Screenshot of the new resume in mobile\"\n  />\n</div>\n\nNote this still prints at A4. I didn't change the HTML structure at all. What I\ndid change was some of the design constraints (via CSS) for the mobile view. The\nkey now is that all content flows in a column/block layout on all viewports,\nwith some of the typography and spacing also scaling with the viewport.\n\nBecause I've been working heavily in the design system space recently I also\ncoined a proper theme file for the site which I'm now sharing with this website\ntoo. This means all the typography, color and space requirements are defined in\none place and this helps to keep the two sites in relative harmony.\n",
    data: {
      title: 'How I made my resumé into a website',
      published: '2023-11-01T02:30:53.235Z',
      stub: 'Along time ago I designed and built my resumé in HTML. It was a fun little project. I’ve recently transformed the same HTML into a website. This is how I did it.',
      tags: ['web development', 'html', 'css'],
      modified: {
        raw: '2023-11-04T00:56:49.129Z',
        formatted: 'November 4, 2023',
      },
      created: {
        raw: '2023-11-01T02:30:53.235Z',
        formatted: 'November 1, 2023',
      },
      slug: 'resume-into-a-website-2023-10-1',
    },
    isEmpty: false,
    excerpt: '',
  },
}
export default metaData
