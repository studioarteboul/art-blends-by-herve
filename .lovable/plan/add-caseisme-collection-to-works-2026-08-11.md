# Add "Caseisme Collection" to Works

## What will change

A fourth collection is added to the Works page, below "Inspiration Japon":

- Title: **Caseisme Collection** (same in English and French), numbered Series IV.
- Ten paintings from the uploaded images, titled **CC1** through **CC10** in the order they were provided: the blue-green foliage over water, the bearded figure in a hat, the white-robed figure, the elder in a blue hat, the figure in a black hat on gold, the still life with bowls, the lavender path, the trees over turquoise water, the orchard, and the archway of flowers.
- Each is captioned "Oil on canvas / Huile sur toile" in the visitor's chosen language, matching the caption pattern used by the other collections.
- A short bilingual introduction describing the collection's signature mosaic of thick palette-knife strokes, where each small block of colour builds the whole image.

The gallery layout, spacing and aspect-ratio handling stay exactly as they are in the existing collections, so the new works display uncropped at their true proportions.

## Notes

- No year or dimensions are shown for these works, since none were provided. Send them and captions can be filled in.
- Nothing is added to the homepage hero slideshow; it keeps its current eight images.

## Technical notes

- Upload the ten images through Lovable Assets and reference the resulting CDN pointers, matching how project media is served.
- In `src/routes/index.tsx`: add a `caseisme: Work[]` array of ten entries (`titleEn`/`titleFr` = `CC1`–`CC10`, `mediumEn: "Oil on canvas"`, `mediumFr: "Huile sur toile"`, empty `year` and `dimensions`), then render a fourth `<Series index="IV" ... works={caseisme} />` after the Series III block.
- Confirm the `WorkCard` caption renders cleanly when `year` is empty; adjust the caption join so no stray comma appears.
