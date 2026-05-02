Design System Master File

LOGIC: When building a specific page, first check design-system/pages/[page-name].md.
If that file exists, its rules override this Master file.
If not, strictly follow the rules below.

---

Project: Dr Adel Rayess
Generated: 2026-05-02
Category: Medical Clinic

---

Global Rules

Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | #0D9488 | --color-accent |
| Secondary | #2DD4BF | --color-accent (dark) |
| CTA/Accent | #B8860B | --color-cta |
| Background | #FAFAF9 | --color-background |
| Text | #1C1917 | --color-text |

Color Notes: Medical teal + gold CTA. Warm neutrals only.

Typography

- Heading Font: Bodoni Moda
- Body Font: Jost
- Arabic Font: IBM Plex Sans Arabic
- Mood: luxury, minimalist, high-end, sophisticated, refined, premium

Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| --space-xs | 4px / 0.25rem | Tight gaps |
| --space-sm | 8px / 0.5rem | Icon gaps, inline spacing |
| --space-md | 16px / 1rem | Standard padding |
| --space-lg | 24px / 1.5rem | Section padding |
| --space-xl | 32px / 2rem | Large gaps |
| --space-2xl | 48px / 3rem | Section margins |
| --space-3xl | 64px / 4rem | Hero padding |

Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| --shadow-sm | 0 1px 2px rgba(0,0,0,0.05) | Subtle lift |
| --shadow-md | 0 4px 6px rgba(0,0,0,0.1) | Cards, buttons |
| --shadow-lg | 0 10px 15px rgba(0,0,0,0.1) | Modals, dropdowns |
| --shadow-xl | 0 20px 25px rgba(0,0,0,0.15) | Hero images, featured cards |

---

Component Specs

Buttons

Primary Button:
  background: #B8860B
  color: white
  padding: 16px 40px
  border-radius: 0 (sharp edges)
  font-weight: 600
  transition: all 200ms ease
  cursor: pointer

Primary Button Hover:
  opacity: 0.9
  transform: translateY(-2px)
  box-shadow: 0 10px 30px rgba(0,0,0,0.15)

Secondary Button:
  background: transparent
  color: #0D9488
  border: 2px solid #0D9488
  padding: 16px 40px
  border-radius: 0
  font-weight: 600
  transition: all 200ms ease
  cursor: pointer

Cards

  background: var(--color-surface)
  border: 1px solid var(--color-border)
  padding: 32px-40px
  box-shadow: none
  transition: all 300ms ease
  cursor: pointer

Card Hover:
  border-color: var(--color-accent)/30
  box-shadow: 0 20px 25px rgba(0,0,0,0.08)
  transform: translateY(-2px)

Inputs

  padding: 12px 16px
  border: 1px solid var(--color-border)
  border-radius: 0
  font-size: 16px
  transition: border-color 200ms ease

Input Focus:
  border-color: var(--color-accent)
  outline: none
  box-shadow: 0 0 0 3px rgba(13,148,136,0.12)

---

Style Guidelines

Style: Exaggerated Minimalism + Medical Trust

Keywords: Bold minimalism, oversized typography, high contrast, negative space, statement design, medical authority

Best For: Celebrity medical brands, luxury healthcare, premium clinics

Key Effects:
  Hero: font-size clamp(3.5rem, 10vw, 8rem), font-weight 700, letter-spacing -0.03em
  Section labels: uppercase, letter-spacing 0.15em, font-size 0.75rem, accent color
  Stats: font-size clamp(3rem, 6vw, 4.5rem), tracking -0.02em
  Navigation: backdrop-filter blur(20px), 72px height

Page Pattern

Pattern Name: Trust & Authority + Conversion

- CTA Placement: Header (persistent) + Hero + Mid-page + Footer + Floating mobile
- Section Order: Hero > Stats > Services > How It Works > Testimonials > Social Proof > Training > Final CTA

---

Anti-Patterns (Do NOT Use)

- Outdated interface
- Confusing booking flow
- AI purple/pink gradients
- Emojis as icons - Use SVG icons (Lucide)
- Missing cursor:pointer - All clickable elements must have cursor:pointer
- Layout-shifting hovers - Avoid scale transforms that shift layout
- Low contrast text - Maintain 4.5:1 minimum contrast ratio
- Instant state changes - Always use transitions (150-300ms)
- Invisible focus states - Focus states must be visible for a11y
- Pure black (#000000) - Always use warm near-black
- Rounded buttons - Sharp edges only for luxury/medical positioning
- Cool grays - Only warm-tinted neutrals

---

Pre-Delivery Checklist

- No emojis used as icons (use SVG instead)
- All icons from Lucide React
- cursor-pointer on all clickable elements
- Hover states with smooth transitions (150-300ms)
- Light mode: text contrast 4.5:1 minimum
- Dark mode: text contrast 4.5:1 minimum
- Focus states visible for keyboard navigation
- prefers-reduced-motion respected
- Responsive: 375px, 768px, 1024px, 1440px
- No content hidden behind fixed navbars
- No horizontal scroll on mobile
- Touch targets 44x44px minimum
- Self-hosted fonts loading correctly
- Theme toggle works without FOUC
- Glass nav blur on scroll
- Floating mobile CTA present
- Section labels uppercase with letter-spacing
