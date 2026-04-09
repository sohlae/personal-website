# Josh Monreal — portfolio

Personal portfolio site for Josh Monreal (.NET developer and software architect). It presents a hero section, about copy, tech stack, featured case studies, and contact links. The site is built as a **static** Astro app with Tailwind CSS, so pages are pre-rendered and easy to host on any static host (Netlify, Vercel, GitHub Pages, Azure Static Web Apps, etc.).

## Tech stack

- **[Astro](https://astro.build/) 6** — static site generation, `.astro` components
- **[Tailwind CSS](https://tailwindcss.com/) 4** — styling via the official [`@tailwindcss/vite`](https://tailwindcss.com/docs/installation/framework-guides/astro) plugin (theme tokens live in [`src/styles/global.css`](src/styles/global.css) under `@theme`)
- **TypeScript** — project and content typing
- **Fonts** — `@fontsource-variable/inter`, `@fontsource/jetbrains-mono`

Content and copy (meta tags, hero, about, projects, links) live mainly in [`src/data/site.ts`](src/data/site.ts). Page structure is assembled in [`src/pages/index.astro`](src/pages/index.astro).

## Prerequisites

- **Node.js** **22.12 or later**

## Install

1. Clone the repository and open the project folder

2. Install dependencies:

```bash
   npm install
```

## Run locally

Start the development server (hot reload):

```bash
npm run dev
```

Open the URL Astro prints (usually `http://localhost:4321`).

## Other commands

| Command | Description |
|--------|-------------|
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally (run after `build`) |
| `npm run check` | Run `astro check` for Astro/TS diagnostics |

## Deploy to GitHub Pages

Push to `main` — the workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and deploys automatically on every push.

## Customizing content

- **Site copy & projects:** edit [`src/data/site.ts`](src/data/site.ts) (`hero`, `about`, `techStack`, `featuredProjects`, contact, etc.).
- **Layout & sections:** components under [`src/components/`](src/components/), base layout in [`src/layouts/`](src/layouts/).

## License

Licensed under [CC0-1.0 license](LICENSE)