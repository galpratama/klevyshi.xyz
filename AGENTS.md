# AGENTS.md

## Product

A personal one-page site for Klevyshi. Its job is to express a recognizable midnight-violet gaming identity and direct visitors to Instagram, TikTok, and Roblox.

## Audience and language

- Friends, gaming contacts, and social visitors.
- Public copy is concise English with normal capitalization.
- Never invent personal facts. Only use details explicitly supplied by the owner or visible in the profile reference.

## Required design direction

- Near-black indigo background, electric violet primary accent, restrained cyan highlights.
- Pixel/cyber details, twilight atmosphere, tactile profile-card layout.
- Original UI only; do not recreate Discord's interface.
- Avoid generic SaaS sections, stock illustrations, pricing, lead capture, testimonials, and fake counters.

## Technical rules

- Next.js App Router and TypeScript strict mode.
- Tailwind v4 is CSS-first. There is no Tailwind config file.
- Default to server components and CSS motion.
- Preserve keyboard navigation, focus visibility, contrast, responsive layouts, and reduced motion.
- All social links must use `target="_blank" rel="noopener noreferrer"`.
- The canonical domain is `https://klevyshi.xyz`.

## Page order

1. Compact brand header
2. Profile identity card and hero copy
3. Social links
4. Favorite games grid
5. Minimal footer

## Deployment

Production is deployed on Vercel from GitHub. Validate lint, build, local HTTP 200, static assets, and live HTTPS after every deploy.
