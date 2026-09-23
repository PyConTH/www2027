# AGENTS.md

The documentation in this repo is the code itself. This file is only an **index**: each row names an **exemplar** — the file that best demonstrates one pattern. Read the exemplar before writing similar code, and copy the exemplar instead of inventing a second way.

Stack: Astro (static-first, file-based routes) + React islands (`client:*`) + Tailwind 4 via the Vite plugin, deployed on Netlify (`netlify.toml`). Folder map, commands, and content conventions: [README.md](README.md).

Ground rules: tabs, not spaces. Lefthook gates commits and pushes — oxfmt on pre-commit, `astro check` + `npm audit` on pre-push — so they run without manual steps; run them by hand with `npx lefthook run <hook>`. oxfmt has no `.astro` parser: indent `.astro` files by hand (tabs).

## Pattern index

| Pattern                                                  | Exemplar                                                                    |
| -------------------------------------------------------- | --------------------------------------------------------------------------- |
| Adding a page (route, Layout, PageFrame, data wiring)    | `src/pages/venue.astro`                                                     |
| Minimal placeholder page                                 | `src/pages/comingsoon.astro`                                                |
| Page shell: Navbar + Footer + Lenis smooth scroll        | `src/components/pageframe/PageFrame.tsx`                                    |
| Navbar, mobile drawer, the single-CTA-button config      | `src/components/pageframe/Navbar.tsx`                                       |
| Shared page header (eyebrow / title / tagline)           | `src/components/Header.tsx`                                                 |
| Base document: head, SEO/OG tags, font loading           | `src/layouts/Layout.astro`                                                  |
| Content as data: types + copy kept out of markup         | `src/data/venue/Transportation.tsx` (shared types in sibling `types.ts`)    |
| Images: `.avif` imported with `?url`, paired `src`/`alt` | `src/data/venue/Transportation.tsx`                                         |
| Click-to-zoom lightbox (`data-lightbox` attribute)       | `src/components/venue/Lightbox.astro`                                       |
| Sticky section-jump sidebar                              | `src/components/SectionNav.astro`                                           |
| Bilingual EN/TH content, per-language unique section ids | `src/data/conduct/ConductEN.tsx` + `ConductTH.tsx`                          |
| Array order = display order (sponsor tiers, team lists)  | `src/data/sponsor/Sponsor.tsx`, `src/data/team/Team.tsx`                    |
| Design tokens: fonts, colors, animations (`@theme`)      | `src/styles/global.css`                                                     |
| Decorative creature/element SVGs                         | `src/assets/elements/creatures/`                                            |
| Interactive island vs static markup                      | `client:load` in `src/pages/venue.astro`; `src/components/landing/Hero.tsx` |
| Commit/push gates + formatter config                     | `lefthook.yml`, `.oxfmtrc.json`                                             |
| Fixing npm audit findings (overrides, upgrades)          | `.agents/skills/npm-audit-fix/SKILL.md`                                     |

## Keeping this index honest

Code is the living documentation; this file is only the map. A pattern earns a row when the next agent should copy the exemplar rather than rediscover it. Details live in the exemplar (as comments in the code), never in this file.

- Introduced a new pattern? Add a row pointing at the file that demonstrates it, in the same change.
- Renamed, moved, or deleted code? Fix every row your change breaks, in the same change.
- Hit a row that is stale or wrong? Fix it before moving on.
- If this file contradicts the code or README, the code wins — update this file.
