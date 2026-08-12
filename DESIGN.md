# Design System — wailbox portfolio

Editorial dark portfolio on OLED black. One page, one theme, one accent.
Tokens live in `src/index.css` under `@theme`; every component consumes tokens, never raw values.

## Direction

- **Aesthetic:** editorial / kinetic-type developer portfolio (Awwwards family).
- **Dials:** `DESIGN_VARIANCE: 8` · `MOTION_INTENSITY: 7` · `VISUAL_DENSITY: 3`.
- **Theme:** dark only, locked. No light mode by explicit owner decision.

## Color

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#000000` | Page background (OLED black, owner decision) |
| `--color-surface` | `#0A0A0A` | Elevated media blocks behind images |
| `--color-line` | `rgb(255 255 255 / 0.1)` | All 1px borders and dividers |
| `--color-ink` | `#F2F2F0` | Primary text |
| `--color-dim` | `#8F8F89` | Secondary text (passes AA on black) |
| `--color-accent` | `#CDFF3D` | Volt lime, the ONLY accent |

Rules:
- Palette family: monochrome + single saturated pop. **No second accent, ever.**
- Accent appears only as: hero role highlight, primary CTA background, active nav link,
  hover states (links, arrows, email underline), selection color, scrollbar hover, blinking cursor in LangOverlay.
- No glows, no gradients, no colored shadows. Depth comes from `--color-line` borders and spacing.

## Typography

| Role | Font | Notes |
|---|---|---|
| Display + body (EN) | Space Grotesk Variable | `tracking-tight` on display sizes only |
| Display + body (AR) | IBM Plex Sans Arabic 400/500/700 | applied via `html[lang="ar"]`; **letter-spacing always 0** |
| Meta (dates, tags, labels, buttons) | JetBrains Mono Variable | continuity with the old terminal identity |

Scale:
- Hero name: `clamp(3.5rem, 13vw, 10.5rem)` EN / `clamp(3.25rem, 12vw, 9rem)` AR, `leading-[0.95]`, uppercase.
- Section headings: `text-4xl md:text-6xl font-bold` (Education steps down one size).
- Body: `text-base/lg`, `text-dim`, `max-w-[65ch]`.
- Mono meta: `text-xs` (11-12px), uppercase allowed on tags/buttons only.
- Arabic never receives negative tracking; components gate `tracking-tight` behind `!isRtl`.

## Shape & Rhythm

- **Radius 0 everywhere** (all-sharp lock). No rounded corners on any element.
- Borders: `1px` `--color-line`. No box shadows.
- Container: `max-w-[1400px] mx-auto px-6 md:px-10`.
- Section padding: `py-28 md:py-40`.
- Grid: 12 columns; asymmetric spans (7/5, offset `md:mt-24`, full-width 21/8 media).
- Every multi-column layout collapses to a single column below `md`.

## Motion

- Library: `motion` (`motion/react`). Ease token: `cubic-bezier(0.16, 1, 0.3, 1)`.
- Durations 0.6-0.9s, stagger 60-80ms.
- Vocabulary: hero mask-line reveal (load), `Reveal` whileInView (scroll), image scale 1.05 (hover),
  arrow slide-in (hover), underline scale-x (hover), LangOverlay fade (state), one CSS marquee (Skills).
- **Every animation is gated by `useReducedMotion()` or `prefers-reduced-motion` CSS.**
- Never `window.addEventListener('scroll')`; use `useScroll` / IntersectionObserver.
- Marquee budget: exactly one per page (stack logos strip).

## Z-Index Scale

| Layer | z |
|---|---|
| NavBar | 40 |
| MobileMenu | 50 |
| LangOverlay | 60 |

No other z-index values are allowed.

## Components

| Component | Layout family | Notes |
|---|---|---|
| `NavBar` | fixed bar, 64px | blur+border only after 24px scroll; active link = accent |
| `Hero` | editorial manifesto, bottom-anchored | max 4 text elements; no scroll cue |
| `Work` + `ProjectCard` | asymmetric 12-col grid (7/5 offset + full-width) | picsum placeholders until real shots arrive |
| `Experience` | sticky heading + flowing entries | descriptions always visible (no hover-reveal) |
| `Skills` + `StackMarquee` | 4-col label lists + logo marquee | real simple-icons SVGs, logos only, no captions |
| `Education` | 2-col quiet rows | smallest section on the page |
| `Footer` | giant email CTA | one contact intent on the whole page |
| `Reveal` | primitive | the only scroll-reveal wrapper; don't hand-roll variants |
| `LangOverlay` | signature interaction | black cover + target-language name + cursor, 760ms |

## Content Rules

- All user-facing text lives in `src/content/site.ts` as `{ en, ar }` pairs. No hard-coded strings in components.
- Latin-only fragments (emails, dates, tags, tech names) get `dir="ltr"` inside RTL flow.
- **Zero em-dashes (`—`) or en-dash separators in visible text.** Ranges use hyphens (`2010 - 2014`).
- Eyebrow labels above section headings: banned (headings carry the section alone). Mono labels inside grids (skill groups) are data labels, not eyebrows.
- No section numbering, no scroll cues, no decorative dots, no locale/time strips.
- CTAs: one label per intent. "Email me" (hero) and the footer email link share the contact intent deliberately; "View work" appears once.

## RTL

- `useLang` flips `document.documentElement.lang/dir`; choice persists in `localStorage`.
- Use logical utilities (`ms-`, `pe-`, `text-start`) and `rtl:-scale-x-100` on directional arrows.
- Marquee track reverses direction under RTL (`html[dir='rtl'] .marquee-track`).
