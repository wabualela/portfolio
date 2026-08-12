# Design Prompts — wailbox portfolio

Seven reusable AI prompts, pre-filled for this project. Paste one into any AI chat and fill only the remaining `[brackets]` (per-use input). Project facts baked in come from `DESIGN.md`, `CLAUDE.md`, and `src/content/site.ts` — update here if those change.

---

## 1. User Persona Generator

> You are a senior UX researcher. Generate a detailed user persona for the following product:
>
> Product: wailbox.com — a bilingual (English/Arabic) single-page portfolio for Wail Abualela, a senior PHP/Moodle engineer in Riyadh who builds e-learning platforms (Moodle, Laravel) for universities and education organizations.
>
> Target segment: hiring managers, tech leads, and recruiters at Saudi/GCC ed-tech companies and universities, plus organizations seeking a Moodle contractor. Many are Arabic-first readers; all are time-poor and scan rather than read.
>
> Core user goal: decide within 60 seconds whether Wail is credible for a senior Moodle/Laravel role or project, and find one obvious way to contact him.
>
> Key pain point: developer portfolios that bury real evidence (scale, production systems, named clients) under visual noise and vague copy.
>
> One assumption my team holds about this user that may be wrong: visitors will scroll the full page rather than judging from the hero alone.
>
> Format the persona with: Name, Age, Occupation, Quote, Goals (3), Frustrations (3), Behaviors (3), and a "What this means for design" section of 2-3 sentences. Generate one Arabic-first persona and one English-first persona.
>
> Before writing, ask me any clarifying questions that would meaningfully change the persona content.

---

## 2. UX Writing for All Component States

> You are a UX writer specialising in developer portfolios and personal brand sites. Write copy for every meaningful state of this UI component:
>
> Component: [component name, e.g. "language switch button (LangOverlay)", "footer email CTA", "project card link"]
>
> Product: wailbox.com, the bilingual portfolio of Wail Abualela, senior PHP/Moodle engineer.
>
> Brand voice: confident, direct, editorial. Short declarative sentences. Technical nouns stay concrete (Moodle, Laravel, Nginx), never vague ("solutions", "passionate").
>
> Anti-voice: never corporate, never cutesy, never salesy. No exclamation marks. No em-dashes or en-dashes in any visible text (hard project rule; ranges use hyphens).
>
> User reading level: technical recruiters and engineering leads; assume familiarity with web/e-learning terms.
>
> States to cover: default, hover, loading, success, error (recoverable), error (fatal), empty, disabled. Skip states the component genuinely cannot have, and say why.
>
> For each state: provide the copy in **both English and Arabic** (the site stores every string as an `{ en, ar }` pair — the Arabic must be a natural rewrite, not a literal translation, with Latin-only fragments like emails and tech names kept in Latin script), a one-line rationale, and an alternative version I could A/B test.

---

## 3. Design Critique and Devil's Advocate

