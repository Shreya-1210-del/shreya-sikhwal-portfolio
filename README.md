# Shreya Sikhwal — Portfolio

A personal portfolio site for Shreya Sikhwal, a CS & Business Systems undergraduate specializing in data analytics and data science (SQL, Python, Streamlit, Tableau, Power BI).

## Role classification

- **Primary track:** Data Scientist / Analytics (entry-level, internship-seeking)
- **Reasoning:** The resume and LinkedIn profile are strongest in SQL analytics (window functions, CTEs across million-row datasets), exploratory data analysis, and multi-tool dashboard delivery (Streamlit, Tableau, Power BI) — the core signal is "insight from data," not systems engineering, model deployment, or infrastructure. Content and design are tuned accordingly: visual, metric-forward, and analytical rather than terminal/systems-styled.

## Design direction

- **Palette:** ink navy (`#0A0E14`) base with three data-encoding accents — cyan (`#4FD1E5`), amber (`#F4A340`), coral (`#F0665C`) — one per featured project, used the way a chart legend would.
- **Type:** Space Grotesk (display), JetBrains Mono (data/labels), Inter (body).
- **Signature element:** an animated sparkline in the hero built from the three flagship datasets, doubling as quick navigation into each case study.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com/)
- No external UI libraries, no environment variables, no CMS — all content lives in `lib/data.ts`.

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

## Production build

```bash
npm run build
npm run start
```

## Editing content

All copy — name, tagline, projects, experience, skills, achievements, and contact links — lives in a single file: `lib/data.ts`. Update it there and every section re-renders automatically.

## Notes

- Dark theme by default (`class="dark"` on `<html>`); the design is built as a single considered dark palette rather than a light/dark toggle, in line with the analytical/dashboard direction.
- Fonts load via Google Fonts `<link>` tags in `app/layout.tsx` (not `next/font`), so builds never depend on network access to Google's font API — only the browser needs it at runtime, with system-font fallbacks defined in `globals.css`.
- No phone number is published on the public site; email and LinkedIn are the primary contact channels.
