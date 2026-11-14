# Mobile Patterns

Contents: global frame, onboarding/splash, home/dashboard, search and results, cards, detail page, saved/bookings lists, profile/settings, notifications, tab bar, bottom sheets and CTAs.

Design at 390x844 (iPhone 14) logical size; keep layouts fluid for 360-430 wide. Honour safe areas.

## 1. Global frame

- Status bar area respected; screen background = page bg token.
- Standard header (inner screens): back arrow (left, 24px), centred title 17-18/600, optional right icon (bookmark, share, heart, calendar, filter). Height 56.
- Home header: left avatar or menu icon, centre/left brand or greeting, right notification bell with small red dot or count badge.
- Content scrolls under; header stays solid white or transparent over gradient.
- Bottom tab bar: 4-5 tabs. White, top 1px border or soft shadow, radius 24 top optional. Active tab: primary colour icon and label (filled icon). Typical sets:
  - Services: Home, Search, Saved, Bookings, Profile
  - Commerce: Home, Categories, Orders, Cart (badge), Profile
  - Health: Home, Appointments, [centre FAB +], Messages, Profile
  - Pets: Home, My Pets, [centre paw FAB], Bookings, Profile
  - Education/attendance: Home, Attendance, Schedule, Profile

## 2. Splash and onboarding

Anatomy (top to bottom):
1. Logo mark (rounded-square app icon with symbol, or wordmark) with brand name.
2. Headline 28-32/700, often two-tone (dark + brand colour second line), e.g. "Happy Pets, Happy Hearts." or "Your Everyday Grocery, *Delivered Instantly*".
3. One-line subtitle, muted, centred.
4. Hero illustration or photo (puppy and kitten, delivery bag with produce, student with phone) occupying ~45% height, sitting on a soft blob or tinted circle, optionally with floating chips.
5. Optional 3 benefit icons in a white rounded card ("Multi-Vendor", "Top Quality", "Fast Delivery") or inline small tiles.
6. Pagination dots (active dot elongated in primary).
7. Full-width primary CTA "Get Started" with trailing arrow, height 56, radius pill.
8. "Already have an account? **Sign in**" text link.

Hero variants (see `mobile-onboarding-hero-variants-abc.jpg`): A = smiling person holding the product, B = pure product basket close-up, C = hands exchanging product with category chips below. Offer A/B/C when the user wants options; person-led (A) feels friendliest, product-led (B) feels most premium.

## 3. Home / dashboard

Compose from these blocks; choose 4-6, in this order:

1. **Greeting**: small muted "Good Morning, Sarah" with wave emoji, then bold question headline "How can we help you today?" or a name with avatar.
2. **Search bar**: pill, leading magnifier, placeholder, trailing filter button (in primary tint square). Overlaps the gradient header edge in the "after" style.
3. **Hero/status card**: full-width card (radius 24) in primary gradient or tint. Examples: "Today's Attendance: Present" with green pill; next appointment with doctor avatar and a white "Join Video Visit" button; pet profile carousel card with photo.
4. **Quick actions grid**: 3-4 columns x 1-2 rows. Each cell: 48-56px tinted rounded-square with outline icon, 12px label below (1-2 lines). Variation: grid wrapped inside one white card with radius 24 (health "after" design, 3x2).
5. **Section header**: title left, "See all" right.
6. **Horizontal carousel** of cards (doctors, products, specialists) with peek of the next card; or vertical list.
7. **Upcoming/next-up card**: tinted (cream/blue) card with calendar icon, title, date-time, and small "View All" pill.
8. **Tip/promo banner**: gradient or tinted, image/illustration right, short title, small white CTA pill ("Shop Now", "Know More").
9. **Recent activity** list with small status icons.

Commerce home extras: delivery location selector at top ("Deliver to Home - 42, Green Street v"), category icon row (circles), "Top Picks For You" product grid with + add button (circle, primary), value-prop strip ("Best Prices", "Wide Range", "On-Time Delivery").

## 4. Search and results

- Header with back arrow and brand/logo; heading "Find the right service in Egypt" 24/700 muted subtitle line of categories.
- Search input with clear (x) button once typed.
- Chip row (horizontal scroll): All, Hospitals, Clinics, Doctors, Pharmacies; selected = solid primary.
- Utility row: location chip (pin + "Cairo"), "Filters" with sliders icon, "Sort by" with chevron; separated by thin dividers.
- Result count: "124 results found" muted 13px.
- Result card (horizontal): 84-96px thumbnail left (radius 14) with optional green "Top Rated" badge overlay; right column: title 16/600, location row (pin icon + muted text), rating row (star, score, reviews), up to 2 tag chips ("General Hospital", "24/7 Emergency"), price "From $50"; heart top-right; chevron bottom-right.
- Spacing 12 between cards; cards white with soft border.

## 5. Detail page (place/doctor/product/property)

