# Design Language

Contents: palettes, neutrals and semantics, typography, spacing, shape, elevation, imagery, iconography, motion, gradients.

## 1. Palette archetypes

Pick ONE archetype per product. Hex values are starting points that match the references; adjust only the primary if the user has a brand colour.

| Archetype | Primary | Primary dark | Tint (10%) | Accent | Page bg | Seen in |
|---|---|---|---|---|---|---|
| **Trust Blue** (health, guides, education, attendance) | `#1A6BFF` | `#0B4FD1` | `#EAF1FF` | none needed | `#F7F9FF` | Egypt Guide, AbsenSiswa, telehealth, before/after |
| **Fresh Green** (identity, organic, grocery, spa) | `#166534` / `#0E6B3A` | `#0B4F2B` | `#E8F5EC` | lime `#C8F04D` | `#F6FBF7` | SudaPass, organic grocery A/B/C, spa, fintech |
| **Navy + Gold/Yellow** (services, real estate, corporate) | `#0B2A6B` navy | `#071C4A` | `#E9EEFA` | yellow `#FFC91F` or gold `#C9A24B` | `#FFFFFF` | Antixor cleaning, Aczone real estate |
| **Forest + Cream** (wellness, luxury, travel) | `#1F4D3A` | `#143528` | `#EAF2ED` | amber `#F5B82E` | cream `#FBF6EE` | Healing Hands, Antix-R travel, forest real estate |
| **Warm Brown + Cream** (pets, bakery, lifestyle) | `#8B5E3C` | `#6F4A2F` | `#F6EBDD` | caramel `#C98B52` | `#FFF8F0` | Pet care app |
| **Sunset Orange-Pink** (food, delivery, retail energy) | `#FF6B2C` -> `#FF2D78` gradient | `#E5521A` | `#FFF0E8` | none | `#FFF7F3` | Aczone grocery |
| **Soft Purple** (property marketplaces, lifestyle) | `#8B5CF6` | `#6D3FE0` | `#F1EBFF` | none | `#F4F3FA` | Property listings app |
| **Monochrome Luxe** (interiors, architecture, editorial) | `#111111` | `#000000` | `#F3F0EB` | warm taupe `#B08D6A` | `#FFFFFF` / `#FAF7F2` | Innera interior |
| **Dark Tech** (fintech, SaaS) | `#0F3D1E` -> `#1B5E20` gradient | `#082A14` | `#EAF7D6` | lime `#C6F432` | `#F7FAF2` | Fintech Framer template |

Orange travel (TravelPerk) uses a sky-blue/orange pairing: primary orange `#FF6A1A`, navy footer `#0F2747`, blue accents. Use that only for dense, energetic travel/marketplace sites.

## 2. Neutrals and semantics

```
text-strong   #101828    headings, prices
text          #344054    body
text-muted    #667085    subtitles, meta, placeholders (>=4.5:1 on white)
text-subtle   #98A2B3    disabled, tertiary only
border        #E4E7EC    inputs, dividers
border-soft   #EEF2F7    card outlines
surface       #FFFFFF
surface-alt   #F8FAFC    page sections, input fill alt
success       #12B76A  tint #E8F7EE  text #12803D
warning       #F79009  tint #FFF4E0  text #B45309
danger        #F04438  tint #FDECEC  text #C0362C
info          #2E90FA  tint #EAF1FF  text #1D4ED8
star          #FFB020
```

Rules: never pure black text on white for body; use `#101828`. Tints are used for backgrounds of chips, icon wells and banners; the saturated colour is used for text, icons and fills of solid buttons.

## 3. Typography

Fonts: geometric sans for UI. Good defaults in order: Plus Jakarta Sans, Inter, DM Sans, Manrope, Poppins, Outfit. Serif display (luxury/wellness/interiors only): Playfair Display, DM Serif Display, Cormorant Garamond, Fraunces, paired with the sans for body and UI.

Mobile scale (px / weight / line-height):
- Display (splash, hero): 28-32 / 700 / 1.2
- Screen title: 20-24 / 700 / 1.25
- Header title: 17-18 / 600
- Section title: 16-18 / 600-700, with "See all" link in primary 13-14 / 500 right-aligned
- Body: 14-16 / 400 / 1.5
- Meta/caption: 12-13 / 400-500, muted
- Chip/tab label: 11-14 / 500-600
- Price/number emphasis: 16-20 / 700

