# Alligentics Website

The public marketing website for Alligentics, built with React, TanStack Start, Vite, and Tailwind CSS.

## Development

This repository uses **Bun**.

```sh
git clone <repository-url>
cd website-revitalizer
bun install
bun run dev
```

## Production build

```sh
bun run build
bun run preview
```

## Project structure

- `src/routes/index.tsx` — homepage and desktop chapter navigation
- `src/components/site-sections.tsx` — reusable homepage sections
- `src/components/marketing-page.tsx` — standalone marketing pages
- `public/` — static assets

## Content model

The homepage provides concise previews and routes visitors to dedicated pages for Capabilities, Solutions, Work, Insights, and About. Pricing remains on the homepage as a project starting-point section.

## Notes

- Contact-form delivery is intentionally not wired to a production endpoint yet.
- Prices shown on the website are starting points; final scope is confirmed during discovery.
- Accessibility and reduced-motion behavior should be checked in each production browser target.
