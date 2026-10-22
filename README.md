# CIMAR — home page

Next.js 16 (App Router, Turbopack) · TypeScript · Tailwind CSS v4 (`@tailwindcss/postcss`).
Built from the Figma frame `OP2` (file `5TRgF9BkLMmtThzyt7NjRI`, node `47:9835`, 1728px canvas).

```bash
npm run dev     # local development
npm run build   # production build
npm run start   # serve the production build
npm run lint
```

## Where things live

| Path | Contents |
| --- | --- |
| `src/app/page.tsx` | Composes the sections, nothing else |
| `src/app/layout.tsx` | Outfit font, skip link, header/footer, page wrapper |
| `src/app/globals.css` | Design tokens in `@theme` (colours, fluid type scale, radii, container) |
| `src/data/site.ts` | All copy, image paths and link destinations |
| `src/components/sections/` | One component per page section |
| `src/components/layout/` | Header (dropdown nav, mobile menu dialog), footer, newsletter form |
| `src/components/ui/` | `AppLink`, CTA, logo, eyebrow, icons, carousel button |
| `src/hooks/useSnapCarousel.ts` | Prev/next + loop for native scroll-snap tracks |
| `src/lib/fluid.ts` | `fl(px, min)` → `clamp(min, px/1728·100vw, px)` |

## Conventions

- **Desktop-first.** Default classes target the 1728px canvas; `max-xl:` / `max-lg:` / `max-md:` / `max-sm:` override downward.
- **Fluid sizes.** Every design length is `clamp(<floor>, <figmaPx ÷ 17.28>vw, <figmaPx>)`, so 1728px is pixel-exact and smaller desktops scale proportionally. The hero artwork uses container-query units (`cqw`) instead.
- **Copy** is stored in sentence case; Figma's Title Case styles are applied with CSS `capitalize`.

## Links are inert until pages exist

`src/components/ui/AppLink.tsx` exports `PAGES_LIVE = false`. While it's false, every link except in-page anchors (`#…`) and `/` renders as `<a role="link" aria-disabled="true" tabIndex={0}>` with no `href` — this includes social links, the search form and the footer credit. The real destinations stay in `src/data/site.ts`; set the flag to `true` to switch them all on.

## Placeholders to replace

- Newsletter form: validation and status are wired up; the submit is a `TODO` in `NewsletterForm.tsx`.
- Dropdown menu items, training programmes and the treatment list are placeholders (not in the design).
- Directors' paragraph is lorem ipsum; all three location descriptions repeat the Edappal copy; the news carousel repeats one article.
