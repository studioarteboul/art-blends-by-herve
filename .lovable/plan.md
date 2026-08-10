# Rotating hero slideshow on the Works page

## Goal

Replace the single Supercar hero image with an automatic slideshow that cycles through the eight attached paintings, one at a time.

## What you'll see

- The hero area keeps its current size and dark gradient overlay.
- Each painting holds for about 5 seconds, then cross-fades to the next over **3 seconds**; it loops forever.
- No titles or captions on the hero: the existing "Supercar, 2025 — Acrylic, silver leaf and epoxy" line is removed, leaving only the eyebrow and headline.
- Small dots at the bottom right let a visitor jump to a specific painting; hovering pauses the rotation.
- On devices set to "reduce motion", the slideshow stays on the first image.

## Paintings in the rotation

Lumière de Soie, Chic Soirée, Élégance de Nuit, Rose Gala (new file), Rocky — Victory in Silence (new file), Mediterranean Bay, Pines over the Bay, Promenade au bord de l'eau.

Six of the attachments match artwork already in the site's folder, so those are reused. The gown on a beige ground (66.jpg) and the silver figure with raised arms (86.jpg) are added as new files.

Note on framing: the hero is a wide band and most of these canvases are tall portraits, so they will be shown filling the band and cropped top/bottom, the same way Supercar is today. If you'd rather see each full canvas uncropped, say so and the hero can instead be a shorter, centred stage that letterboxes each painting.

## Technical detail

- Copy the two new uploads into `public/` as `rose-gala.jpg` and `rocky-victory-in-silence.jpg`.
- In `src/routes/index.tsx`, add a `heroSlides` array (image path + bilingual alt text only) and a `HeroCarousel` component: `useState` index + `useEffect` interval of **8 seconds** (5 seconds visible + 3 seconds transition), stacked absolutely-positioned `<img>`s with a **3-second** `opacity` transition, `object-cover`, first slide eager with `fetchPriority="high"` and the rest lazy.
- Keep the existing gradient overlay, `Container`, eyebrow, and `<h1>`; delete the caption paragraph.
- Pause on `mouseenter`/focus; respect `prefers-reduced-motion`.
- Leave route `head()` metadata unchanged.
