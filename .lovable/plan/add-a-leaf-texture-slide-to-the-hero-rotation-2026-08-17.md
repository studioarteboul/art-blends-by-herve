# Add a leaf-texture slide to the hero rotation

## Goal

Add one new hero slide that shows the three metal-leaf textures (gold, silver, rose gold) side by side, bringing the rotation from 8 slides to 9.

## What you'll see

- A single extra slide in the hero slideshow made of three equal squares side by side: gold leaf, silver leaf, rose gold, filling the hero band edge to edge with a thin gap between them.
- It behaves exactly like the painting slides: same 5-second hold, 3-second cross-fade, same dark gradient with the eyebrow and headline on top.
- The navigation dots at the bottom right go from 8 to 9 dots.
- Placement: it appears after the last painting, so the rotation ends on the textures before looping back.

## Technical detail

- Upload the three uploaded textures as CDN assets with `lovable-assets create` from `/mnt/user-uploads/`, writing `src/assets/gold-leaf.jpg.asset.json`, `src/assets/silver-leaf.jpg.asset.json`, `src/assets/rose-gold.png.asset.json`.
- In `src/routes/index.tsx`, widen the `heroSlides` entry type so a slide can be either a single `image` or a `images: string[]` triptych, and append a ninth entry holding the three pointer URLs with bilingual alt text ("Gold, silver and rose gold leaf textures" / "Textures a la feuille d'or, d'argent et d'or rose").
- In `HeroCarousel`, when a slide has `images`, render a `grid grid-cols-3 gap-px` wrapper of `object-cover` images inside the same absolutely-positioned, opacity-transitioned layer; single-image slides keep the current markup.
- Dots, timings, pause-on-hover, reduced-motion handling and route metadata stay unchanged.