1. Full-bleed hero image (height ~220-260) with overlay icon buttons: back (left), share + heart (right); image counter "1/5" bottom-right. Image bottom corners rounded or content sheet overlapping with radius 28.
2. Title 22/700, location row, rating row, and a "Verified Provider" pill.
3. **Stat row**: 3-4 equal cells in tinted container with icon + bold label + muted caption ("24/7 Emergency", "150+ Specialists", "Modern Facilities"); or for doctors: Specialization / 12+ Years / 2.5k+ Patients.
4. Segmented sections: "About" with "Read more", "Services" list with check icons and prices, "Choose Department" selectable tiles (selected has primary border + tint bg), "Available Doctors" cards, "Location" map preview.
5. Booking selectors: horizontal date strip (day name, number; selected = solid primary tile) and time-slot chips grouped Morning/Afternoon/Evening.
6. **Sticky bottom CTA**: "Book Appointment ->" or "Book Now" full width, primary, over a white bar with top border and safe-area padding. For commerce, price on the left and Add to Cart button on the right.

## 6. Saved / Bookings lists

- Top tabs as pills: All, Upcoming, Completed, Cancelled (selected solid primary). Calendar icon top-right to switch to calendar view.
- Booking row card: left 64-72px thumbnail, a category tag chip (tinted by category: Education purple, Medical green, Business blue, Tourism orange) above the title, subtitle line, date and time with small icons, status pill bottom-left, chevron right.
- Saved card: bigger thumbnail, category tag, title, location, meta line (e.g. "Application Deadline: 30 Nov 2025"), heart filled red top-right, two buttons side by side: **View Details** (primary solid) and **Remove** (outline).
- Section filters in a chip row under the title "Your favorite services, all in one place".

## 7. Profile and settings

- Profile header: gradient/photo banner (landmark or abstract) with rounded bottom, avatar 72-88px with white ring and small camera badge, name 20/700, role line "Traveler - Businessman - Student", location pill, short bio in a tinted rounded box. Settings gear top-right.
- Stats strip: 3 columns inside a white card (Saved 12, Bookings 5, Inquiries 3) each with tinted icon and bold number.
- Menu list: each row = tinted icon square (40px), title 15/600, muted subtitle 12-13, chevron right. Groups: Account, App Settings, Support. Toggle rows (Dark Mode, Biometric Login) use a primary switch. Log Out in danger red as the last row.
- Student/parent profile variant: centred avatar, name, class; rows list Student ID, DOB, Gender, Email, Phone with leading icons; primary "Edit Profile" button at bottom.

## 8. Notifications

- List of cards, each with a coloured tinted icon (check = green confirmed, calendar = blue reminder, megaphone = primary announcement, alert = amber update), bold title, 1-2 line muted body, relative time right or below. Unread items have a small primary dot or slightly tinted background.

## 9. Schedule / timetable

- Horizontal week strip (Mon-Sun with date), selected day solid primary tile.
- Entries as cards: coloured subject icon tile (each subject has its own tint), subject name 15/600, time range muted with clock icon, room/teacher line; status pill on the right (Present / Upcoming).

## 10. Attendance / data views

- Summary tiles in a row: Present 18 (green), Sick 1 (amber), Absent 1 (red) with tinted backgrounds and big numbers.
- Month selector with left/right chevrons.
- History list rows: date, weekday muted, status pill right; amber/red for non-present.
- QR check-in: centred QR inside a rounded frame with corner brackets in primary, instruction text, primary "Open Camera" and secondary "Manual Check In" buttons.

## 11. Order tracking and receipts

- Map fills top ~45% with route polyline in brand colour, destination pin, origin store chip, and a floating card "Arriving in 18 min - Distance 2.4 km".
- Bottom sheet (radius 28 top): order number, "In Progress" pill, step tracker with 4 nodes (Confirmed, Packed, On the way, Delivered) with times, completed nodes filled primary, current node highlighted; courier card with avatar, name, rating, call and chat circle buttons; "View Order Details" row.
- Receipt: green "Delivered Successfully" banner with date and bag illustration, item rows with thumbnail, name, quantity, price; subtotal, fees, bold Total; buttons **Reorder** (tinted) and **Download Invoice** (outline).

## 12. Bottom sheets, modals, toasts

- Sheets: radius 28 top, grabber bar 36x4 `#D0D5DD`, 20-24 padding, primary CTA at bottom.
- Confirmation success: centred green circle with check (scale-in), "Appointment Confirmed!" 22/700, short message, summary card (doctor/date/time/ID), primary "Add to Calendar", outline "View My Appointments", text link "Back to Home".
- Toasts: pill at top or bottom, tint background with matching icon.

## 13. NativeWind / React Native tips

- Use `tokens.ts` constants for colours and radii. `Pressable` with scale feedback; `FlatList` for lists; `ScrollView horizontal showsHorizontalScrollIndicator={false}` for chip rows and carousels.
- Shadows: iOS `shadowColor/Offset/Opacity/Radius`, Android `elevation: 3-6`.
- Safe areas via `react-native-safe-area-context`. Sticky CTA = absolutely positioned View with `paddingBottom: insets.bottom + 12`.
- Keep list item components small and memoised; thumbnails with `expo-image` and fixed aspect ratios.
