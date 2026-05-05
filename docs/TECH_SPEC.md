# Technical Specification

---

## Stack

| Layer | Choice | Reason |
|---|---|---|
| HTML | Semantic HTML5 | Simple, fast, no build step for content |
| CSS | Vanilla CSS + custom properties | Full control, no framework lock-in |
| JS | Vanilla ES2022 modules | No framework overhead; site is content-first |
| Dev server | live-server | Zero-config local preview |
| Linting | stylelint + eslint | Catch errors early |
| Formatting | prettier | Consistent code style |
| Deployment | Netlify | Free tier, easy CI, form handling option |
| Forms | Formspree | Backend-free contact form; GDPR-compliant |
| Fonts | Google Fonts (or self-hosted) | TBD after designer picks typefaces |

---

## Browser Support

- Chrome / Edge: last 2 versions
- Firefox: last 2 versions
- Safari: last 2 versions + iOS Safari 15+
- No IE11 support

---

## Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse SEO | ≥ 90 |
| First Contentful Paint | < 1.5s |
| Total page weight | < 500KB (excluding hero image) |

---

## File Structure

```
src/
  index.html              Homepage
  pages/
    about.html
    services.html
    contact.html
    faq.html
  css/
    tokens.css            CSS custom properties (design tokens) — edit here first
    base.css              CSS reset + global typography + body defaults
    components.css        Reusable components: buttons, cards, forms, nav
    main.css              Layout + page-specific styles; imports all above
  js/
    main.js               Nav toggle, smooth scroll, scroll animations
    contact.js            Contact form submission via Formspree
  images/
    hero/                 Large hero/banner images (optimized WebP + JPEG fallback)
    team/                 Therapist headshots
    backgrounds/          Section background images
    icons/                SVG icons
  fonts/                  Self-hosted fonts (if not using Google Fonts CDN)
```

---

## CSS Architecture

All pages import `css/main.css` which contains:
```css
@import './tokens.css';
@import './base.css';
@import './components.css';
/* page-specific styles below */
```

**Rule:** Never hardcode a color, spacing value, or font name. Always use a token from `tokens.css`.

---

## Forms

Contact form submits to Formspree:
1. Create account at formspree.io
2. Create a form, get the endpoint URL
3. Set `FORMSPREE_ENDPOINT` in `src/js/contact.js`
4. Formspree sends email + handles spam filtering

Netlify Forms is an alternative if already on Netlify.

---

## Booking Integration

Depends on therapist's preferred platform:
- **Calendly:** embed widget or link button
- **Jane App:** embed or link
- **Psychology Today:** external link only
- **SimplePractice:** client portal link

TBD — confirm with client in requirements.

---

## SEO Basics

Each page needs:
- Unique `<title>` tag: `{Page} | {Practice Name} | {City}`
- `<meta name="description">` (150-160 chars)
- Open Graph tags for social sharing
- `canonical` link
- Structured data: `LocalBusiness` schema (JSON-LD in `<head>`)

Template is in each HTML file's `<head>`.

---

## Accessibility

- Semantic HTML structure (landmark regions)
- Skip-to-main-content link at top of `<body>`
- All images: descriptive `alt` text (or `alt=""` for decorative images)
- Forms: `<label for="">` on every input
- Focus styles: visible and on-brand (not just browser default)
- Keyboard-navigable navigation
- ARIA only where semantic HTML isn't sufficient

---

_Last updated: 2026-05-04_
