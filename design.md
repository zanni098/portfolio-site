# Design — Asad Jehan Zeb

A locked design system for this site. Every page redesign reads this file before
emitting code. Do not regenerate per page — extend or amend this file when the
system needs to grow.

Built around three cinematic 4K hero loops in `public/assets/hero/`. The footage
is the focal element of the site; the chrome exists to stay out of its way.

## Genre

`atmospheric` — register: **Lumen, Night Foundry** (Modal / Anthropic / Together AI).

Deliberate deviations from stock Lumen, and why:

| Stock Lumen | This site | Why |
|---|---|---|
| All-lowercase prose | Sentence case | It's a personal portfolio read by recruiters. Lowercasing a legal name costs more than it earns. |
| Geist body | Instrument Sans | The brief was explicitly to leave Geist. |
| Hand-built CSS apparatus | The hero footage | Lumen's apparatus doctrine assumes a pure-code page. There are three 4K films here; a second focal object would fight them. |
| Accent hue 50 (brass) | Hue 75 (amber) | Lifted from the gold shaft in `sea-storm`. |

Everything else in the Lumen register holds: blueprint grid, mono UPPERCASE
labels against sentence-case prose, hairline cards lit from within, Instrument
Serif display, tabular numerals, no orb, no glass.

## Macrostructure families

- **Marketing pages** (`/`, `/about`, `/contact`) — **Marquee Hero**. Full-bleed
  film fills the fold. No CTA in the fold; the first CTA arrives below the rule.
  Varies on: hero alignment, which film.
- **Listing pages** (`/projects`, `/opensource`, `/films`, `/experience`,
  `/certifications`) — **Index-First**. Numbered hairline-ruled rows, not card
  grids. Varies on: row density, whether rows carry thumbnails.
- **Document pages** (`/resume`) — **Long Document**. Continuous prose, inline
  section heads, single measure.

## Theme

Night Foundry. Cool-violet near-black canvas, amber accent that emits.

- `--color-paper`    `oklch(14% 0.012 265)` — canvas
- `--color-paper-2`  `oklch(18% 0.014 265)` — elevated surface
- `--color-paper-3`  `oklch(22% 0.014 265)` — hover surface
- `--color-ink`      `oklch(96% 0.004 265)` — headlines
- `--color-ink-2`    `oklch(78% 0.008 265)` — body
- `--color-muted`    `oklch(62% 0.010 265)` — secondary
- `--color-subtle`   `oklch(48% 0.010 265)` — tertiary
- `--color-rule`     `oklch(96% 0.004 265 / 0.11)` — hairline
- `--color-accent`   `oklch(78% 0.145 75)` — amber, from `sea-storm`
- `--color-accent-2` `oklch(68% 0.160 18)` — coral chord, verb landmark only
- `--color-glow`     `oklch(80% 0.150 75 / 0.34)`
- `--color-focus`    `oklch(78% 0.145 75)`
- `--rule-blueprint` `oklch(96% 0.004 265 / 0.04)` — 48px grid hairline

**Accent budget: ≤ 5% of any viewport.** Amber lives on focus rings, mono
eyebrow ordinals, hairline card emission, and one CTA fill. Never on display
text — headlines are ink, full stop.

## Typography

Three families, loaded through `next/font/google` — self-hosted, no CDN
round-trip, no flash. Never re-add a `fonts.googleapis.com` `@import`.

- **Display** — Instrument Serif 400, roman. `letter-spacing: -0.032em`,
  `line-height: 1.02`. Never italic.
- **Body** — Instrument Sans 400/500/600.
- **Mono** — JetBrains Mono 400/500. UPPERCASE labels only.
- **Type scale anchor** — `--text-display: clamp(2.75rem, 7vw + 0.5rem, 6.5rem)`

**Root font size is a fixed `16px`.** The viewport-relative root
(`html { font-size: 0.833333vw }`) is removed and must not come back: it made
type *shrink* as the window grew (16px at 1024, 13.3px at 1200, 16px at 1440)
and it silently discarded the reader's own font-size preference — a WCAG 1.4.4
failure. All fluid sizing goes through `clamp()` on the token, not the root.

