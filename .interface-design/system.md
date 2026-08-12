# wailbox portfolio — interface design system

Full spec lives in `DESIGN.md` (authoritative). This file is the quick-reference for design sessions.

## Direction and feel

Editorial developer portfolio, typography-led. Dark is the brand default (OLED black `#000000`); light is a full paper palette (`#F4F4F1`) behind the nav toggle. Feels: sharp, technical, quiet confidence. Awwwards family, not SaaS.

## Depth strategy

**Borders-only.** 1px `--color-line` (white/10 dark, black/12 light). No shadows, no gradients (`.ph-media` placeholder excepted), no glows. Elevation = `--color-surface` step + border.

## Spacing

Base unit 4px (Tailwind). Density: airy (VISUAL_DENSITY 3). Section padding `py-28 md:py-40`. Container `max-w-[1400px] px-6 md:px-10`; article column `max-w-[860px]`. Grid 12 col, `gap-x-6`.

## Hierarchy

- Focal per view: home = the name (clamp 3.5-10.5rem); writing = post titles; article = h1.
- Levers: size + weight + color (ink/dim/body 3-tier text). Mono labels 10-12px uppercase tracked.
- Type: Space Grotesk Variable (display+body EN, tracking-tight on display only), IBM Plex Sans Arabic (AR, letter-spacing 0 always), JetBrains Mono Variable (meta/dates/tags/buttons — inherently tabular).

## Color rule (the one that bites)

`--color-accent` (volt `#CDFF3D`) = FILLS only (CTA bg, filter active, selection, cursor).
`--color-accent-ink` = accent TEXT (volt on dark, olive `#567300` on light). Never `text-accent`.

## Key component patterns

- Button primary — mono 11px uppercase 700 · `px-7 py-4` · bg-accent text-black · hover brightness-110 · active scale-.98
- Button ghost — same metrics · border-line text-ink · hover border/text accent-ink
- Nav — fixed 64px, `bg-nav` + blur only after 24px scroll; active link accent-ink
- Tag chip — mono 11px uppercase dim · border-line · `px-2.5 py-1` · always `dir="ltr"`
- List row (writing/skills) — grid `[180-200px_1fr_(110px)]` · border-t per row, border-b on last
- Project card — `.ph-media` gradient placeholder + title + arrow (slides in on hover, accent-ink)
- Radius 0 everywhere. Hit areas ≥40px. Focus: 2px accent-ink outline, offset 2.

## Motion

Ease `cubic-bezier(0.16,1,0.3,1)`, durations 0.3-0.9s, stagger 60-80ms, one marquee max, everything gated by reduced-motion. Signature: LangOverlay (black cover + target-language name + blinking cursor, 760ms).

## RTL

First-class. Logical utilities only (`ps/pe/ms/me/text-start`), `rtl:-scale-x-100` on directional icons, `dir="ltr"` on Latin fragments (tags, emails, code), localized dates need no dir override.
