---
name: modern-ui-design
description: House design system for producing clean, polished, modern UI/UX for mobile apps (Expo/React Native, Flutter, mockups) and marketing/landing websites (Next.js, React, HTML/Tailwind). Encodes the visual language, tokens, layout patterns, screen flows and a gallery of 20 reference designs. Use this skill whenever the user asks to design, build, mock up, redesign, restyle or improve any screen, app UI, dashboard, onboarding, auth flow, booking flow, profile page, listing page, landing page, portfolio or website, or says things like "make it look professional/modern/clean", "UI/UX", "design this app", "build the frontend", even if they never mention a design system. Also use it when generating React/Tailwind/React Native components where visual quality matters.
---

# Modern UI Design

A distilled design language taken from 20 reference designs the user considers optimal: service/booking apps, auth flows, e-commerce, health, property, travel, fintech, and business landing pages. The goal is to make anything you build look like it came from the same polished, premium, "Dribbble-grade" family: calm, airy, rounded, one strong brand colour, photography-led.

Reference images live in `assets/reference-gallery/`. Do not rely on this text alone for the look: view the 1-3 most relevant images before designing (see `references/gallery.md` for which to pick).

## Workflow

1. **Classify the request.** Mobile app screen(s), or website/landing page? Which domain (health, commerce, property, travel, education, finance, services, auth)?
2. **Pick a brand palette** from `references/design-language.md` (palette archetypes). One primary colour per product. If the user gave brand colours, use them as the primary and keep everything else from this system.
3. **View reference images** that match the type and domain (`references/gallery.md`).
4. **Read the pattern file** for the type:
   - Mobile: `references/mobile-patterns.md`
   - Web: `references/web-patterns.md`
   - Multi-screen flows (auth, booking, checkout, tracking) and empty/loading/error states: `references/flows-and-states.md`
5. **Start from the tokens** in `assets/tokens/` (`tailwind.preset.js` for web/NativeWind, `tokens.ts` for React Native StyleSheet). Override only the brand colour.
6. **Build**, then run the checklist below before presenting.

If the stack is unspecified, default to: Next.js + Tailwind for web, Expo + React Native (NativeWind or StyleSheet with `tokens.ts`) for mobile, and a single HTML file with Tailwind classes for quick mockups. Combine with the `frontend-design` skill for environment constraints (for example artifact rendering rules); this skill decides how it should look.

## The ten rules of the look

These are what the reference designs share. Everything else is detail.

1. **Light, airy canvas.** White or very faint tinted background (`#F8FAFF` blue-tint, `#FFF8F3` warm, `#F6FBF7` green-tint). Dark sections are used deliberately as a contrast band, not as the default.
2. **One primary colour, used with discipline.** Primary fills the main CTA, active tab, selected chip, key icons and links. Semantic colours (green/amber/red) appear only for status. Accent (e.g. yellow, lime, gold) is reserved for one highlight element per view, typically the nav CTA or the featured pricing tier.
3. **Generous radius.** Cards 16-24px, buttons and search bars fully pill-shaped or 14-16px, images 12-24px, hero containers up to 32px. Nothing is sharp-cornered.
4. **Soft elevation, not heavy shadow.** Cards sit on a 1px border of `#E8EDF5` and/or a diffuse shadow (`0 8px 24px rgba(16,24,40,0.06)`). Never harsh black shadows.
5. **Tinted icon chips.** Icons sit in a rounded square or circle filled with a 10-12% tint of their colour. Never bare grey icons floating in space for feature grids and quick actions.
6. **Photography does the selling.** Real, warm, well-lit imagery (smiling people, food, buildings, destinations) in rounded containers. Hero imagery is large. Never leave a hero as text on a flat colour if an image would fit.
7. **Clear hierarchy by size and weight, not decoration.** A big bold headline (often with one word in the brand colour or underlined), a muted 1-2 line subtitle, then the CTA. Muted text is `#667085`-ish, never light grey that fails contrast.
8. **Pill chips and tags everywhere.** Filters, categories, tags, statuses and time slots are small rounded chips. Selected = solid primary with white text; unselected = white/tinted with border.
9. **Consistent rhythm.** 4/8px spacing grid; 16-20px screen padding on mobile; 64-96px vertical section padding on web; content max-width 1200px.
10. **Complete, not just pretty.** Every flow shows its real states: loading, empty, error, success, expired, disabled. The references (SudaPass, booking flows) show these explicitly; copy that thoroughness.

