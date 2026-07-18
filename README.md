# klevyshi.xyz

A dark, gaming-inspired personal link hub for Klevyshi. The site turns the visual language of Klevyshi's Discord profile into an original midnight-violet web experience with social links and a favorite-games library.

## Stack

- Next.js 16 App Router
- React 19 + TypeScript
- Tailwind CSS 4 (CSS-first theme setup)
- `next/image` and `next/font`
- Vercel deployment

## Project structure

- `app/` — routes, metadata, SEO endpoints, error and 404 states
- `components/` — reusable inline SVG brand icons
- `public/` — optimized profile and banner assets

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
npm start
```

No environment variables are required.

## Notes

- Dark-only visual direction; there is no theme switcher.
- Public copy is intentionally limited to information visible in the supplied profile and links.
- Social links open in a new tab with safe `rel` attributes.
- The canonical production URL is `https://klevyshi.xyz`.
