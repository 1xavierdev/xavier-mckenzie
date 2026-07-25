# Xavier McKenzie — Portfolio

This is my personal portfolio site. I'm a Computer Science student at Central Connecticut
State University (Software Engineering concentration, class of 2027), and I built this to
show what I'm working on as I grow as a full-stack developer.

I designed and coded it from scratch with React, TypeScript, and Tailwind CSS. I wanted it
to feel like my own thing — a warm, "engineer's notebook" look with hand-built neo-brutalist
cards instead of the usual dark portfolio template everyone uses.

> **Live site:** _I'll drop my deployed URL here_

## What's on the site

- **Hero** — a quick intro with a little terminal-style summary card I made
- **About** — who I am and what I'm focused on right now
- **Education & Achievements** — CCSU, my coursework, and the communities I'm part of (ColorStack, NSBE)
- **Skills** — the languages and tools I actually work with
- **Projects** — the things I've built, with the ones I'm most proud of up top
- **Contact** — how to reach me (I'm open to Summer 2026 internships)

## How I built it

| Tool | Why I chose it |
| --- | --- |
| **Vite** | Fast dev server and a quick production build |
| **React + TypeScript** | I wanted a component-based UI with type safety |
| **Tailwind CSS** | Utility-first styling, plus a small design system I wrote myself |
| **shadcn/ui** | Accessible component primitives I could style my own way |
| **Lucide** | Clean, consistent icons |

My design system — the color tokens, the neo-brutalist card and button styles, and the
fonts — lives in `src/index.css` and `tailwind.config.ts`.

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

## How it's organized

```
src/
  components/          # my page sections (Hero, About, Education, Skills, Projects, Contact)
  components/ui/       # shadcn/ui primitives
  pages/               # routed pages (Index, NotFound)
  index.css           # my design tokens + custom utility classes
  main.tsx            # app entry
```

## Deploying

`npm run build` spits out a static site to `dist/`, which I can host on GitHub Pages,
Vercel, Netlify, or Cloudflare Pages.

## Reach me

- **Email:** xmckenzie209@gmail.com
- **GitHub:** [@1xavierdev](https://github.com/1xavierdev)
- **LinkedIn:** [xavier-mckenzie](https://linkedin.com/in/xavier-mckenzie)

---

Built by me, Xavier McKenzie.
