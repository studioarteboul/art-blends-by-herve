# Add a self-published digital magazine with an on-site flipbook viewer

Popsa does not allow its viewer to be shown inside another website (it blocks embedding), so the magazine will live directly on your site as a page-turning reader, similar to the Issuu reader Artio uses.

## What gets added

A new Publications entry:

- Year: 2026
- English: Exhibition Souvenir Booklet — Paris Le Louvre
- French: Livret souvenir d'exposition — Paris Le Louvre
- Credit line: Self-published / Auto-publié

Below the title, the cover appears with a "Read the magazine" / "Lire le magazine" button that opens a full-screen flipbook.

## The flipbook reader

- Full-screen overlay on the site's dark minimal background.
- Two-page spread on desktop, single page on mobile.
- Page-turn animation, arrow buttons, keyboard arrows, swipe on touch, click a page edge to turn.
- Page counter (e.g. 7 / 24) and a close button.

## What I need from you

The magazine pages. Either:

- the PDF of the booklet (best — I convert each page to an optimized web image), or
- the page images exported in order.

Once you send them, I convert them to sequential files in `/public` (`booklet1.jpg`, `booklet2.jpg`, …) and wire them into the entry.

## Technical notes

- New `src/components/Flipbook.tsx`: self-contained viewer (no external flipbook dependency; CSS 3D transforms + React state), reused for future magazines.
- `src/routes/publications.tsx`: the `Publication` type gains optional `pages: string[]` and `externalUrl`; entries with `pages` render the cover + reader button instead of the plain photo grid. Existing entries are unchanged.
- Bilingual strings via the existing `useLang` `t()` helper.
- Images resized to ~1600px wide, JPEG quality ~82, for fast loading.
