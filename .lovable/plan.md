# Leaf-finish swatch on the hero slideshow

## Goal

Show a small square swatch of the metal leaf used in each hero painting, in the bottom-right corner of the hero, changing as the slideshow rotates.

## What you'll see

- A small square (about 56px, subtle white border) sits at the bottom right of the hero, above the navigation dots.
- The square shows the leaf texture matching the painting currently on screen, with a small bilingual caption beside it: Gold leaf / Feuille d'or, Silver leaf / Feuille d'argent, Rose gold leaf / Feuille d'or rose.
- It cross-fades on the same 3-second timing as the slide behind it.
- The existing dots stay, moved just under the swatch, so visitors can still jump between paintings.

## Matching

- Gold leaf: Lumiere de Soie, Chic Soiree, Tresor Cote d'Azur, Balcon en Mediterranee, Promenade au bord de l'eau
- Silver leaf: Elegance de Nuit, Rocky - Victory in Silence
- Rose gold leaf: Rose Gala

## Technical detail

- Upload the three uploaded swatches as CDN assets: `src/assets/silver-leaf.jpg.asset.json`, `src/assets/gold-leaf.jpg.asset.json`, `src/assets/rose-gold.png.asset.json` via `lovable-assets create` from `/mnt/user-uploads/`.
- In `src/routes/index.tsx`, add a `leaf` field (`"gold" | "silver" | "rose"`) to each entry of `heroSlides`, plus a `leafSwatch` map from that key to `{ url, labelEn, labelFr }`.
- In `HeroCarousel`, render the swatch + caption in a right-aligned column with the dots below it, replacing the current dots-only block; swatch uses the same opacity transition and reads from `heroSlides[index].leaf`.
- No changes to route metadata, gallery data, or other pages.
