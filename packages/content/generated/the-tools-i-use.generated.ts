/** THIS IS A GENERATED FILE
 * @command pnpm build
 */
const metaData = {
  code: 'var Component=(()=>{var d=Object.create;var l=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var u=Object.getPrototypeOf,f=Object.prototype.hasOwnProperty;var g=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),w=(n,e)=>{for(var t in e)l(n,t,{get:e[t],enumerable:!0})},o=(n,e,t,h)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of p(e))!f.call(n,r)&&r!==t&&l(n,r,{get:()=>e[r],enumerable:!(h=m(e,r))||h.enumerable});return n};var v=(n,e,t)=>(t=n!=null?d(u(n)):{},o(e||!n||!n.__esModule?l(t,"default",{value:n,enumerable:!0}):t,n)),b=n=>o(l({},"__esModule",{value:!0}),n);var a=g((D,s)=>{s.exports=_jsx_runtime});var j={};w(j,{default:()=>x,frontmatter:()=>y});var i=v(a()),y={title:"The tools I use for software development in 2023",published:new Date(1699151453235),description:"What I\'m using in 2023.",tags:["software","personal","tools"]};function c(n){let e=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",code:"code",a:"a",h3:"h3"},n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:`A list of tools, frameworks and equipment that I use to build software - no\nparticular order.`}),`\n`,(0,i.jsx)(e.h2,{id:"infrastructure",children:"Infrastructure"}),`\n`,(0,i.jsxs)(e.ul,{children:[`\n`,(0,i.jsxs)(e.li,{children:["Version control - ",(0,i.jsx)(e.code,{children:"git"})]}),`\n`,(0,i.jsxs)(e.li,{children:["Remote - ",(0,i.jsx)(e.a,{href:"https://github.com/",children:"github"})," never bet against microsoft"]}),`\n`,(0,i.jsxs)(e.li,{children:["Hosting - ",(0,i.jsx)(e.a,{href:"https://vercel.com/",children:"vercel"})," - simple and easy to use."]}),`\n`,(0,i.jsxs)(e.li,{children:["Hosting - ",(0,i.jsx)(e.a,{href:"https://fly.io/",children:"fly.io"})," - when I need a server."]}),`\n`,(0,i.jsxs)(e.li,{children:["Hosting advanced - ",(0,i.jsx)(e.a,{href:"https://aws.amazon.com/",children:"aws"}),` - when I need specific\nfunctionality and complexity.`]}),`\n`,(0,i.jsxs)(e.li,{children:["Database (mostly wrapped by prisma)",`\n`,(0,i.jsxs)(e.ul,{children:[`\n`,(0,i.jsx)(e.li,{children:"none (if the repository data is enough)"}),`\n`,(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://www.sqlite.org/index.html",children:"sqlite3"})," (for most things)"]}),`\n`,(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://www.postgresql.org/",children:"postgresql"}),` (for more complex things usually\nvia `,(0,i.jsx)(e.code,{children:"fly.io"}),")"]}),`\n`]}),`\n`]}),`\n`]}),`\n`,(0,i.jsx)(e.h2,{id:"development-environment",children:"Development environment"}),`\n`,(0,i.jsx)(e.p,{children:"All the things I use to develop software."}),`\n`,(0,i.jsxs)(e.ul,{children:[`\n`,(0,i.jsxs)(e.li,{children:["Preferred language - ",(0,i.jsx)(e.a,{href:"https://www.typescriptlang.org/",children:"typescript"}),` - I\'ve been\nusing it for years and it\'s still the best option.`]}),`\n`,(0,i.jsxs)(e.li,{children:["Package manager - ",(0,i.jsx)(e.a,{href:"https://pnpm.io/",children:"pnpm"})," - To me the successor to ",(0,i.jsx)(e.code,{children:"yarn"}),` and\nwith some elegantly designed smarts over `,(0,i.jsx)(e.code,{children:"npm"}),". Also independent."]}),`\n`,(0,i.jsxs)(e.li,{children:["Editor - ",(0,i.jsx)(e.a,{href:"https://code.visualstudio.com/",children:"vscode"}),` - never bet against\nmicrosoft`]}),`\n`,(0,i.jsxs)(e.li,{children:["Terminal - ",(0,i.jsx)(e.a,{href:"https://iterm2.com/",children:"iterm2"})," sometimes I still use ",(0,i.jsx)(e.code,{children:"terminal"}),`\nthough.`]}),`\n`,(0,i.jsxs)(e.li,{children:["Code style - ",(0,i.jsx)(e.a,{href:"https://prettier.io/",children:"prettier"}),` - Simple, opinionated and\nextensible.`]}),`\n`,(0,i.jsxs)(e.li,{children:["Linter - ",(0,i.jsx)(e.a,{href:"https://eslint.org/",children:"eslint"})," - extremely powerful and configurable."]}),`\n`,(0,i.jsxs)(e.li,{children:["Shell - ",(0,i.jsx)(e.a,{href:"https://ohmyz.sh/",children:"zsh"})," with ",(0,i.jsx)(e.code,{children:"oh-my-zsh"}),", played briefly with ",(0,i.jsx)(e.code,{children:"fish"}),`\nbut found it had too many compatibilit issues.`]}),`\n`,(0,i.jsxs)(e.li,{children:["Browser - ",(0,i.jsx)(e.a,{href:"https://www.google.com/intl/en_au/chrome/",children:"chrome"}),`, will stil test\non other browsers and experimented with `,(0,i.jsx)(e.a,{href:"https://arc.net/",children:"arc"}),` but found it\ntoo slow / tried to do too many things.`]}),`\n`]}),`\n`,(0,i.jsx)(e.h3,{id:"frameworks",children:"Frameworks"}),`\n`,(0,i.jsx)(e.p,{children:"The key meta frameworks/tools that I use to build software."}),`\n`,(0,i.jsxs)(e.ul,{children:[`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://nextjs.org/",children:"Next.js"})}),`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://www.prisma.io/",children:"Prisma"})}),`\n`,(0,i.jsxs)(e.li,{children:["Styling & fast design - ",(0,i.jsx)(e.a,{href:"https://tailwindcss.com/",children:"Tailwind CSS"})]}),`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://vitejs.dev/",children:"Vite"})}),`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://reactjs.org/",children:"React"})}),`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://trpc.io/",children:"TRPC"})}),`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://mdxjs.com/",children:"MDX"})}),`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://www.docker.com/",children:"Docker"})}),`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://docs.docker.com/compose/",children:"Docker Compose"})}),`\n`]}),`\n`,(0,i.jsx)(e.h3,{id:"editor-extensions",children:"Editor extensions"}),`\n`,(0,i.jsx)(e.p,{children:`There are some here that I\'ve omitted but these are the core set. I like to keep\nthe number of extensions to a minimum in general but I\'m not afraid to add more\nif need be.`}),`\n`,(0,i.jsxs)(e.ul,{children:[`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker",children:"Docker"})}),`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",children:"ESLint"})}),`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens",children:"Gitlens"})}),`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",children:"Prettier"})}),`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://marketplace.visualstudio.com/items?itemName=cschleiden.vscode-github-actions",children:"Github Actions"})}),`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://marketplace.visualstudio.com/items?itemName=GitHub.copilot",children:"Github Copilot"})}),`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx",children:"MDX"})}),`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://marketplace.visualstudio.com/items?itemName=Prisma.prisma",children:"Prisma"})}),`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss",children:"Tailwind CSS IntelliSense"})}),`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://marketplace.visualstudio.com/items?itemName=octref.vetur",children:"Vetur"})}),`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag",children:"Auto Rename Tag"})}),`\n`]}),`\n`,(0,i.jsx)(e.h2,{id:"design",children:"Design"}),`\n`,(0,i.jsxs)(e.ul,{children:[`\n`,(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://www.figma.com/",children:"Figma"}),` - increasingly the defacto tool for designing\nfor the web`]}),`\n`,(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://leonardocolor.io/",children:"Leonardo"})," - a neat dynamic palette generator"]}),`\n`,(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://amzn.github.io/style-dictionary/",children:"Style Dictionary"}),` - a great tool\nfor generating design tokens`]}),`\n`]}),`\n`,(0,i.jsx)(e.h2,{id:"equipment",children:"Equipment"}),`\n`,(0,i.jsxs)(e.ul,{children:[`\n`,(0,i.jsx)(e.li,{children:\'Macbook Pro 14" 2023\'}),`\n`,(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://store.sony.com.au/wh-1000xm5-headphones",children:"Sony WH-1000XM5"}),` - just the\nbest headphones`]}),`\n`,(0,i.jsx)(e.li,{children:`Apple Watch SE - simple, cheap, and does all the important things I need in a\nsmart watch.`}),`\n`,(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://www.artemide.com/en/subfamily/1849546/tolomeo-table",children:"Artemide Tolomeo"}),`\ndesk lamp - just a really nice lamp.`]}),`\n`]})]})}function k(n={}){let{wrapper:e}=n.components||{};return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(c,n)})):c(n)}var x=k;return b(j);})();\n;return Component;',
  frontmatter: {
    title: 'The tools I use for software development in 2023',
    published: '2023-11-05T02:30:53.235Z',
    description: "What I'm using in 2023.",
    tags: ['software', 'personal', 'tools'],
    modified: {
      raw: '2023-11-05T10:29:42.122Z',
      formatted: 'November 5, 2023',
    },
    created: { raw: '2023-11-05T02:30:53.235Z', formatted: 'November 5, 2023' },
    slug: 'the-tools-i-use-2023-10-5',
  },
  errors: [],
  matter: {
    content:
      "\nA list of tools, frameworks and equipment that I use to build software - no\nparticular order.\n\n## Infrastructure\n\n- Version control - `git`\n- Remote - [github](https://github.com/) never bet against microsoft\n- Hosting - [vercel](https://vercel.com/) - simple and easy to use.\n- Hosting - [fly.io](https://fly.io/) - when I need a server.\n- Hosting advanced - [aws](https://aws.amazon.com/) - when I need specific\n  functionality and complexity.\n- Database (mostly wrapped by prisma)\n  - none (if the repository data is enough)\n  - [sqlite3](https://www.sqlite.org/index.html) (for most things)\n  - [postgresql](https://www.postgresql.org/) (for more complex things usually\n    via `fly.io`)\n\n## Development environment\n\nAll the things I use to develop software.\n\n- Preferred language - [typescript](https://www.typescriptlang.org/) - I've been\n  using it for years and it's still the best option.\n- Package manager - [pnpm](https://pnpm.io/) - To me the successor to `yarn` and\n  with some elegantly designed smarts over `npm`. Also independent.\n- Editor - [vscode](https://code.visualstudio.com/) - never bet against\n  microsoft\n- Terminal - [iterm2](https://iterm2.com/) sometimes I still use `terminal`\n  though.\n- Code style - [prettier](https://prettier.io/) - Simple, opinionated and\n  extensible.\n- Linter - [eslint](https://eslint.org/) - extremely powerful and configurable.\n- Shell - [zsh](https://ohmyz.sh/) with `oh-my-zsh`, played briefly with `fish`\n  but found it had too many compatibilit issues.\n- Browser - [chrome](https://www.google.com/intl/en_au/chrome/), will stil test\n  on other browsers and experimented with [arc](https://arc.net/) but found it\n  too slow / tried to do too many things.\n\n### Frameworks\n\nThe key meta frameworks/tools that I use to build software.\n\n- [Next.js](https://nextjs.org/)\n- [Prisma](https://www.prisma.io/)\n- Styling & fast design - [Tailwind CSS](https://tailwindcss.com/)\n- [Vite](https://vitejs.dev/)\n- [React](https://reactjs.org/)\n- [TRPC](https://trpc.io/)\n- [MDX](https://mdxjs.com/)\n- [Docker](https://www.docker.com/)\n- [Docker Compose](https://docs.docker.com/compose/)\n\n### Editor extensions\n\nThere are some here that I've omitted but these are the core set. I like to keep\nthe number of extensions to a minimum in general but I'm not afraid to add more\nif need be.\n\n- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)\n- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)\n- [Gitlens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)\n- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)\n- [Github Actions](https://marketplace.visualstudio.com/items?itemName=cschleiden.vscode-github-actions)\n- [Github Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)\n- [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)\n- [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)\n- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)\n- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)\n- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)\n\n## Design\n\n- [Figma](https://www.figma.com/) - increasingly the defacto tool for designing\n  for the web\n- [Leonardo](https://leonardocolor.io/) - a neat dynamic palette generator\n- [Style Dictionary](https://amzn.github.io/style-dictionary/) - a great tool\n  for generating design tokens\n\n## Equipment\n\n- Macbook Pro 14\" 2023\n- [Sony WH-1000XM5](https://store.sony.com.au/wh-1000xm5-headphones) - just the\n  best headphones\n- Apple Watch SE - simple, cheap, and does all the important things I need in a\n  smart watch.\n- [Artemide Tolomeo](https://www.artemide.com/en/subfamily/1849546/tolomeo-table)\n  desk lamp - just a really nice lamp.\n",
    data: {
      title: 'The tools I use for software development in 2023',
      published: '2023-11-05T02:30:53.235Z',
      description: "What I'm using in 2023.",
      tags: ['software', 'personal', 'tools'],
      modified: {
        raw: '2023-11-05T10:29:42.122Z',
        formatted: 'November 5, 2023',
      },
      created: {
        raw: '2023-11-05T02:30:53.235Z',
        formatted: 'November 5, 2023',
      },
      slug: 'the-tools-i-use-2023-10-5',
    },
    isEmpty: false,
    excerpt: '',
  },
}
export default metaData
