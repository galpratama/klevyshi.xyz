# Production audit

## Critical and SEO

- [x] `robots.ts`
- [x] `sitemap.ts`
- [x] generated Open Graph image
- [x] custom 404
- [x] runtime error boundary
- [x] Person JSON-LD
- [x] favicon and apple touch icon
- [x] canonical URL and social metadata

## Accessibility

- [x] skip-to-content link
- [x] semantic landmarks and headings
- [x] descriptive image alt text
- [x] visible keyboard focus
- [x] 44px minimum interactive targets
- [x] reduced-motion fallback
- [x] external-link labels and safe `rel` values

## UX and performance

- [x] mobile, tablet, and desktop layouts
- [x] responsive optimized images
- [x] no unnecessary client JavaScript on the homepage
- [x] CSS-only entrance and hover motion
- [x] no fake profile information
- [x] verify `npm run lint`
- [x] verify `npm run build`
- [x] verify local HTTP 200 and route assets
- [x] verify production deployment, domain, DNS, and SSL
- [x] run live browser visual QA at desktop and mobile sizes

## Production evidence

- GitHub and Vercel are connected for automatic production deploys.
- Apex and `www` resolve to Vercel at `76.76.21.21`.
- Valid Let's Encrypt certificates are active for both hosts.
- `www` permanently redirects to the apex canonical domain.
- The Vercel deployment for the production commit completed successfully.
- Datacenter/headless probes may receive Vercel Security Checkpoint code 29; local browser QA and the authenticated deployment pipeline passed.
