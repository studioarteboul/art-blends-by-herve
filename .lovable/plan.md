# Exhibition photo gallery + local image paths

## What will change

### 1. Clickable exhibition with photos
On the Exhibitions & Collections page, the entry **Museum MEAM Barcelona with Artio Gallery (2026)** becomes clickable:

- The title gets a subtle hover state and a small "Photos" indicator so visitors know it opens.
- Clicking it expands a photo strip directly under the row: a responsive grid of the 10 uploaded photos, uncropped, with generous spacing to match the site's minimal look.
- Clicking a photo opens it full-screen (dark overlay, click anywhere or Esc to close, arrows to move between photos).
- Clicking the title again collapses the strip. All other exhibition rows stay exactly as they are.
- Bilingual labels: "Photos" / "Photos", "Close" / "Fermer".

### 2. Images served locally
The 10 photos are saved into `/public` with simple lowercase names — `meam1.jpg` through `meam10.jpg` — and referenced as plain paths (`/meam1.jpg`), no cloud URLs.

All artwork on the Works page already loads from `/public` with lowercase names (`/supercar.jpg`, `/cc1.jpg`, `/ir1.jpg`, `/pr1.jpg`, …) and no CDN pointer files remain in `src/assets`, so nothing there needs changing.

## One thing to confirm

Several of the uploaded photos show the Art Shopping / Carrousel du Louvre booth signage ("art SHOPPING — ARTIO GALLERY — B15 — CANADA") and the Louvre exterior, not Barcelona. They will be attached to the MEAM Barcelona entry as requested — say the word if some belong under a different exhibition instead.

## Technical notes

- Files touched: `src/routes/exhibitions.tsx`, plus 10 new files in `public/`.
- Add an optional `photos?: string[]` field to the `Entry` type; only the MEAM entry populates it.
- `Row` gains local open/closed state; the lightbox is a small local component in the same file (fixed overlay, keyboard handlers, no new dependency).
- Photos use `loading="lazy"` and descriptive alt text.
- Verify with a production build after the change.
