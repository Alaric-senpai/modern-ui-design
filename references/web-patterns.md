# Web / Landing Page Patterns

Contents: page skeleton, navbar, hero variants, trust strip, services grid, why-choose-us, split banner, stats band, how it works, pricing, testimonials, listings, search widgets, CTA band, footer, style variants by domain, responsive rules, Tailwind recipes.

## 1. Page skeleton (default order)

1. Sticky navbar
2. Hero (headline, subtext, 2 CTAs, trust badges, image)
3. Trust/benefit strip (3-4 icon+label items) or logo row
4. Primary content section (services / destinations / properties / features) as a card grid
5. Why choose us (4 icon columns)
6. Split banner (image + checklist + CTA)
7. Stats band (3-4 big numbers)
8. How it works (3-4 numbered steps)
9. Pricing (3 tiers, middle highlighted) or featured items
10. Testimonials (card with avatar, stars, quote; carousel dots)
11. Blog/insights or FAQ accordion (optional)
12. Final CTA band ("Ready for a cleaner, healthier space?")
13. Footer (brand blurb + socials, 3 link columns, contact, legal row)

Not every page needs all 13. A portfolio or product page can cut 5-9 and swap in case studies. Keep the order logic: promise -> proof -> offer -> process -> price -> social proof -> action.

## 2. Navbar

- Sticky, white (or transparent over a dark hero, turning white on scroll), height 72-80, subtle bottom border or shadow on scroll.
- Left: logo mark + wordmark. Centre: 5-6 links 14-15/500 (Home active in primary, dropdown chevrons on "Pages"/"Properties"). Right: phone number with icon (optional) and a pill CTA ("Book Now", "Plan Your Trip", "Get in Touch", "Book Consultation") in the accent colour (yellow on navy sites, amber on green sites, black on monochrome).
- Mobile: logo + hamburger; slide-down or full-screen menu with the CTA at the bottom.

## 3. Hero variants

**A. Split hero (default, reference: `web-cleaning-navy-yellow.jpg`, `web-realestate-forest-green.jpg`).** Left: eyebrow or small badge, H1 (56-72, bold, 2-3 lines, one word emphasised), 1-2 line subtext muted, button row (primary filled + secondary outline or "Watch Video" ghost with play circle), trust row (3 small icon+label pairs or avatar stack + "Trusted by thousands"). Right: large rounded image (radius 24-32) with 1-2 floating badges overlapping its edge ("100% Satisfaction Guarantee" circle seal, rating chip, property mini-card). Background white with a faint tint shape behind the image.

**B. Full-bleed image hero (reference: `web-travel-green-wavy.jpg`, `web-travel-orange-dense.jpg`).** Large photo with dark gradient overlay left-to-right; white H1 with one word in accent colour; subtext; primary + ghost buttons; a white **search widget** overlapping the hero's bottom edge (tabs: Flights, Hotels, Packages, Things to do; fields with icons: From, Check-in, Check-out, Travelers; accent Search button).

**C. Dark brand hero (reference: `web-fintech-dark-green-lime.jpg`).** Deep green/navy gradient, centred H1 in white with lime highlight, subtext, two pill buttons (lime solid + outline), two overlapping phone mockups or dashboard cards below showing balance, ring chart and bars. Followed by a logo row on white.

**D. Bento/pill hero (reference: `web-realestate-bento-pills.jpg`).** A dark rounded panel (radius 32) with big white headline on the left and a photo card with floating mini-card on the right, both with rounded "notch" corners; below, a centred section "Let's Find Your Dream Home." flanked by small circular floating photos, then a row of pill-shaped tiles forming a sentence ("We" [photo] "Find" [lime arrow pill] "Home" [photo]).

**E. Editorial hero (reference: `web-interior-serif-monochrome.jpg`).** Serif H1 on the left in near-black, small descriptor, black pill button + play link, and a tall rounded image right. Stats row under (12+ years, 850+ projects, 95%, 28+) in light separators.

