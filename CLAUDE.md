# Mama Website — Therapist Practice Website

## Project Overview
A warm, accessible, mobile-first website for a therapist practice. The site should build trust with prospective clients who may be anxious or uncertain about seeking help.

## Team
This project uses a multi-agent Claude Code team (`mama-website`):
- **team-lead** (you): Project coordination, requirements, architecture
- **designer**: Design system, visual language, UX decisions
- **frontend-dev**: HTML/CSS/JS implementation
- **content-writer**: All website copy and content strategy

## Project Structure
```
src/
  index.html          # Homepage
  pages/              # Inner pages
    about.html
    services.html
    contact.html
    faq.html
  css/
    tokens.css        # Design system variables (edit here first)
    base.css          # Reset + global base styles
    components.css    # Reusable UI components
    main.css          # Page-specific and layout styles
  js/
    main.js           # Site-wide JS (nav, smooth scroll, etc.)
    contact.js        # Contact form logic
  images/             # Organized by type (hero, team, backgrounds, icons)
  fonts/              # Self-hosted font files if needed
docs/
  BRIEF.md            # Project brief (fill in requirements here)
  DESIGN_SYSTEM.md    # Design tokens, color palette, typography decisions
  CONTENT_GUIDE.md    # Tone of voice, copy guidelines, page-by-page outline
  TECH_SPEC.md        # Technical decisions, browser support, build approach
content/
  copy/               # Draft copy files per page
  assets/             # Raw/original assets before optimization
```

## Design Principles
- Calming palette: soft greens, warm neutrals, gentle blues — no harsh colors
- WCAG AA accessibility minimum (many therapy clients have cognitive/visual needs)
- Mobile-first: design and code for small screens first
- Warm and human: real-feeling imagery direction, not generic stock photos
- Spacious layouts: white space communicates calm and safety

## Code Standards
- Semantic HTML5 (`<main>`, `<section>`, `<nav>`, `<article>`, etc.)
- CSS custom properties from `tokens.css` — never hardcode colors/spacing
- No heavy JS frameworks — keep the site fast and dependency-light
- Contact form via Formspree (backend-free, no server needed)
- All images need `alt` text; all interactive elements need focus styles

## Copy Principles
- Lead with the client's feelings, not the therapist's credentials
- Plain language — no clinical jargon
- Short paragraphs, scannable with subheadings
- CTAs should feel inviting: "Let's talk" not "Schedule now"
- Address common fears: "Is this right for me?" / "What do I say?"

## Commands
```bash
npm run dev       # Start local dev server (live-server on port 8080)
npm run lint:css  # Lint CSS with stylelint
npm run lint:js   # Lint JS with eslint
npm run format    # Format all files with prettier
npm run build     # Copy src/ to dist/ and optimize images
```

## Deployment
Configured for Netlify. Push to `main` branch auto-deploys. Contact form uses Formspree endpoint (set in `src/js/contact.js`).