> You are a critical design reviewer with a strong opinion. Your job is not to validate — it is to find problems. I am going to describe a design decision I have made for wailbox.com, a bilingual editorial-dark developer portfolio:
>
> [describe your design decision — current standing decisions worth attacking: pure OLED-black background with dark theme only and no light mode; a single volt-lime accent (#CDFF3D) with zero other color; radius 0 on every element with no shadows; a giant footer email link as the page's only contact mechanism; a 760ms full-screen black overlay on every language switch]
>
> I want you to:
> 1. Identify the top three assumptions this decision relies on
> 2. Argue against the decision as a sceptical stakeholder would — specifically a recruiter on a mid-range office monitor in a bright room, and an Arabic-first visitor
> 3. Name one alternative approach and explain its trade-offs
> 4. Give me the one question I should be able to answer confidently before I commit to this direction
>
> Do not soften your critique. I want the hardest version of the counter-argument, not a balanced view.

---

## 4. Accessibility Audit of a Component

> You are an accessibility specialist with deep knowledge of WCAG 2.2. I am going to describe a UI component from wailbox.com, a single-page bilingual (English/Arabic, LTR/RTL) portfolio rendered on a pure black (#000000) background with #F2F2F0 primary text, #8F8F89 secondary text, and a #CDFF3D accent. All animation is built with Motion (motion/react) and is supposed to be gated behind `prefers-reduced-motion`.
>
> Review it against WCAG 2.2 Level AA and identify any issues. Component description: [describe the component, its states, interactive behaviours, and any known constraints — candidates: LangOverlay (full-screen black cover with target-language name and blinking cursor for 760ms on language switch), StackMarquee (continuously scrolling logo strip with SVG-only logos and no captions), NavBar (fixed bar that gains blur and border after 24px of scroll), MobileMenu (z-50 overlay menu), ProjectCard (image scale-on-hover with arrow slide-in)]
>
> For each issue found:
> - State the WCAG criterion it violates (with criterion number)
> - Rate severity: Critical / Major / Minor
> - Explain the impact on the affected user group
> - Suggest the minimal fix that resolves the issue
>
> Pay specific attention to: contrast of the dim text and the lime accent on pure black; RTL behaviour (directional icons, logical properties); focus visibility on a black page with no rounded corners or shadows; screen-reader experience during the language-switch overlay (does `lang`/`dir` flip get announced?); and whether the marquee satisfies pause/stop/hide requirements. Also flag any areas where the component description is ambiguous from an accessibility perspective.

---

## 5. Brand Voice Application Check

> You are a brand voice editor. I am going to share a piece of copy from wailbox.com and our voice guidelines. Audit the copy and rewrite any passages that violate the guidelines.
>
> Our brand voice: editorial and confident, like a well-designed print monograph about an engineer's work. Short declarative sentences that lead with evidence (real platforms, real scale, real clients: Princess Nourah University, Alborhan, Moddaker). Technical terms stay precise and untranslated hype is banned ("passionate", "cutting-edge", "solutions"). One CTA label per intent across the whole page. No exclamation marks, no em-dashes or en-dashes anywhere in visible text, no section eyebrow labels. Every string exists as an English/Arabic pair and the Arabic must read as native editorial Arabic, not translationese.
>
> Copy to audit: [paste the copy — usually an `{ en, ar }` block from `src/content/site.ts`; paste both languages]
>
> Format your response as:
> 1. Overall voice assessment (2 sentences, covering both languages if both provided)
> 2. Specific passages that miss the mark (quote each one) with the violation explained
> 3. Revised versions of each flagged passage (revise EN and AR independently — fix the Arabic as Arabic, don't back-translate)
> 4. One sentence on what the copy does well

---

## 6. Design System Token Naming

> You are a design system engineer. I need to name design tokens for a new component in the wailbox portfolio. Follow these conventions:
>
> Naming convention: flat semantic single-purpose names, defined in Tailwind v4 `@theme` in `src/index.css`. Tokens name the role, never the value or the component. Lowercase, one word where possible.
>
> Existing token examples from our system:
> - `--color-bg: #000000` (page background)
> - `--color-surface: #0A0A0A` (elevated media blocks)
> - `--color-line: rgb(255 255 255 / 0.1)` (all 1px borders and dividers)
> - `--color-ink: #F2F2F0` (primary text)
> - `--color-dim: #8F8F89` (secondary text)
> - `--color-accent: #CDFF3D` (the single accent, volt lime)
> - `--font-display: 'Space Grotesk Variable'` / `--font-arabic: 'IBM Plex Sans Arabic'` / `--font-mono: 'JetBrains Mono Variable'`
>
> Component to name: [component name and description]
>
> Hard constraints: this system allows NO second accent color, NO shadows, NO border-radius (radius is 0 everywhere), and depth comes only from `--color-line` borders and spacing — so do not propose radius or shadow tokens; if the component seems to need them, say so and propose a compliant alternative instead. Generate token names only for properties the system permits: color, typography, and spacing.
>
> For each token: provide the name, the value it should hold (or an existing token it should alias), and the intent behind the name choice. Prefer aliasing an existing token over minting a new one; flag any genuinely new primitive as a system-change decision for the owner.

---

## 7. User Flow Edge Case Generator

> You are a QA-focused UX designer. I will describe a user flow on wailbox.com, a single-page bilingual portfolio (React 19 + Vite, static, no backend, content hard-coded in TypeScript). Your job is to find every edge case, exception, and error state that the happy path does not address.
>
> Flow description: [describe the flow step by step — main candidates: (1) language switch: click toggle → 760ms full-screen overlay → `lang`/`dir` flip on `<html>` → layout mirrors to RTL → choice persisted to localStorage; (2) contact: hero "Email me" or giant footer link → `mailto:` opens; (3) work browsing: scroll-triggered reveals → project card hover → external link to live client platform in new tab]
>
> User type: mixed — technical recruiters and engineering leads, English-first and Arabic-first, desktop and mobile, some with `prefers-reduced-motion` enabled.
>
> Platform: responsive web, single page, LTR and RTL.
>
> For each edge case:
> - Describe the situation that triggers it
> - Explain why a real user might reach this state
> - Rate likelihood: High / Medium / Low
> - Suggest how the design should handle it
>
> Organise by: Input errors, System errors (JS disabled/failed, fonts blocked, localStorage unavailable, dead external client links), Permission states (no mail client configured, pop-up/new-tab blocking), Connectivity issues (slow font/image loading on the placeholder images), Edge inputs (rapid double-toggle of language mid-overlay, deep-link to an anchor in the "wrong" language, browser translation extensions fighting the manual toggle, reduced-motion users hitting animation-gated content).

---

## Usage notes

- Prompts stay in English (they target AI tools); outputs for site copy must always come back as `{ en, ar }` pairs per the content rule in `CLAUDE.md`.
- Standing project decisions the AI must not "fix": dark-only theme, single accent, radius 0, no em-dashes, one marquee. If a prompt's output argues against these, treat it as input for the owner, not as a change instruction.
- After any copy change lands in `src/content/site.ts`, re-run prompt 5 on the final `{ en, ar }` pair.
