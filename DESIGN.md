# Design System — wailbox portfolio

Editorial portfolio, dual-theme (OLED-black base + paper light), one accent family.
Tokens live in `src/index.css` under `@theme` (+ the `html[data-theme='light']` override block); every component consumes tokens, never raw values.
Source of truth for the layout itself: the Claude Design canvas "Portfolio website UI mockups" and the synced "Wailbox Design System" project.

## Direction

- **Aesthetic:** editorial / kinetic-type developer portfolio (Awwwards family).
- **Dials:** `DESIGN_VARIANCE: 8` · `MOTION_INTENSITY: 7` · `VISUAL_DENSITY: 3`.
- **Themes:** dark is the brand default; light is a full first-class palette behind the nav toggle. Choice persists in localStorage.

## Color

| Token | Dark | Light | Use |
|---|---|---|---|
| `--color-bg` | `#000000` (OLED) | `#F4F4F1` (paper) | page background |
| `--color-surface` | `#0A0A0A` | `#FFFFFF` | media blocks, code blocks |
| `--color-line` | `white/10%` | `black/12%` | all 1px borders and dividers |
| `--color-ink` | `#F2F2F0` | `#161613` | primary text |
| `--color-dim` | `#8F8F89` | `#6B6B64` | secondary text |
| `--color-body` | `#C9C9C4` | `#3D3D38` | article body copy |
| `--color-accent` | `#CDFF3D` | `#CDFF3D` | **fills only**: primary CTA, filter chips, selection, cursor |
| `--color-accent-ink` | `#CDFF3D` | `#567300` (olive) | **accent text**: hero highlight, active nav, hovers, tutorial labels |
| `--color-nav` | `black/80%` | `#F4F4F1/85%` | stuck-nav backdrop |
| `--ph-a/b/c` | `#101010/#1C1C1A/#0A0A0A` | `#E9E9E5/#DDDCD6/#EFEFEC` | `.ph-media` placeholder gradient |

Rules:
- **Fill vs text:** volt is kept as a fill in both themes (black text on it). Volt *text* fails contrast on paper, so accent text always goes through `--color-accent-ink`. Never color text with `text-accent`.
- No second accent, no gradients (placeholder media excepted), no glows, no shadows. Depth = 1px lines + space.

## Typography

Unchanged roles: Space Grotesk Variable (EN display+body), IBM Plex Sans Arabic 400/500/700 (AR, letter-spacing always 0), JetBrains Mono Variable (meta, dates, tags, buttons, labels).

Additions for articles: h1 `text-4xl md:text-6xl leading-[1.05]`; article body `17px leading-loose text-body max-w-65ch`; in-article h2 `text-2xl md:text-3xl`; code blocks mono 13px on `--color-surface`, always `dir="ltr"`.

## Shape & Rhythm

- Radius 0 everywhere, 1px `--color-line` borders, no shadows.
- Container `max-w-[1400px] px-6 md:px-10`; article column `max-w-[860px]`.
- Section padding `py-28 md:py-40`; sections after Work carry `border-t border-line`.
- Everything collapses to a single column below `md`.

## Page Map (post-mockup redesign)

Routing: `react-router-dom` (BrowserRouter). Routes: `/`, `/writing`, `/writing/:slug`.
Deployment note: the server must rewrite unknown paths to `index.html`.

**Home (`/`):** Hero → StackMarquee (directly under hero) → Selected Work → Experience → Skills → Writing teaser → Footer.
**Writing (`/writing`):** h1 + intro + filter chips (All / Tutorials / Notes, volt fill on active) + full post rows.
**Article (`/writing/:slug`):** back link, meta row (type/date/read-min), h1, excerpt, tags, 21/9 cover placeholder, body blocks (`p / h2 / code / quote`), prev/next grid.

Removed: Education section (dropped in the mockups).

## Components

| Component | Layout family | Notes |
|---|---|---|
| `NavBar` | fixed 64px | Work / Experience / Writing / Contact + lang + theme toggle (label = target theme) |
| `Hero` | editorial manifesto | unchanged |
| `StackMarquee` | full-bleed logo strip | sits between hero and Work; still the only marquee |
| `Work` + `ProjectCard` | 12-col grid, slots: 7 / 5+120px offset / 12 wide / 6 / 6 | 5 cards incl. 2 writing-project placeholders; `.ph-media` gradient until real shots |
| `Experience` | sticky heading + rows (`1fr/2fr`) | placeholder rows render title at `text-ink/45` |
| `Skills` | label rows `200px/1fr` + tag chips | replaces the old 4-column lists |
| `WritingSection` | rows `180px/1fr/110px` | 3 latest posts + "All posts ↗" |
| `WritingPage` | filterable rows | date+type / title+excerpt / read-min ↗ |
| `ArticlePage` | centered 860px article | block renderer; quote = `border-s-2 border-accent-ink` |
| `Footer` | giant email CTA | on every route |
| `Reveal` / `LangOverlay` | primitives | unchanged |

## Content Rules

- All user-facing text in `src/content/site.ts` and `src/content/posts.ts` as `{ en, ar }` pairs.
- Posts: `slug, date, type (tutorial|note), title, excerpt, readMin, tags, coverLabel, body[]`. Body blocks: `p`, `h2`, `code` (LTR string), `quote`.
- Zero em-dashes in visible text. No eyebrows, no section numbering, no scroll cues, no decorative dots.
- Latin fragments inside RTL flow get `dir="ltr"`; directional arrows get `rtl:-scale-x-100`.

## Motion

Unchanged tokens (ease `cubic-bezier(0.16,1,0.3,1)`, 0.6-0.9s, stagger 60-80ms), everything behind `useReducedMotion()` / CSS reduced-motion. Theme switch animates body background/color 0.3s (gated). One marquee max.

## Z-Index Scale

NavBar 40 · MobileMenu 50 · LangOverlay 60. Nothing else.