## Component quick reference

| Element | Spec |
|---|---|
| Primary button | Full width on mobile, height 52-56, radius pill or 16, primary fill, white 600 text, optional trailing arrow icon, soft coloured shadow |
| Secondary button | Same size, white or tinted fill, primary text, 1px primary/border outline |
| Input | Height 52, radius 14, 1px border `#E4E7EC`, leading icon, 16px text, focus ring in primary at 20% alpha, password eye toggle |
| Search bar | Pill or radius 16, leading search icon, muted placeholder, trailing filter/sliders icon button |
| Card | White, radius 20, 1px border, padding 12-16, optional thumbnail radius 12-14 |
| Chip | Height 32-36, radius pill, 13-14px 500 text, selected solid primary |
| Status pill | Tint bg + darker text: Upcoming/Confirmed `#E8F7EE/#12803D`, Pending `#FFF4E0/#B45309`, Cancelled `#FDECEC/#C0362C`, Info `#EAF1FF/#1D4ED8` |
| Bottom tab bar | 5 items max, icon + 11px label, active = primary icon + label, inactive muted; optional raised centre FAB for the primary action |
| Header | Back arrow left, centred 17-18px 600 title, action icon(s) right |
| Rating | Amber star + bold score + muted `(1.2k reviews)` |
| Price | "From $50" with muted "From" and bold amount in primary or dark |
| Heart / save | Outline heart top-right of cards, filled red when saved |

Full specs, layouts and anatomy are in the reference files.

## Output standards

- Produce working code, not a description. Components must be responsive (mobile-first on web) and use real-looking content for the domain (names, prices, ratings, locales). Match the user's locale where known; for Kenya use KES currency, M-Pesa, local place names, and plausible Kenyan names rather than generic US data.
- Use an icon library (lucide / lucide-react-native / Ionicons), never emoji as UI icons (an emoji in a greeting such as a wave is fine).
- Use a clean geometric sans (Plus Jakarta Sans, Inter, DM Sans, Manrope, Poppins) unless the domain is luxury/wellness/interiors, where headings use a refined serif (Playfair Display, DM Serif Display, Cormorant, Fraunces) over a sans body.
- For images without real assets, use well-sized placeholders with a gradient and clear alt text, or Unsplash-style URLs if the environment permits. Never leave broken image boxes.
- Accessibility: contrast 4.5:1 for body text, touch targets 44px minimum, visible focus states, labels on inputs, alt text on images.

## Pre-delivery checklist

Run through this before presenting anything:

- [ ] Only one primary colour; accent used once; status colours used only for status
- [ ] Radii consistent (cards 16-24, controls 14-pill)
- [ ] Shadows soft or replaced by borders
- [ ] Icons in tinted chips for grids and quick actions
- [ ] Headline + subtitle + CTA hierarchy is obvious in under 2 seconds
- [ ] Imagery is present and rounded where the domain calls for it
- [ ] Spacing follows the 4/8 grid; nothing cramped, nothing floating
- [ ] Loading, empty and error states handled (see `references/flows-and-states.md`)
- [ ] Mobile: bottom tab bar or clear back navigation, safe-area padding, sticky bottom CTA where a flow needs one
- [ ] Web: sticky nav with CTA, trust signals, stats, testimonials, final CTA band, full footer
- [ ] Content is realistic and localized, not lorem ipsum

## When the request is a redesign

Study the "before/after" reference (`mobile-before-after-redesign.jpg`). The transformation it shows is the standard recipe: add a branded gradient header with greeting and hero image, overlap the search bar across the header edge, group actions into a tinted-icon grid card, turn vertical lists into horizontal cards with a "Popular" badge, add a promo banner and a raised centre FAB in the tab bar. Preserve the user's information architecture; upgrade only the presentation unless asked otherwise.
