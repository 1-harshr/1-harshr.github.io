# harsh-portfolio

Personal site of Harsh Ranjan. Software engineer building complete products, mobile first.

Built with Next.js (App Router) and TypeScript, statically generated.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Update content

Everything on the page lives in **`content/site.ts`**. You never need to touch the components to:

- add a job, project, poem or "random" line
- change your tagline or links (LinkedIn, X, resume)
- add travel photos

### Travel photos

1. Put images in `public/travel/`, e.g. `public/travel/kedarkantha.jpg`
2. In `content/site.ts`, set the entry's `src`, `place`, `year` and a `ratio` that matches the photo:

```ts
{ place: "Kedarkantha", year: "2023", ratio: "3/4", src: "/travel/kedarkantha.jpg" }
```

Next.js resizes and lazy-loads them automatically.

## Project structure

```
app/
  layout.tsx    fonts (Doto, Martian Mono, Newsreader) and metadata
  page.tsx      section order
  globals.css   theme tokens, light and dark mode, layout
components/     one file per section
content/
  site.ts       all the words, links and photos
public/
  me.jpg        hero photo
  travel/       travel photos
```

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com/new). Set `NEXT_PUBLIC_SITE_URL` to your final URL so social previews resolve correctly.
