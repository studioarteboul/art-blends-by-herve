# Show each painting uncropped, at its true ratio

## Goal

Keep every artwork's real proportions (no cropping) while avoiding the white strip that appeared before.

## Approach

- Remove the fixed `aspect-[4/5]` frame from the tile and let the image set the tile height again, using `w-full h-auto`.
- Add `items-start` to both artwork grids so cells no longer stretch to the tallest item in the row — that stretching was what exposed the card background underneath shorter images.
- Result: each painting shows in full at its own ratio; rows may end at slightly different heights, which reads as a natural gallery hang.

## Technical detail

In `src/routes/index.tsx`:
- `WorkCard`: `<figure>` back to `group relative overflow-hidden bg-card plate` (no aspect ratio); `<img>` uses `w-full h-auto object-contain` plus the existing hover scale transition.
- `Series`: grid container becomes `grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-4`.
