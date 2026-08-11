# Move all artwork images to /public

## Current state

- Series I–III (Brilliance & Symbolism, French Riviera, Inspiration Japon) already load from `/public` with lowercase names (`/supercar.jpg`, `/promenade-au-bord-de-l-eau.jpg`, `/ij1.jpg` …).
- Series IV–VI (Caseisme Collection, Impressionism Revisited, Period of Provence) still load from CDN pointer files in `src/assets/` — 40 images total: `cc1–cc12`, `ir1–ir5`, `pr1–pr23`.

## What will change

1. Download the 40 CDN images into `/public` using the exact lowercase names already in use: `/cc1.jpg` … `/cc12.jpg`, `/ir1.jpg` … `/ir5.jpg`, `/pr1.jpg` … `/pr23.jpg`.
2. In the works page, remove the 40 `.asset.json` imports and reference the images as plain local paths, so every collection follows the same pattern as Series I–III.
3. Delete the now-unused pointer files from `src/assets/`.
4. Apply `className="max-w-full h-auto object-cover"` to the artwork images in the main grids.

## Note on image cropping

The grids currently use `object-contain`, which was set earlier so paintings show at their true proportions with no cropping. Switching to `object-cover` as requested can crop the edges of non-square paintings. The plan uses `object-cover` as asked; say the word if you'd rather keep the uncropped look.

## Technical detail

- Files touched: `src/routes/index.tsx`, new files in `public/`, removal of `src/assets/{cc,ir,pr}*.jpg.asset.json`.
- The hero carousel keeps its `object-cover` full-bleed styling.
- Verified with a build after the change.
