# Add the leaf textures as their own hero slides

## Goal

The three metal-leaf textures (gold, silver, rose gold) become slides in the hero slideshow, shown full-bleed on their own, in the same rotation as the paintings.

## What you'll see

- The hero rotation grows from 8 to 11 slides: the eight paintings plus one slide each for gold leaf, silver leaf and rose gold.
- The textures are spaced through the rotation rather than grouped, so a leaf close-up appears every few slides.
- Each texture slide fills the hero band the same way the paintings do (cropped to the band), with the same 5-second hold and 3-second cross-fade, the same dark gradient, and the same eyebrow and headline on top.
- The navigation dots at the bottom right pick up three extra dots so a visitor can jump to any texture slide.

## Slide order

Lumiere de Soie, Gold leaf, Chic Soiree, Elegance de Nuit, Silver leaf, Rose Gala, Rose gold leaf, Rocky - Victory in Silence, Tresor Cote d'Azur, Balcon en Mediterranee, Promenade au bord de l'eau.

## Technical detail

- Upload the three uploaded textures as CDN assets with `lovable-assets create` from `/mnt/user-uploads/`, writing `src/assets/gold-leaf.jpg.asset.json`, `src/assets/silver-leaf.jpg.asset.json`, `src/assets/rose-gold.png.asset.json`.
- In `src/routes/index.tsx`, import those three pointer JSONs and insert entries into the existing `heroSlides` array at the positions above, using each pointer's `url` for `image` and bilingual alt text such as "Gold leaf texture detail" / "Detail de texture a la feuille d'or".
- No other changes: `HeroCarousel`, timings, dots, gradient and route metadata all stay as they are (the dots already map over `heroSlides`).
