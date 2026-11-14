# Flows and States

Contents: auth/OTP flow, booking flow, checkout/order flow, attendance/check-in flow, empty/loading/error states, forms, microcopy.

Good UI shows the whole journey. When asked for "the login screen", also consider the neighbouring states unless told to keep scope narrow, and at minimum handle error and loading in the screen you build.

## 1. Auth and OTP flow (reference: `mobile-sudapass-auth-otp-states.jpg`)

Ten screens, each small and focused:

1. **Splash/welcome**: official-feeling logo, tagline, skyline or illustration low in the frame, filled primary "Sign in" button, then outline social buttons (Google, Apple, Facebook), "Don't have an account? Sign up".
2. **Sign in (email)**: back arrow, small logo, "Welcome Back!" with wave emoji, muted subtitle. Segmented control **Email | Phone Number** (selected = filled primary pill). Fields: Email (envelope icon), Password (lock icon, eye toggle). Row: "Remember me" checkbox left, "Forgot password?" link right. Primary "Sign in". Divider "Or continue with". Row of 3 square social buttons. Footer "Don't have an account? Sign up".
3. **Sign in (phone)**: same layout; phone field with flag + country code dropdown (+249) then number input.
4. **Verify code (empty)**: shield/lock-on-phone illustration, "Verify Your Code", "We've sent a 6-digit code to +249 90 123 4567", 6 separate boxes (first focused with primary border), timer row "Resend code in 00:45", "Didn't receive the code? **Resend Code**", primary "Verify Code", footer lock icon "Your data is 100% secure".
5. **Verify code (auto-filled)**: boxes filled, green pill "Code auto-filled from SMS".
6. **Verifying**: ring spinner around a shield, "Verifying Code... Please wait a moment", three-dot progress. Button hidden.
7. **Success**: big green check circle with sparkles, "Phone Verified!", short message, primary "Continue".
8. **Invalid code**: boxes with red border, red text with warning icon "Invalid code. Please try again.", timer continues, same buttons.
9. **Expired**: hourglass illustration in orange, "Code Expired", message, primary "Request New Code", outline "Change Phone Number".
10. **Create account**: Full Name, National ID/Passport, Email, Phone, Password (eye), terms checkbox with links, primary "Create Account", "Already have an account? Sign in".

Implementation notes: OTP boxes 48x56, radius 12, auto-advance focus, paste support, `textContentType="oneTimeCode"` / `autoComplete="sms-otp"`; disable the verify button until 6 digits; countdown drives the resend link; for Kenya default country code +254 and mention M-Pesa-style phone login as a first-class option.

## 2. Booking flow (reference: `mobile-telehealth-booking-flow.jpg`, `mobile-egypt-guide-results-saved-detail.jpg`)

1. Home with search and category tiles.
2. Search results list with chips, filters, sort.
3. Provider detail: hero, stats, about, services with prices, available practitioners.
4. **Book Appointment** screen: 3-step progress (Date & Time, Details, Confirm) with numbered circles, the current one filled primary, completed ones with checks, connected by a line. Month calendar grid (selected day = solid primary circle, today ringed), then "Available Time Slots" grouped Morning / Afternoon / Evening as chips (selected primary, unavailable greyed with strikethrough). Sticky "Continue" button.
5. **Details** step: patient/guest info, notes, price summary.
6. **Confirm** step: summary card, payment method selector, terms, primary "Confirm Booking".
7. **Success**: green check, booking ID, summary, Add to Calendar, View My Appointments.
8. **My Appointments**: tabs Upcoming / Completed / Cancelled, cards with Reschedule and Cancel actions.
9. Optional **Chat with doctor**: bubble list, quick reply chips, input bar with attach and send.

## 3. E-commerce / delivery flow (reference: grocery images)

Onboarding -> Home (location, search, hero offer, category icons, top picks) -> Categories list (thumbnail, name, item count, chevron) -> Product list/detail (image, price, size, add button/quantity stepper) -> Cart (line items with steppers, promo code, fees breakdown, sticky Checkout with total) -> Checkout (address, payment, summary) -> Order tracking (map + stepper + courier) -> Delivered receipt (reorder, invoice) -> Profile (order status shortcuts: All, Processing, Delivered, Cancelled with tinted icons; wallet balance; refer & earn).

Product card: image on tinted tile, name 14/600, unit muted, price 16/700, circular primary "+" button bottom-right that turns into a quantity stepper when tapped.

## 4. Check-in / attendance flow (reference: `mobile-absensiswa-attendance-10-screens.jpg`)

Splash -> Login -> Home dashboard (today's attendance card, quick actions, schedule list) -> QR check-in -> Attendance history -> Schedule -> Profile -> Notifications -> Settings -> Parent view. Note how every screen shares header, card style, chip style and primary blue; role-based views (student vs parent) reuse the same components with different data.

## 5. Empty, loading, error and success states

Never ship a screen without these:

- **Skeleton loading**: grey-tint rounded blocks matching the layout of the real cards (thumbnail square + 3 lines), shimmer left to right, 6-8 items. Prefer skeletons over spinners for lists; spinners only inside buttons or for short blocking steps.
- **Empty**: centred illustration or large tinted icon (96-120px), title 18/600 ("No bookings yet"), one muted line explaining what happens here, and a primary or outline button with the next action ("Explore services").
- **Error**: tinted danger icon or illustration, plain-language title ("Couldn't load results"), reason if known, "Try again" primary button, secondary "Contact support". Inline field errors use red 12-13px text under the field with a warning icon and a red border.
- **Offline**: banner at top with wifi-off icon and "You're offline. Showing saved data." in amber tint.
- **Success**: green check, concise message, one clear next action.
- **Permission request** (camera, location, notifications): tinted icon, why it is needed in one line, "Allow" primary and "Not now" text button.
- **Destructive confirm**: bottom sheet or centred dialog with danger-coloured confirm button and neutral cancel.

## 6. Forms

- Labels above inputs (13-14/500, text colour) or floating labels; helper text 12 muted.
- Group related fields into cards or sections; keep steps short (<= 5 fields) in multi-step forms.
- Primary action at the bottom, sticky on mobile; disabled state = primary at 40% opacity.
- Use the right keyboard types and autofill hints; validate on blur, not on each keystroke.
- Selection controls: segmented control for 2-3 options, chips for tags, radio cards for plans, switches for settings.

## 7. Microcopy

- Friendly, brief, human: "Good Morning, Sarah", "How can we help you today?", "Your favorite services, all in one place", "Please wait a moment".
- Buttons are verbs: Book Appointment, Continue, Verify Code, Reorder.
- Reassurance lines where trust matters (auth, payments): "Your data is 100% secure".
- Numbers carry units and context: "Arriving in 18 min", "From $50", "124 results found".
