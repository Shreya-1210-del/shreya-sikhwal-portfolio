# Shreya Sikhwal — Portfolio

![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

> I turn spreadsheets nobody wants to open into decisions someone has to make.

Personal portfolio of **Shreya Sikhwal** — a CS & Business Systems undergraduate building data pipelines, dashboards, and decision-ready insight from real-world datasets (SQL, Python, Streamlit, Tableau, Power BI).

**Case studies covered:** a 1.26M-row banking risk analysis, a 190-country global education inequality dashboard, and an 8,000-title Netflix content analytics pipeline.

---

## Table of contents

- [Role & design direction](#role--design-direction)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Local setup](#local-setup)
- [Editing content](#editing-content)
- [Notes](#notes)
- [License](#license)

## Role & design direction

- **Track:** Data Scientist / Analytics (entry-level, internship-seeking).
- **Why:** the underlying resume and LinkedIn content is strongest in SQL analytics (window functions, CTEs over million-row datasets), exploratory data analysis, and multi-tool dashboard delivery — the core signal is "insight from data," so the site is built visual and metric-forward rather than systems/infra-styled.
- **Palette:** ink navy (`#0A0E14`) base with three data-encoding accents — cyan `#4FD1E5`, amber `#F4A340`, coral `#F0665C` — one per featured project, used the way a chart legend would.
- **Type:** Space Grotesk (display), JetBrains Mono (data/labels), Inter (body).
- **Signature element:** an animated sparkline in the hero, built from the three flagship datasets, doubling as quick navigation into each case study.

## Tech stack

- [Next.js 14](https://nextjs.org/) — App Router, TypeScript
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling, custom design tokens
- No external UI kits, no CMS, no environment variables — all content lives in one typed file

## Project structure

```
shreya-portfolio/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx           # Section assembly
│   └── globals.css        # Design tokens & base styles
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx            # Signature sparkline + intro
│   ├── About.tsx
│   ├── Projects.tsx        # 3 featured case studies
│   ├── Experience.tsx
│   ├── Skills.tsx          # Toolkit + achievements
│   ├── Contact.tsx
│   └── Reveal.tsx          # Scroll-reveal wrapper
├── lib/
│   └── data.ts             # All resume/LinkedIn content, structured
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## Local setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Production build:**

```bash
npm run build
npm run start
```

## Editing content

All copy — name, tagline, projects, experience, skills, achievements, and contact links — lives in a single file: `lib/data.ts`. Update it there and every section re-renders automatically. No other file needs to change to update content.

## Notes

- Dark theme by default (`class="dark"` on `<html>`) — built as one considered dark palette rather than a light/dark toggle, in line with the analytical/dashboard direction.
- Fonts load via Google Fonts `<link>` tags in `app/layout.tsx` (not `next/font`), so builds never depend on network access to Google's font API at build time — only the browser needs it at runtime, with system-font fallbacks defined in `globals.css`.
- No phone number is published on the public site; email and LinkedIn are the primary contact channels.
- Fully responsive, keyboard-focus visible, and respects `prefers-reduced-motion`.

## License

MIT — feel free to fork the structure for your own portfolio; please swap out the content in `lib/data.ts` first.
