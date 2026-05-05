# Design System

> **Status:** Draft placeholder — designer will populate after requirements are confirmed.

---

## Color Palette

Colors are defined as CSS custom properties in `src/css/tokens.css`.

| Token | Purpose | Value (TBD) |
|---|---|---|
| `--color-primary` | Main brand color | _TBD_ |
| `--color-primary-light` | Hover / tinted backgrounds | _TBD_ |
| `--color-secondary` | Accent color | _TBD_ |
| `--color-background` | Page background | _TBD_ |
| `--color-surface` | Card / section backgrounds | _TBD_ |
| `--color-text` | Body text | _TBD_ |
| `--color-text-muted` | Secondary text, captions | _TBD_ |
| `--color-heading` | Heading text | _TBD_ |
| `--color-border` | Borders, dividers | _TBD_ |
| `--color-cta` | Call-to-action button | _TBD_ |
| `--color-cta-hover` | CTA hover state | _TBD_ |

### Palette Direction
Calming and grounded: soft greens, warm off-whites, muted terracotta or sage accents. Avoid cold blues or clinical whites.

---

## Typography

| Token | Value (TBD) |
|---|---|
| `--font-heading` | _serif or humanist sans_ |
| `--font-body` | _readable, warm sans-serif_ |
| `--font-size-base` | 1rem (16px) |
| `--font-size-sm` | 0.875rem |
| `--font-size-lg` | 1.125rem |
| `--font-size-xl` | 1.5rem |
| `--font-size-2xl` | 2rem |
| `--font-size-3xl` | 2.75rem |
| `--line-height-body` | 1.7 |
| `--line-height-heading` | 1.2 |

### Font Direction
- Heading: something with warmth and personality — consider a humanist serif (e.g. Lora, Cormorant Garamond) or a soft geometric sans (e.g. DM Sans, Nunito)
- Body: highly legible, neutral warmth — consider Inter, Source Sans 3, or system fonts

---

## Spacing

Token scale based on 4px base unit:

| Token | Value |
|---|---|
| `--space-1` | 0.25rem (4px) |
| `--space-2` | 0.5rem (8px) |
| `--space-3` | 0.75rem (12px) |
| `--space-4` | 1rem (16px) |
| `--space-6` | 1.5rem (24px) |
| `--space-8` | 2rem (32px) |
| `--space-12` | 3rem (48px) |
| `--space-16` | 4rem (64px) |
| `--space-24` | 6rem (96px) |

---

## Border Radius

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 4px | Small elements |
| `--radius-md` | 8px | Cards, inputs |
| `--radius-lg` | 16px | Sections, large cards |
| `--radius-full` | 9999px | Pills, avatars |

---

## Shadows

| Token | Value | Use |
|---|---|---|
| `--shadow-sm` | subtle | Inputs, small cards |
| `--shadow-md` | medium | Hoverable cards |
| `--shadow-lg` | pronounced | Modals, dropdowns |

---

## Breakpoints

| Name | Value | Context |
|---|---|---|
| `sm` | 480px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |

Mobile-first: base CSS targets mobile, `@media (min-width: X)` for larger screens.

---

## Accessibility Checklist

- [ ] All text meets WCAG AA contrast (4.5:1 for normal text, 3:1 for large text)
- [ ] Focus rings visible and styled (not removed with `outline: none`)
- [ ] Tap targets minimum 44×44px
- [ ] Color is never the only indicator of meaning
- [ ] All images have descriptive `alt` text
- [ ] Form fields have associated `<label>` elements
- [ ] Heading hierarchy is logical (h1 → h2 → h3, no skips)

---

_Last updated: 2026-05-04 — pending designer review_
