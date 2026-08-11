# Match the newer collections to Brilliance & Symbolism

## What's happening

All collections already use the same grid component. The difference is the source images: the Brilliance & Symbolism paintings are all the same portrait format, so that grid looks even. Caseisme, Impressionism Revisited and Period of Provence mix portrait, square and landscape photos, so the tiles end at different heights and the rows look ragged.

## The change

Give Caseisme Collection, Impressionism Revisited and Period of Provence the same uniform tile framing as Series I:

- Each tile uses a fixed portrait frame matching the Series I proportion (4:5).
- Images fill that frame edge to edge, so rows line up cleanly with no background strips.
- Hover captions, spacing, gaps and column counts stay exactly as they are today.

Trade-off: wide/landscape pieces in these three collections get slightly trimmed top and bottom to fit the frame. If you'd rather keep every painting fully uncropped, say so and the tiles can instead be letterboxed inside the frame (uniform tiles, small blank margins on odd ratios).

## Technical notes

- In `src/routes/index.tsx`, add an optional `uniform` prop to `Series`, passed down to `WorkCard`.
- When `uniform` is set: `<figure>` gets `aspect-[4/5]` and the `<img>` switches from `w-full h-auto object-contain` to `h-full w-full object-cover`.
- Pass `uniform` on the Series IV, V and VI blocks only; Series I, II and III render unchanged.
