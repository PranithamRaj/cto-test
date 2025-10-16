# Artisan Lab Landing (Next.js)

Artisan Lab is a Next.js 14 project that powers the landing page experience for the coaching collective. The project is built with the App Router, TypeScript, Tailwind CSS, and a curated set of shared UI primitives to accelerate page construction.

## Tech stack

- [Next.js 14](https://nextjs.org/) with the App Router
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) & PostCSS toolchain

## Getting started

```bash
npm install
npm run dev
```

The development server runs on [http://localhost:3000](http://localhost:3000). Edits inside `src/` support hot module replacement.

## Project structure

```
/home/engine/project
├── public/
│   ├── logo.svg                 # Placeholder brand mark
│   └── images/
│       └── placeholders/        # Base imagery for rapid exploration
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Global metadata, fonts, layout shell
│   │   ├── page.tsx             # Starter landing experience
│   │   └── globals.css          # Tailwind layer imports & base tokens
│   ├── components/              # Shared UI primitives for the landing page
│   └── lib/                     # Reusable utilities (e.g. class name helper)
├── tailwind.config.ts           # Theme tokens (palette, spacing, fonts)
└── postcss.config.js            # Tailwind & Autoprefixer configuration
```

## Styling primitives

Design tokens live inside `tailwind.config.ts` and `globals.css`:

- **Primary palette:** Forest greens (`#207052`, `#17503b`) with warm sand neutrals
- **CTA accent:** Orange (`#f97316`) for prompts and highlight states
- **Spacing scale:** Extended Tailwind spacing keys (`3.5`, `4.5`, `18`, `22`, `26`, `30`) for tighter control
- **Typography:** Google Inter & Sora fonts exposed as CSS variables for Tailwind font families

Global styles also enable smooth scrolling and set the background gradient for the site chrome.

## UI primitives

Reusable building blocks for the landing page live in `src/components/`:

- `Container` – Constrains content width with responsive padding
- `Section` – Handles vertical rhythm, optional edge-to-edge rows, and container overrides
- `Heading` – Semantic typography with optional eyebrow label and alignment control
- `Button` – Variant & size aware button with optional `asChild` support for links
- `VideoEmbed` – Aspect-ratio aware wrapper for Vimeo/YouTube players
- `TypeformEmbed` – Inline Typeform iframe with sensible defaults

These primitives are designed for composability inside the App Router and adhere to the Tailwind token system defined for the project.

## Smooth scrolling

The global stylesheet applies `scroll-behavior: smooth;` to the `<html>` element so anchor links across the landing page glide between sections without additional JavaScript.
