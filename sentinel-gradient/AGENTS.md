# Sentinel Gradient Website Agent Guide

## Project

Sentinel Gradient LLC is a Virginia-based AI and machine learning research company. The website must present a professional, research-oriented public presence for government and commercial partners.

Use current company facts from `public/documents/sentinel-gradient-capability-statement.pdf` before changing company data, differentiators, NAICS codes, contact details, or past performance.

## Repo Layout

- `src/app`: Next.js App Router pages, layout, metadata routes, and global CSS.
- `src/components`: reusable UI, forms, and structured-data components.
- `src/lib`: shared helpers for SEO, analytics, constants, and class merging.
- `public`: static assets, OG images, icons, team photos, and PDF documents.
- `scripts`: local verification scripts.
- `.agents/skills`: repo-scoped Codex skills for repeatable workflows.

## Skills

Use these repo skills when the task matches:

- `$sentinel-brand-website`: Sentinel Gradient brand, content, UX, frontend redesign, page structure, and capability-statement alignment.
- `$vercel-next-seo`: Vercel deployment readiness, Next.js App Router performance, metadata, structured data, sitemap, robots, and SEO verification.

## Design Rules

- Follow `design_guidelines.md` for brand colors, typography, layout, voice, and accessibility.
- Preserve the research-oriented, formal, precise voice. Avoid hype language.
- Use Playfair Display for major headings and Montserrat for body text.
- Use the brand gradient `#25678A -> #1F97C1` as an accent, not as a dominant one-note theme.
- Keep pages usable first: clear navigation, visible CTAs, scannable sections, responsive layout, and keyboard-accessible controls.
- Build distinctive interfaces through layout, rhythm, information architecture, and lightweight CSS. Do not add heavy component libraries unless there is a clear production reason.

## Next.js And Vercel Standards

- Prefer Server Components. Mark components with `"use client"` only for real browser interactivity.
- Use App Router metadata APIs, file-based `robots.ts` and `sitemap.ts`, and server-rendered JSON-LD for SEO.
- Keep the site statically renderable wherever possible. Avoid unnecessary runtime functions.
- Use `next/font`, `next/image`, and native `<Link>` for performance.
- Do not hardcode fake analytics IDs. Load analytics only from environment variables or Vercel-provided tooling.
- Keep lockfiles committed and avoid dependency churn.

## Verification

Run the relevant checks before handoff:

- `npm run lint`
- `npm run qa:contrast`
- `npm run build`

There is currently no `npm run test` script. Do not claim tests passed unless a test script is added and run.

## Content Safety

- Do not include “pending final registration” or similar tentative registration language.
- Do not invent contract vehicles, certifications, customers, or awards.
- Do not publish private personal details beyond what is already present in the public capability statement.
- If the PDF and website conflict, treat the PDF as the source of truth and note the discrepancy.
