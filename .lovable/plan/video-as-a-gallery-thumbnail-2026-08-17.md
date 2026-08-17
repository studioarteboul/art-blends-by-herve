# Video as a gallery thumbnail

Make the Brilliance & Symbolism studio film sit inside the painting grid instead of above it, sized like the other artworks, with a play icon marking it as a video.

## What changes

- The video moves into the artwork grid as the first tile of the Brilliance & Symbolism collection.
- It shows the poster frame, cropped and sized exactly like the neighbouring painting tiles, so the row stays even.
- A circular play button sits centred over the poster, with a subtle dark scrim so it reads clearly against bright textures.
- Clicking the tile starts playback in place (controls appear, poster and play icon disappear).
- Caption under the tile keeps the existing bilingual label, matching the painting caption style.

## Technical notes

In `src/routes/index.tsx`:
- Replace the standalone `<figure>` video block in the `Series` component with a `VideoCard` component rendered as the first child of the existing grid (`grid ... sm:grid-cols-2 lg:grid-cols-4`).
- `VideoCard` uses the same figure/caption markup and image classes as `WorkCard` so aspect ratio and cropping match.
- Local `playing` state: before play, render the poster `<img>` plus an absolutely positioned play button (`Play` icon from `lucide-react`); on click, swap to `<video autoPlay controls playsInline>`.
- No changes to data, routing, or other collections.
