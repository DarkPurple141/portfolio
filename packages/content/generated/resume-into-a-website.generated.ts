/** THIS IS A GENERATED FILE
 * @command pnpm build
 */
const metaData = {
  code: 'var Component=(()=>{var c=Object.create;var s=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var u=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var w=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),f=(t,e)=>{for(var i in e)s(t,i,{get:e[i],enumerable:!0})},r=(t,e,i,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of p(e))!g.call(t,a)&&a!==i&&s(t,a,{get:()=>e[a],enumerable:!(o=m(e,a))||o.enumerable});return t};var b=(t,e,i)=>(i=t!=null?c(u(t)):{},r(e||!t||!t.__esModule?s(i,"default",{value:t,enumerable:!0}):i,t)),y=t=>r(s({},"__esModule",{value:!0}),t);var h=w((x,l)=>{l.exports=_jsx_runtime});var j={};f(j,{default:()=>S,frontmatter:()=>v});var n=b(h()),v={title:"How I made my resum\\xE9 into a website",published:new Date(1698805853235),description:"A while back I designed and built my resum\\xE9 in HTML. I\\u2019ve recently transformed the same HTML into a proper website.",tags:["web development","html","css"]};function d(t){let e=Object.assign({p:"p",a:"a",pre:"pre",code:"code",em:"em",ul:"ul",li:"li",h2:"h2"},t.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.p,{children:[`About five years ago I decided to remake my resum\\xE9 from HTML and hosted it on\none of my `,(0,n.jsx)(e.a,{href:"https://misc.alhinds.com/resume",children:"miscellaneous domains"}),`. Designing\nand building in HTML and CSS is something I enjoy doing - it\'s flexible and\nfamiliar so it was a fun little project and delivered a result that I was happy\nwith. It also gave me a bunch of flexibility to leverage the same CSS across\nother personal branding web projects.`]}),`\n`,(0,n.jsx)(e.p,{children:`A key constraint was ensuring it could be printed on a single page - and I\nmanaged to achieve that with the following CSS:`}),`\n`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-css",children:`@page {\n  size: 210mm 317mm;\n  margin: 0;\n}\n`})}),`\n`,(0,n.jsx)(e.p,{children:`... and with some fine tuning on the size, and volume of content it prints\ncorrectly on A4 paper. If I ever needed a PDF for a recruiter I could print the\npage and voila, I had a PDF (I know, I know, I could have just made a PDF, but\nwhere\\u2019s the fun in that?).`}),`\n`,(0,n.jsx)("img",{src:"https://static.alhinds.com/resume-into-a-website/print.png",alt:"Screenshot of the printing behavior of the resume"}),`\n`,(0,n.jsxs)(e.p,{children:[`Over the years I\\u2019ve made a few updates to the resum\\xE9, but the design and layout\nhas mostly remained the same. It was bugging me though that it wasn\'t `,(0,n.jsx)(e.em,{children:"really"}),` a\nwebsite. It was a PDF dressed up with some flavour. It wasn\'t:`]}),`\n`,(0,n.jsxs)(e.ul,{children:[`\n`,(0,n.jsx)(e.li,{children:"responsive"}),`\n`,(0,n.jsx)(e.li,{children:"accessible (there were all sorts of contrast violations)"}),`\n`,(0,n.jsx)(e.li,{children:`it didn\'t have dark mode (okay this is probably not necessary, but I wanted\nit)`}),`\n`]}),`\n`,(0,n.jsxs)(e.p,{children:[`So I did a revamp. It\'s live now at\n`,(0,n.jsx)(e.a,{href:"https://static.alhinds.com",children:"static.alhinds.com"}),"."]}),`\n`,(0,n.jsx)(e.h2,{id:"before-and-after",children:"Before and after"}),`\n`,(0,n.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},children:[(0,n.jsx)("img",{src:"https://static.alhinds.com/resume-into-a-website/mobile-before.png",alt:"Screenshot of the old resume in mobile"}),(0,n.jsx)("img",{src:"https://static.alhinds.com/resume-into-a-website/mobile.png",alt:"Screenshot of the new resume in mobile"})]}),`\n`,(0,n.jsx)(e.p,{children:`Note this still prints at A4. I didn\'t change the HTML structure at all. What I\ndid change were some of the design constraints (via CSS) for the mobile view.\nThe key now is that all content flows in a column/block layout on all viewports,\nwith some of the typography and spacing also scaling with the viewport.`}),`\n`,(0,n.jsx)(e.p,{children:`Because I\'ve been working heavily in the design system space recently I also\ncoined a proper theme file for the site which I\'m now sharing with this website\ntoo. This means all the typography, color and space requirements are defined in\none place and this helps to keep the two sites in relative harmony.`})]})}function I(t={}){let{wrapper:e}=t.components||{};return e?(0,n.jsx)(e,Object.assign({},t,{children:(0,n.jsx)(d,t)})):d(t)}var S=I;return y(j);})();\n;return Component;',
  frontmatter: {
    title: 'How I made my resumé into a website',
    published: '2023-11-01T02:30:53.235Z',
    description:
      'A while back I designed and built my resumé in HTML. I’ve recently transformed the same HTML into a proper website.',
    tags: ['web development', 'html', 'css'],
    modified: {
      raw: '2026-02-09T09:35:58.627Z',
      formatted: 'February 9, 2026',
    },
    created: { raw: '2023-11-01T02:30:53.235Z', formatted: 'November 1, 2023' },
    slug: 'resume-into-a-website-2023-10-1',
  },
  errors: [],
  matter: {
    content:
      "\nAbout five years ago I decided to remake my resumé from HTML and hosted it on\none of my [miscellaneous domains](https://misc.alhinds.com/resume). Designing\nand building in HTML and CSS is something I enjoy doing - it's flexible and\nfamiliar so it was a fun little project and delivered a result that I was happy\nwith. It also gave me a bunch of flexibility to leverage the same CSS across\nother personal branding web projects.\n\nA key constraint was ensuring it could be printed on a single page - and I\nmanaged to achieve that with the following CSS:\n\n```css\n@page {\n  size: 210mm 317mm;\n  margin: 0;\n}\n```\n\n... and with some fine tuning on the size, and volume of content it prints\ncorrectly on A4 paper. If I ever needed a PDF for a recruiter I could print the\npage and voila, I had a PDF (I know, I know, I could have just made a PDF, but\nwhere’s the fun in that?).\n\n<img\n  src=\"https://static.alhinds.com/resume-into-a-website/print.png\"\n  alt=\"Screenshot of the printing behavior of the resume\"\n/>\n\nOver the years I’ve made a few updates to the resumé, but the design and layout\nhas mostly remained the same. It was bugging me though that it wasn't _really_ a\nwebsite. It was a PDF dressed up with some flavour. It wasn't:\n\n- responsive\n- accessible (there were all sorts of contrast violations)\n- it didn't have dark mode (okay this is probably not necessary, but I wanted\n  it)\n\nSo I did a revamp. It's live now at\n[static.alhinds.com](https://static.alhinds.com).\n\n## Before and after\n\n<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>\n  <img\n    src=\"https://static.alhinds.com/resume-into-a-website/mobile-before.png\"\n    alt=\"Screenshot of the old resume in mobile\"\n  />\n  <img\n    src=\"https://static.alhinds.com/resume-into-a-website/mobile.png\"\n    alt=\"Screenshot of the new resume in mobile\"\n  />\n</div>\n\nNote this still prints at A4. I didn't change the HTML structure at all. What I\ndid change were some of the design constraints (via CSS) for the mobile view.\nThe key now is that all content flows in a column/block layout on all viewports,\nwith some of the typography and spacing also scaling with the viewport.\n\nBecause I've been working heavily in the design system space recently I also\ncoined a proper theme file for the site which I'm now sharing with this website\ntoo. This means all the typography, color and space requirements are defined in\none place and this helps to keep the two sites in relative harmony.\n",
    data: {
      title: 'How I made my resumé into a website',
      published: '2023-11-01T02:30:53.235Z',
      description:
        'A while back I designed and built my resumé in HTML. I’ve recently transformed the same HTML into a proper website.',
      tags: ['web development', 'html', 'css'],
      modified: {
        raw: '2026-02-09T09:35:58.627Z',
        formatted: 'February 9, 2026',
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
