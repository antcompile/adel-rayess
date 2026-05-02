Dr. Adel Rayess - Website Stitch Prompt

1. Project Overview

Premium trilingual medical website for Dr. Adel Rayess, a leading Doctor of Osteopathy in Lebanon with 10.6M+ social media followers. The site serves two audiences: patients seeking non-surgical spinal treatment and medical professionals interested in training programs. Built for future integration of a reservation/booking system.

2. Technical Architecture

- Framework: Astro 5 (static site generation, islands architecture)
- Styling: Tailwind CSS 4 via @tailwindcss/vite
- Interactivity: React 19 islands with Motion.dev (framer-motion successor)
- Icons: Lucide React (SVG only, no emojis)
- Forms: Formspree (serverless)
- Fonts: Self-hosted woff2 (Google Fonts gstatic)
- TypeScript: Strict mode
- Deployment: Static output (Vercel/Netlify/GitHub Pages)

3. Internationalization

- Languages: English (default), Arabic (RTL), French
- Strategy: URL prefix (/en/, /ar/, /fr/), root redirects to /en/
- RTL: Arabic pages receive dir="rtl" on <html>, IBM Plex Sans Arabic font
- Translation: JSON-based, nested key access, fallback to English

4. Theme System

Light mode (default) with dark mode toggle. Both premium aesthetics.

Light Mode
| Token | Value |
|-------|-------|
| --color-background | #FAFAF9 |
| --color-surface | #FFFFFF |
| --color-text | #1C1917 |
| --color-text-secondary | #57534E |
| --color-accent | #0D9488 |
| --color-cta | #B8860B |
| --color-border | #E7E5E4 |

Dark Mode
| Token | Value |
|-------|-------|
| --color-background | #0C0A09 |
| --color-surface | #1C1917 |
| --color-text | #FAFAF9 |
| --color-text-secondary | #A8A29E |
| --color-accent | #2DD4BF |
| --color-cta | #D4A017 |
| --color-border | #292524 |

FOUC prevention via inline script before body rendering.

5. Typography

- Headings: Bodoni Moda (serif) - luxury, high-contrast
- Body: Jost (geometric sans) - clean readability
- Arabic: IBM Plex Sans Arabic
- Scale: clamp-based responsive sizing
- Line height: 1.6 body, 1.2 headings

6. Visual Design Language

- Exaggerated minimalism meets medical trust
- Sharp edges (no rounded buttons - luxury/medical positioning)
- Generous whitespace
- Teal accent for medical authority, gold for CTAs
- Subtle film grain overlay
- No pure black (#000) - always warm near-black

7. Pages

1. Home - Cinematic hero + trust stats + services grid + how-it-works + video testimonials + training CTA + final booking CTA
2. About - Portrait + bio + credentials + methodology section
3. Services - 6 service cards + equipment showcase + CTA
4. Gallery - Video testimonials grid + treatment results
5. Training - 3 programs + upcoming events + registration CTA
6. Media - Featured videos + press mentions + events
7. Contact - Formspree form + contact info + map placeholder

8. Navigation

- Fixed header, transparent -> blurred on scroll
- Logo left, nav center (desktop), lang + CTA right
- Mobile: hamburger -> full-screen overlay with staggered reveal
- "Book Appointment" CTA persistent in header

9. Animation Strategy (Motion.dev)

| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Hero text | Word-by-word reveal | Page load | 1.2s |
| Section headings | Clip-path reveal | Scroll | 0.8s |
| Cards | Stagger fade-up | Scroll | 0.6s/0.1s stagger |
| Images | Scale 1.1->1.0 + opacity | Scroll | 1s |
| Stats | Count-up | Scroll | 2s |
| Buttons | Scale on hover | Hover | 0.2s |
| Nav | Backdrop blur | Scroll past hero | 0.3s |

All respect prefers-reduced-motion (disabled when set).

10. Component Architecture

Static (Astro)
- Header, Footer, SectionHeading, LanguageSwitcher

Islands (React + Motion)
- ThemeToggle, ScrollReveal, HeroAnimation, ContactForm, CountUpStats, VideoPlayer, MobileMenu

11. Data Layer

- siteConfig.ts - contact info, social links, business details
- navigation.ts - trilingual nav items
- services.ts - 6 services with trilingual content
- Translation JSONs per language

12. Accessibility

- WCAG AA contrast (4.5:1 minimum)
- Focus-visible states (2px accent outline)
- prefers-reduced-motion respected
- Touch targets 44x44px minimum
- Semantic HTML structure
- Alt text on all images
- aria-labels on icon buttons

13. Performance

- Static generation (no server runtime)
- Self-hosted fonts with preload
- client:visible lazy hydration on islands
- No layout shifts from animations (transform + opacity only)
- Image lazy loading
- Target: Lighthouse 95+ on all categories

14. Future Enhancements (Not in v1)

- Reservation/booking system integration
- Patient portal
- Blog CMS (Astro Content Collections)
- Real video content from YouTube/Instagram embeds
- Google Maps embed
- WhatsApp chat widget
- Analytics (Plausible/Umami)
