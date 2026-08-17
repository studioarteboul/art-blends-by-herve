# Leaf-finish swatches in the hero

## Goal

Show the three metal-leaf textures as squares side by side in the hero, sitting above the hero text, and tie them to the slideshow rotation.

## What you'll see

- Three small squares (gold leaf, silver leaf, rose gold) in a row, placed directly above the "Contemporary Painter — Montreal" line and the headline.
- Each square is about 64px (56px on mobile), with a thin light border and rounded corners.
- As the slideshow rotates, the square matching the current painting's leaf finish is highlighted: full opacity with a bright ring; the other two dim to about 40%.
- A small bilingual caption under the row names the active finish: Gold leaf / Feuille d'or, Silver leaf / Feuille d'argent, Rose gold leaf / Feuille d'or rose.
- Clicking a square jumps to the next hero painting using that finish.
- The existing navigation dots at the bottom right stay as they are.

## Which painting uses which finish

- Gold: Lumiere de Soie, Chic Soiree, Tresor Cote d'Azur, Balcon en Mediterranee, Promenade au bord de l'eau
- Silver: Elegance de Nuit, Rocky - Victory in Silence
- Rose gold: Rose Gala

## Technical detail

- Upload the three uploaded textures as CDN assets with `lovable-assets create` from `/mnt/user-uploads/`, writing `src/assets/gold-leaf.jpg.asset.json`, `src/assets/silver-leaf.jpg.asset.json`, `src/assets/rose-gold.png.asset.json`.
- In `src/routes/index.tsx`: add a `leaf: "gold" | "silver" | "rose"` field to each `heroSlides` entry and a `leafSwatches` array of `{ key, url, labelEn, labelFr }`.
- Lift the carousel index state so the hero text block can read the active slide: move `index`/`setIndex` into `Works` (or a shared `useHeroCarousel` hook in the same file) and pass them to `HeroCarousel`.
- Render the swatch row inside the existing `Container` overlay, above the eyebrow paragraph, using `opacity`/`ring` classes driven by `heroSlides[index].leaf`, with a 700ms transition.
- Squares are buttons with `aria-label`s; clicking sets the index to the next slide using that finish.
- No changes to route metadata, gallery data, or other pages.
