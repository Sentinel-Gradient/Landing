---
name: vercel-next-seo
description: Use for Vercel and Next.js App Router production readiness, SEO optimization, metadata, structured data, sitemap, robots, caching, Core Web Vitals, accessibility, and build verification for this website.
---

# Vercel Next SEO

Use this skill when optimizing the site for Vercel deployment, SEO, performance, or launch readiness.

## Source Guidance

- Prefer official Next.js and Vercel documentation for current production guidance.
- Check existing local config before adding dependencies or services.
- Keep the site static-first unless a route truly needs runtime behavior.

## Standards

- Use App Router metadata APIs for titles, descriptions, canonical URLs, Open Graph, Twitter cards, and robots directives.
- Prefer file-based `src/app/sitemap.ts` and `src/app/robots.ts` over generated static XML files when the route list is known.
- Server-render JSON-LD directly in page HTML; do not rely on client-only scripts for structured data.
- Use `next/font`, `next/image`, route-level static rendering, and small client components.
- Add security headers in `next.config.ts` when they do not break assets or analytics.
- Avoid fake IDs, placeholder domains, or stale sitemap timestamps.

## SEO Checklist

- Each public page has a unique title, description, canonical URL, and OG image.
- Organization, WebSite, BreadcrumbList, ContactPage, and relevant page schema are present where useful.
- `robots.ts` allows public indexing and references the sitemap.
- `sitemap.ts` includes all canonical public pages and the PDF capability statement when useful.
- Public copy includes targeted terms naturally: AI and machine learning systems, computer vision, intelligent automation, applied R&D, government and commercial organizations, Charlottesville Virginia.

## Verification

Run:

```bash
npm run lint
npm run qa:contrast
npm run build
```

If local server binding is sandbox-blocked, rerun the same preview command with approval or report that preview could not be started.
