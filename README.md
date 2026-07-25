# Xavier McKenzie Portfolio

This is my personal portfolio site. I'm a software engineer and Computer Science student at
Central Connecticut State University (Software Engineering concentration, graduating Dec 2027),
currently interning as a Software Engineer at CGI, where I build cloud and AI automation on AWS.

I designed and coded this site from scratch with React, TypeScript, and Tailwind CSS. I wanted it
to feel like my own thing, a warm "engineer's notebook" look with hand-built neo-brutalist cards
instead of the usual dark portfolio template everyone uses.

> **Live site:** https://xaviermckenzie.netlify.app

## What's on the site

- **Hero**: a quick intro with a terminal-style summary card
- **About**: who I am and what I'm focused on right now
- **Experience**: my software engineering internship at CGI and other roles
- **Education & Achievements**: CCSU, Manchester CC, Dean's List, and community involvement
- **Skills**: the languages, cloud tools, and frameworks I work with
- **Projects**: the things I've built, from an AWS security scanner to data-structure work
- **Contact**: how to reach me

## How I built it

| Tool | Why I chose it |
| --- | --- |
| **Vite** | Fast dev server and a quick production build |
| **React + TypeScript** | Component-based UI with type safety |
| **Tailwind CSS** | Utility-first styling, plus a small design system I wrote myself |
| **shadcn/ui** | Accessible component primitives I could style my own way |
| **Lucide** | Clean, consistent icons |

My design system (the color tokens, the neo-brutalist card and button styles, and the fonts)
lives in `src/index.css` and `tailwind.config.ts`.

## Running it locally

You'll need Node.js and npm.

```sh
git clone https://github.com/1xavierdev/xavier-mckenzie.git
cd xavier-mckenzie
npm install
npm run dev
```

It runs at http://localhost:8080.

## Scripts I use

```sh
npm run dev       # start the dev server
npm run build     # production build to /dist
npm run preview   # preview the production build
npm run lint      # run ESLint
npm test          # run my tests (Vitest)
```

## Deploying

`npm run build` outputs a static site to `dist/`. I deploy it on Netlify, and it also runs fine on
Vercel, GitHub Pages, or Cloudflare Pages.

## Reach me

- **Email:** x.mckenzie@my.ccsu.edu
- **GitHub:** [@1xavierdev](https://github.com/1xavierdev)
- **LinkedIn:** [xaviermckenzie](https://linkedin.com/in/xaviermckenzie)

---

Built by me, Xavier McKenzie.
