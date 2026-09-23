# PyCon Thailand 2027

The official website for PyCon Thailand 2027!

## Tech stack

- [Astro](https://astro.build) static-first site framework and routing
- [React](https://react.dev) interactive islands (navbar, hero, etc.)
- [Tailwind CSS](https://tailwindcss.com) utility-first styling, via the Vite plugin
- [Lenis] (https://lenis.dev) Smooth Scrolling Library.
- [Netlify](https://www.netlify.com) for Deploy
- [oxfmt](https://oxc.rs/docs/contribute/formatter) formatter + [lefthook](https://lefthook.dev) git hooks
- TypeScript

## Editor setup for Astro

`.vscode/extensions.json` recommends the [Astro extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) for `.astro` syntax highlighting, IntelliSense, and diagnostics. VS Code should prompt you to install it on opening the project.

## Project Structure

### Page Structure

- **About + Code of Conduct** (`/conduct`) The bilingual (EN/TH) code of conduct for PyCon Thailand 2027.
- **Schedule** (`/schedule`, planned) The session timeline for both the workshop and conference days, embedding the Sessionize schedule.
- **Speakers** (`/speakers`, planned) The full PyCon Thailand 2027 speaker roster, embedding the Sessionize speaker list.
- **Venue** (`/venue`) venue details and getting-there/transportation info.
- **Previous** lists previous years of PyCon Thailand editions !

### Folder Structure

```text
/
├── public/                     # static assets (favicon, etc.)
├── src/
│   ├── assets/                 # images, imported and processed by Astro/Vite
│   │   ├── common/             # shared assets (cursor, etc.)
│   │   ├── elements/creatures/ # decorative illustrations
│   │   ├── social/             # social media icons
│   │   ├── sponsor/            # sponsor logos (empty until real ones are added)
│   │   ├── team/               # team/reviewer photos (empty until real ones are added)
│   │   └── venue/              # venue and transport images
│   ├── components/
│   │   ├── conduct/            # Code of Conduct page sections
│   │   ├── landing/            # Anything on Landingpage ex. Hero
│   │   ├── pageframe/          # Navbar, Footer, PageFrame shell
│   │   ├── venue/              # Venue page sections/cards and light box
│   │   ├── Header.tsx          # shared page header (eyebrow/title/tagline)
│   │   ├── SectionNav.astro    # floating sticky section-jump sidebar (venue, conduct)
│   │
│   ├── data/                   # page copy/content
│   │   ├── conduct/            # Code of Conduct text (EN/TH)
│   │   ├── sponsor/            # Sponsors, grouped by tier
│   │   ├── team/               # Our Team + Proposal Reviewers
│   │   └── venue/              # Venue + Transportation content
│   ├── layouts/
│   │   └── Layout.astro        # base HTML document layout
│   ├── pages/                   # file-based routes
│   │   ├── index.astro          # Homepage
│   │   ├── venue.astro          # venue & getting-there
│   │   ├── conduct.astro        # code of conduct (EN/TH)
│   │   └── comingsoon.astro     # placeholder page
│   └── styles/
│       └── global.css          # Tailwind entry + design tokens + shared classes
├── astro.config.mjs
├── netlify.toml
└── package.json
```

- Interactive UI (nav, hero) is built as React components and hydrated as islands (`client:*` directives) and Everything else stays static Astro markup for speed.
- Page Content generally lives in `src/data/` rather than inline in components, so content can be edited without touching markup/layout.
- Images live under `src/assets/`, mainly as `.avif`, and are imported into data/components with a `?url` suffix (ex. `import bkkImg from '../../assets/venue/bkk.avif?url'`) rather than referenced by path.
- Astro looks for `.astro` (or `.md`) files in `src/pages/` and exposes each as a route based on its file name.

## Conventions

- **Indentation** tabs, not spaces, throughout the codebase.
- **Formatting** ([oxfmt](https://oxc.rs), config `.oxfmtrc.json`: tabs, single quotes) runs on staged js/ts/json/css/md/toml files at pre-commit. oxfmt has no parser for `.astro`/`.svg` — indent those by hand (tabs).
- **Git hooks** ([lefthook](https://lefthook.dev), config `lefthook.yml`) install automatically with `npm install`: pre-commit runs oxfmt; pre-push runs `npm run test` + `npm run audit`. Run by hand with `npx lefthook run pre-commit|pre-push`; bypass a single push with `git push --no-verify`.
- **Dependency security**: `overrides.sharp` pins the patched 0.35.4 (libvips/libheif CVEs — the version the Netlify adapter pulls via ipx is older). The pre-push audit gates at `--audit-level=critical` because the remaining highs are one chain with no upstream fix (`extract-zip` ← `@netlify/functions-dev` ← … ← `@astrojs/netlify`); npm's only suggested fix is a major downgrade of the adapter. Bump the gate back to `high` when upstream ships patches.
- **Bilingual content**: only the Code of Conduct page (at `src/data/conduct/ConductEN.tsx` / `ConductTH.tsx`) is bilingual (EN/TH). Every other page is English-only (No I18N needed). Each conduct section needs a unique `id` per language file (suffixed `-en`/`-th`), since both language versions render in the DOM at once and the floating section nav relies on those ids being unique.
- **CTA button**: only one call-to-action button is ever shown at a time — "Buy Ticket" or "Submit Proposal," not both. Set `label`/`href` once on the `ctaButton` config in `Navbar.tsx`, and both the desktop nav and mobile drawer pick it up. Currently commented out pending the real Eventpop (ticket) and Sessionize (CFP) links; the same single-button pattern is planned for the homepage hero once it gets a CTA too.
- **Team** (`src/data/team/`): `ourTeam` and `proposalReviewers` are separate arrays of the same `TeamMember` shape (name, role, background, description, required `image`). No real photos yet, so entries use a placeholder image from `src/assets/common/`... swap in real photos from `src/assets/team/` per the TODO comment in `Team.tsx`.
- **Sponsors** (`src/data/sponsor/`): `sponsors` is an array of tier groups (Headline, Python Software Foundation, Platinum, Gold, Silver, Patron, Community Partner), each holding that tier's `Sponsor` list (name, logo, link). Array order is the actual display order. Same placeholder-logo pattern as team photos until real sponsor logos are added to `src/assets/sponsor/`.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                             |
| :------------------------ | :------------------------------------------------- |
| `npm install`             | Installs dependencies                              |
| `npm run dev`             | Starts local dev server at `localhost:4321`        |
| `npm run build`           | Builds the production site to `./dist/`            |
| `npm run test`            | Type/diagnostic check (`astro check`)              |
| `npm run audit`           | Dependency audit (fails on critical+)              |
| `npm run astro ...`       | Runs CLI commands, e.g. `astro check`, `astro add` |
| `npm run astro -- --help` | Gets help using the Astro CLI                      |

Requires Node.js `>= 22.12.0`

> If `npm install` fails while building `sharp` from source, run `npm install --ignore-scripts` — the prebuilt binaries need no install script.