**F. Search-first hero (reference: `web-realestate-navy-gold.jpg`, `web-realestate-forest-green.jpg`).** H1 "Find Your Dream Property Today", property image right, a dark rounded search bar (Location, Type, Price, Bedrooms + search icon button) overlapping the bottom, then a 5-item benefit strip.

## 4. Trust strip

4 items in a row below the hero: 32-40px tinted icon + 13-14px label (e.g. Eco-Friendly Products, Verified & Trained Cleaners, Satisfaction Guaranteed; Best Price Guarantee, 24/7 Support, Safe & Secure Bookings). Divide with thin vertical lines or none. Alternatively a "Trusted by innovative companies" logo row in grey.

## 5. Services / offering grid (the signature section, reference: `web-cleaning-navy-yellow.jpg`, `web-spa-cream-forest-serif.jpg`)

- Wrap the section in a **dark brand rounded container** (navy or forest, radius 28-32, padding 40-56). Left column: H2 white 36-44 with short paragraph and an accent "View All Services" button. Right: 3x2 grid of **white cards** (radius 16-20, padding 20) each with a tinted line icon, title 17/600, one-line description 13-14 muted.
- Light variant: white page, cards with border + shadow, icons in tint circles, "Learn more >" links.
- Image-card variant (destinations, properties, spaces): cards are mostly image (radius 20) with the title overlaid or below, rating and price chips.

## 6. Why choose us

Centred H2 and 1-line subtitle, then 4 columns: 56px icon (outline in a tint circle), title 17/600, 2-line muted description. Optional thin dividers. Section on white or very light tint.

## 7. Split banner

Two columns: rounded photo (radius 24) one side; other side a brand-coloured panel (navy/green) with white H2, 3 check-listed bullets (check icons in accent), and an accent button. Alternate sides when repeating the pattern. Sections with overlapping polaroid-style images and a handwritten caption ("Collect Moments, Not Things") are acceptable for travel/lifestyle.

## 8. Stats band

A full-width rounded strip (brand colour or dark) with 3-4 stats: big number 36-48/800 in white or accent, muted caption below ("500+ Happy Clients", "1,000+ Projects", "100% Satisfaction"). Dividers between. In light designs use large dark numbers on tinted cards with one lime/accent-filled highlight card.

## 9. How it works

3 or 4 steps in a row: numbered circle or "01/02/03" in primary, bold title, short description; connecting line or arrows between steps on desktop; vertical stack on mobile. Often paired with an image on one side (interior renders, a woman with cleaning supplies).

## 10. Pricing (reference: `web-cleaning-navy-yellow.jpg`, `web-fintech-dark-green-lime.jpg`)

- 3 cards, centred heading. Middle card is **highlighted**: filled with brand/accent colour (yellow on navy sites, dark green on lime sites) with a "Most Popular" ribbon, slightly larger scale (1.04-1.06).
- Card anatomy: plan name, big price `$79` with muted `/month` or `/visit`, 4-6 feature rows with check icons, full-width button (filled on the highlighted card, outline on others).
- Add a monthly/yearly toggle pill when relevant.
- For Kenya: show KES (e.g. "KES 4,500") and consider adding an M-Pesa badge near the checkout CTA.

## 11. Testimonials

Single large white card with soft shadow: avatar (circle 56), name and role, 5 amber stars, quote in 18-20/500, left/right arrow buttons and pagination dots. Alternative: 3 cards in a row with avatar, stars, quote; accompanied by a photo of happy customers on one side.

## 12. Listings and cards (reference: `web-realestate-navy-gold.jpg`, `web-travel-green-wavy.jpg`, `web-travel-orange-dense.jpg`)

