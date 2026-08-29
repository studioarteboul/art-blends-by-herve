# Reduce artwork tile size on tablet and mobile

## What will change

The Works page gallery tiles currently fill a single column on mobile and two columns on tablet, which makes each painting feel oversized on smaller screens. The desktop four-column layout will stay unchanged.

Changes to `src/routes/index.tsx`:

- **Tablet (`sm`)**: change the `Series` grid from `sm:grid-cols-2` to `sm:grid-cols-3` so each tile is roughly one-third of the width instead of one-half.
- **Mobile**: keep one column but constrain each `WorkCard` so it does not stretch edge-to-edge. Add a wrapper/max-width (e.g. `max-w-sm mx-auto`) to the card on narrow viewports, preserving the existing hover caption behaviour.
- **Spacing**: reduce the grid gap on mobile/tablet (`gap-4`) and restore the current `gap-6` only at desktop (`lg:gap-6`).
- **Verification**: capture preview screenshots at mobile (~375 px) and tablet (~768–834 px) widths to confirm the tiles feel balanced and the captions remain readable.

No copy, content, or desktop layout changes.
