# CLAUDE.md

## Project overview

`klevyshi.xyz` is Klevyshi's personal profile and social link hub. It is a static, dark-first Next.js site inspired by a midnight-purple gaming profile.

## Stack and commands

- Next.js 16.2 App Router, React 19, strict TypeScript
- Tailwind CSS 4 via `@import "tailwindcss"`; no `tailwind.config.js`
- `npm run dev`, `npm run lint`, `npm run build`, `npm start`

## Conventions

- Use server components unless interaction truly requires client state.
- Keep public content in English and avoid inventing biographical details.
- Use semantic HTML, visible focus states, 44px touch targets, and reduced-motion support.
- Keep colors in semantic CSS variables in `app/globals.css`.
- Use inline official brand SVGs in `components/brand-icons.tsx`; do not add an icon package for three icons.
- Use `next/image` for raster assets and preserve explicit dimensions or `fill` sizing.

## Key files

- `app/page.tsx` — profile, social cards, and favorite-games grid
- `app/globals.css` — complete visual system and responsive behavior
- `app/layout.tsx` — fonts, metadata, and Person JSON-LD
- `app/opengraph-image.tsx` — social share card

## Gotchas

- Site is dark-only by design.
- Social URLs are intentional and include a Roblox profile-share URL.
- Do not add fake activity, status, rankings, biographies, testimonials, or stats.
- Canonical host is the apex domain `klevyshi.xyz`, not `www`.
- Verify `robots.txt`, `sitemap.xml`, OG image, 404, and all external links after changes.