- Property card: image (radius 16) with badge "For Sale"/"For Rent" top-left, heart top-right; price bold in primary or dark; title; location with pin; meta row (beds, baths, sqft) with tiny icons; agent avatar optional.
- Destination card: tall image with gradient, name, country, price from "$899", duration chips (5 Days, 4 Nights), "Book now" link.
- Category row: 5-6 icon tiles (Residential, Commercial, Apartment, Land, Luxury Villa, Office Space) with listing counts.
- City cards: round-cornered photos with city name overlaid.
- Agent cards: portrait photos, name, role, social icons.
- App download band: dark rounded panel with phone mockup, headline, App Store/Google Play badges.

## 13. CTA band

Rounded (radius 24-32) brand-coloured panel, headline 32-40 white, 1 line subtext, accent pill button, optional person/product cut-out image overlapping the right edge. Place just before the footer.

## 14. Footer

Dark brand colour (navy/forest/black) or very light. Columns: brand + short blurb + social icons (circles), Quick Links, Services/Destinations, Contact (phone, email, address with icons). Bottom row: copyright left, Privacy and Terms right, thin divider above.

## 15. Domain style variants (see `references/gallery.md` for full image list)

| Domain | Palette | Type | Special devices | Reference image |
|---|---|---|---|---|
| Cleaning/home services | Navy + yellow | Bold geometric sans | Seal badge, dark services container, pricing with yellow middle tier | `web-cleaning-navy-yellow.jpg` |
| Travel (premium) | Forest + amber, cream bg | Sans, script accent | Wavy section dividers, polaroid images, newsletter on ocean photo, search widget | `web-travel-green-wavy.jpg` |
| Travel (marketplace) | Orange + navy + sky | Sans | Category icons row, countdown offer banner, filter tabs on destination cards, dense layout | `web-travel-orange-dense.jpg` |
| Fintech/SaaS | Dark green + lime | Modern grotesk | Phone mockups, ring/bar charts, metrics cards, FAQ accordion, "Trusted by" logos | `web-fintech-dark-green-lime.jpg` |
| Interiors/luxury | Monochrome warm neutrals | Serif headings | Large photography, numbered process, press logos (Forbes, Dezeen), minimal chrome | `web-interior-serif-monochrome.jpg` |
| Wellness/spa | Cream + forest green | Serif headings | Arch/organic image shapes, leaf illustrations, gift card block, booking form | `web-spa-cream-forest-serif.jpg` |
| Real estate (corporate) | Navy + gold or forest | Sans | Search bar, category grid, agents, city cards, app download | `web-realestate-navy-gold.jpg`, `web-realestate-forest-green.jpg` |
| Real estate (modern) | Dark navy + lime | Sans | Bento panels, pill sentence row, table-style "Recent Initiatives" list | `web-realestate-bento-pills.jpg` |

## 16. Responsive rules

- Mobile first. Stack columns; hero image goes below text; services grid becomes 1 column (2 for icon tiles); pricing cards stack with highlighted card first or keep order with horizontal snap; nav collapses.
- Breakpoints: 640 / 768 / 1024 / 1280.
- Keep tap targets >= 44px; buttons full width on mobile in hero and CTA bands.
- Images use `aspect-[4/3]` or `aspect-[16/10]` with `object-cover` and `rounded-3xl`.

## 17. Tailwind recipes

```html
<!-- primary button -->
<a class="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[15px] font-semibold text-white shadow-cta transition hover:bg-primary-dark active:scale-[.98]">Get Started</a>

<!-- card -->
<div class="rounded-3xl border border-line-soft bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-float">...</div>

<!-- icon chip -->
<span class="grid h-12 w-12 place-items-center rounded-2xl bg-primary-tint text-primary">...</span>

<!-- dark services container -->
<section class="rounded-[32px] bg-navy p-8 md:p-14 text-white">
  <div class="grid gap-10 lg:grid-cols-[1fr_2fr]">...</div>
</section>

<!-- section wrapper -->
<section class="mx-auto max-w-[1200px] px-6 py-16 md:py-24">...</section>
```
