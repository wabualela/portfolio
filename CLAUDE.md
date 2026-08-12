# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Bilingual (EN/AR) portfolio for a PHP/Moodle developer. React 19 + TypeScript + Vite + Tailwind v4 + Motion, single page, editorial dark design on OLED black. The design system is documented in `DESIGN.md` — read it before changing any visual code; it defines the tokens, type scale, motion rules, and hard constraints (single accent, radius 0, no em-dashes, reduced-motion gating).

## Commands

- `npm run dev` — dev server (Vite, port 3000, host 0.0.0.0)
- `npm run build` — production build
- `npm run preview` — preview the production build
- `npx tsc --noEmit` — type-check (strict mode is on)

No test runner or linter is configured. npm is the package manager (single `package-lock.json`).

## Architecture

Source lives in `src/` (path alias `@/` → `src/`). Multi-page SPA via `react-router-dom` (BrowserRouter): `/` (Home), `/writing`, `/writing/:slug`. Deployment needs an SPA fallback rewrite to `index.html`.

- `src/content/site.ts` — ALL user-facing text as `{ en, ar }` `Localized` pairs, plus data (projects, experience, skill groups). `src/content/posts.ts` — writing posts (type `tutorial|note`, body as `p/h2/code/quote` blocks). New UI text goes in these files in both languages, never hard-coded in components. Project/post data is placeholder until real content arrives (TODO comments; media are `.ph-media` gradient placeholders, no external images).
- `src/lib/useLang.tsx` — language context: `t()` resolver, `toggle()` with timed overlay swap, flips `document.documentElement.lang/dir`, persists to localStorage. Reduced-motion users get an instant swap.
- `src/lib/useTheme.tsx` — dark/light theme context; sets `data-theme` on `<html>`, persists to localStorage. Dark is default.
- `src/index.css` — Tailwind v4 entry: font imports (@fontsource, self-hosted), `@theme` design tokens, the `html[data-theme='light']` token override block, Arabic letter-spacing guard, `.ph-media` gradient, the single marquee keyframes. **Accent rule:** `--color-accent` (volt) is for FILLS only; accent-colored TEXT must use `--color-accent-ink` (volt on dark, olive on light).
- `src/components/` — sections (`Hero`, `StackMarquee`, `Work`, `Experience`, `Skills`, `WritingSection`, `Footer`), primitives (`Reveal` — the only scroll-reveal wrapper), chrome (`NavBar`, `MobileMenu`), `LangOverlay`. `src/pages/` — `Home`, `WritingPage`, `ArticlePage`.
- `src/App.tsx` assembles providers, routes, and the shared chrome.

## Constraints that bite

- **RTL is first-class**: components gate `tracking-tight` behind `!isRtl`, Latin fragments inside Arabic flow need `dir="ltr"`, directional icons need `rtl:-scale-x-100`. Test both languages after layout changes.
- **Motion**: everything animated goes through `motion/react` and must respect `useReducedMotion()` (or `prefers-reduced-motion` CSS for the marquee). Never `window.addEventListener('scroll')` with React state.
- **simple-icons must be imported by name** (`import { siPhp } from 'simple-icons'`) — a namespace import balloons the bundle from ~370KB to 5.6MB.
- **Icons**: `@phosphor-icons/react` only, one family.
- Grid children: `col-span` classes must sit on the direct child of the `grid` element (watch out for wrapper components like `MaskLine`/`Reveal` — they take a `className` prop for this).

## Testing tip

Browser-automation tabs opened in a background window freeze Motion animations (rAF paused, content stuck at `initial`) — bring the Chrome window to front, or use `agent-browser` headless with `set viewport` for responsive checks.