**Two registers.** Prose is sentence case. Mono labels — eyebrows, stat labels,
tech tags, callouts — are UPPERCASE with `0.10em` tracking at 11px. The contrast
between the two is the typographic signature. Nothing else is uppercase.

## Spacing

4-point named scale, tokens in `globals.css`. Pages use named tokens
(`var(--space-md)`), never raw values. Section rhythm: `--space-3xl` minimum
between major sections.

## Motion

Spring-based only, per [AGENTS.md](AGENTS.md) rule 1 — `@react-spring/web` via
`src/components/animation/springs/`. CSS `transition-*` is allowed for discrete
hover/focus state only. **No CSS `@keyframes`** (the outgoing nav used
`animate-pulse`; it's gone).

- Easings: `--ease-entrance: cubic-bezier(0.2, 0, 0, 1)`, `--ease-out-expo`
- Reveal pattern: **opacity only**, 600ms, 60ms stagger. No slide-up on scroll —
  the atmosphere does the work.
- Cards: `translateY(-3px)` + inner-glow brighten on hover, 220ms.
- Reduced motion: everything collapses to final state.

**Removed and not to be reinstated:** scroll-triggered number counters. The
outgoing `AnimatedCounter` set state inside a ref callback so it never actually
detected the viewport, and its suffix regex rendered `$47K` as `47$K`. Numbers
render statically with `tabular-nums`.

## Microinteractions stance

- Silent success. No celebratory toasts.
- Hover tooltips delay 800ms; focus tooltips 0ms.
- `:focus-visible` ring is amber at ≥3:1 and appears **instantly** — never
  animated.

## CTA voice

- **Primary** — amber fill, ink-on-amber, `--radius-button` 6px, sentence case,
  verb-first. "View the work", not "Learn More →". No trailing arrows.
- **Secondary** — hairline outline on paper, same shape, same voice.

## Per-page allowances

- Marketing pages carry one full-bleed film in the fold.
- Listing pages carry no film — blueprint grid canvas only.
- Document pages: typography only.

## What pages MUST share

- The wordmark (`asad` + amber period).
- The amber accent and its ≤5% budget.
- Instrument Serif display / Instrument Sans body / JetBrains Mono labels.
- CTA shape and voice.
- Mono eyebrow rhythm: `NN · SECTION ROLE`, UPPERCASE, above the heading, in the
  same column. **Never** tag-left / heading-right.
- N9 edge-aligned nav, Ft5 statement footer.

## What pages MAY differ on

- Macrostructure within the page-type family.
- Which film, and its alignment (`left` / `center` / `right`) — chosen to sit in
  the footage's own negative space:
  - `flower-arc` — arch occupies the right third → text **left**
  - `sea-storm` — light shaft is central → text **left**, clear of the beam
  - `hills` — horizon low, sky open → text **left, upper**
- Row density on listing pages.

## Banned outright

Carried from the Lumen refusal list plus what this site actually shipped:

- Glowing orbs, spheres, rings.
- `backdrop-filter` / glassmorphism — the outgoing `.glass` class and the frosted
  nav are both gone.
- Gradient text. `.gradient-text` is redefined as solid accent so existing pages
  keep rendering while the tell disappears everywhere at once.
- White or light wash over the footage. Legibility comes from a **bottom-anchored
  linear scrim only** — the outgoing radial `rgba(255,255,255,0.85)` bleached the
  4K masters to grey.
- Three-equal-feature-card rows with icon tops.
- Index-column footers (the outgoing 3-column + copyright footer is the single
  most recognisable AI-footer fingerprint).
- Italic headers.
- Invented metrics. The four ledger numbers are the site's existing claims; if a
  number can't be sourced, the cell is dropped, not estimated.
- Raw hex / px in class names — [AGENTS.md](AGENTS.md) rule 4.
- `any` — [AGENTS.md](AGENTS.md) rule 7. The outgoing nav had two `as any` casts.

## Known content debt (not a design issue)

`src/lib/site.ts` sets `email: "asad@example.com"` — a placeholder on a live
site. Contact page work should replace it with a real address.
