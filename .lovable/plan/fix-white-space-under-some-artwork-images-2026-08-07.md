# Fix white space under some artwork images

## What's happening

The works grid places each piece in a row of four. CSS grid stretches every cell in a row to the height of the tallest item, but each image keeps its own natural height (`h-auto`). Shorter or wider paintings therefore leave the pale card background exposed below the image — the white strip you're seeing.

## The fix

Give every tile a consistent frame so the artwork always fills it:

- Set a uniform portrait aspect ratio on the tile (`aspect-[4/5]`, matching the dominant 122 x 91 cm format).
- Make the image fill that frame with `h-full w-full object-cover`, so nothing is left uncovered.
- Keep hover caption behaviour unchanged.

Trade-off: with a uniform frame, the few landscape pieces (Supercar 150 x 90, the Mediterranean canvases) get slightly cropped top/bottom. Alternative if you'd rather never crop: keep natural heights and just add `items-start` to the grid, which removes the white by letting tiles size themselves — rows then have uneven bottoms.

## Technical detail

In `src/routes/index.tsx`, `WorkCard`: add the aspect ratio to the `<figure>` and change the `<img>` classes from `max-w-full h-auto object-cover` to `h-full w-full object-cover`.
