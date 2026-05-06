---
name: sentinel-brand-website
description: Use for Sentinel Gradient website work involving brand voice, page copy, frontend redesign, UX flow, capability statement alignment, government/commercial audience messaging, or visual consistency with design_guidelines.md.
---

# Sentinel Brand Website

Use this skill when editing the Sentinel Gradient website experience, copy, or visual presentation.

## Required Sources

1. Read `design_guidelines.md` before changing visual design, typography, colors, spacing, or voice.
2. Read or extract `public/documents/sentinel-gradient-capability-statement.pdf` before changing company data, differentiators, core competencies, NAICS, contact details, or past performance.
3. Inspect the relevant `src/app/**/page.tsx`, `src/components/**`, and `src/app/globals.css` files before editing.

## Brand Position

- Sentinel Gradient LLC develops advanced AI and machine learning systems for government and commercial organizations.
- Core themes: applied AI, machine learning, computer vision, sensor intelligence, intelligent automation, NLP, autonomous systems, decision algorithms, data engineering, applied R&D, model optimization/testing/deployment, decision support.
- Differentiators: real-world assistive technology AI experience, computer vision and intelligent automation expertise, agile small business collaboration, practical measurable value.
- Verified company data from the PDF includes active SAM registration, UEI `LZQMAV479P59`, CAGE `178C5`, NAICS `541511`, `541512`, `541715`, and Charlottesville, Virginia location.

## UX Direction

- Make the first viewport immediately explain what the company does, who it helps, and where to go next.
- Prefer a guided journey: problem, capabilities, proof, contracting readiness, contact.
- Keep interactions lightweight and static-first unless client-side behavior clearly improves the user workflow.
- Use cards for repeated items and forms, but avoid nesting cards or turning every section into a card.
- Add visual interest through data-grid motifs, measured gradients, section rhythm, proof metrics, timelines, and precise microcopy.

## Copy Rules

- Use formal, research-oriented language.
- Prefer concrete verbs: develop, evaluate, build, optimize, validate, deploy.
- Avoid hype words such as revolutionary, disruptive, magical, world-class, or cutting-edge unless quoting a source.
- Do not invent claims. If a claim is not in the PDF or repo, phrase it as a capability, not past performance.

## Done Criteria

- Content matches the capability statement and has no tentative registration language.
- Layout is responsive at 320px, 768px, 1024px, and 1440px.
- Interactive elements have clear labels, focus styles, and accessible names.
- `npm run lint`, `npm run qa:contrast`, and `npm run build` pass.