Web scale (desktop / mobile):
- Hero H1: 56-72 / 36-40, weight 700-800, line-height 1.05-1.15, tight tracking (-0.02em)
- Section H2: 36-44 / 28-30, weight 700
- Eyebrow label above H2: 12-13, uppercase, letter-spacing 0.08em, primary colour, optional
- H3 card title: 18-22 / 600
- Body: 16-18 / 1.6, muted colour, max line length ~60ch
- Nav: 14-15 / 500

Headline device: emphasise one key word in the brand colour or with an underline/highlight block (e.g. "Finding <u>Homes</u> & Building Futures", "Explore The World With <accent>Antix-R</accent>", "Get Your Finances Under Control" with lime highlight in dark hero).

## 4. Spacing and layout

- Base unit 4px. Use 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96.
- Mobile: screen padding 16-20; gap between cards 12-16; section gap 24-28; header height 56; tab bar 64-72 plus safe area; sticky CTA bar padding 16 with white blur/gradient backing.
- Web: container max 1200-1280 centred, side padding 24 (mobile) / 40 (desktop); section padding-y 64 (mobile) / 96 (desktop); grid gap 24-32; 12-col grid, common layouts 2-col hero (5/7 or 6/6), 3-col and 4-col card grids.
- Alignment: left-aligned text for hero and cards; centred headings for sections with grids (Why choose us, How it works, pricing, testimonials).

## 5. Shape and elevation

```
radius-xs 8   tags, small thumbs
radius-sm 12  thumbnails, small cards, inputs on dense UIs
radius-md 16  buttons (non-pill), inputs, list cards
radius-lg 20-24  main cards, sheets, feature cards
radius-xl 28-32  hero containers, large image panels, bottom sheets top corners
radius-full 999  pills, chips, search bars, avatars, FAB
```

Shadows (use at most one per surface):
```
shadow-card   0 1px 2px rgba(16,24,40,.04), 0 8px 24px rgba(16,24,40,.06)
shadow-float  0 12px 32px rgba(16,24,40,.12)           (sticky bars, popovers)
shadow-cta    0 8px 20px rgba(<primary rgb>, .28)       (primary buttons, FAB)
```
Prefer border plus a very light shadow for white cards on a white page. On tinted pages, shadow alone is enough.

## 6. Imagery

- Photography is warm, high-key, natural light, real people looking at camera or at an activity. Subject matches the domain: cleaner with supplies, doctor with stethoscope, basket of vegetables, couple with keys, travellers on a cliff.
- Always inside rounded containers (16-32px). Hero images may be cut with a custom shape: arch (spa), rounded rectangle (real estate), circle blob behind a cut-out person (health/grocery hero), overlapping polaroids (travel).
- Overlay badges on images: "Top Rated", "For Sale", "Verified Provider", price pill, heart button, "1/5" image counter.
- Floating elements overlapping hero image edges: stat badge ("100% Satisfaction Guarantee"), small property card, avatar stack "Trusted by thousands", rating chip. These add depth and are a signature of the style.
- Decoration: soft leaf/foliage blurs at screen edges (organic), faint paw/heart doodles (pets), dotted patterns and subtle wave dividers (travel), thin plane/arrow doodles. Keep at 10-20% visual weight, behind content.

## 7. Iconography

- Outline icons, 1.5-2px stroke, 20-24px (lucide, Ionicons outline, Phosphor regular).
- Icons for categories sit in a 44-56px rounded-square or circle with tinted fill. Selected/primary state flips to solid primary with white icon (e.g. Education tile in Egypt Guide).
- Feature icons on web: 48-56px tinted circle or square, centred above title and 1-2 line description.
- Active tab icon may be filled; inactive outline.

## 8. Gradients and hero backgrounds

- Brand header gradient for mobile home: primary -> primary dark, 135deg, with bottom corners rounded 28-32 and the search bar overlapping the edge.
- Promo banners: primary -> lighter primary, or orange -> pink for commerce, with imagery on the right and a white pill button on the left.
- Dark web sections: solid navy/forest with white text and white cards inside (services grid), or dark-green gradient hero with lime accent (fintech).
- Page background tints: very subtle vertical gradients (`#F7F9FF` -> `#FFFFFF`) are fine; no loud rainbow gradients.

## 9. Motion (when implementing)

- 150-250ms ease-out for press, hover and chip selection; scale 0.98 on press for buttons and cards.
- Screen transitions: slide for push navigation, fade-up for sheets.
- Skeleton shimmer for loading lists; success screens use a scale-in check with a subtle confetti or sparkle accent.
- Web: cards lift 2-4px on hover with stronger shadow; image zoom 1.03 inside overflow-hidden container.
