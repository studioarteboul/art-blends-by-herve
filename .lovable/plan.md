# Add an information indicator to artwork tiles on mobile and tablet

## What will change

The Works page already supports tap-to-reveal painting details on mobile and tablet, but there is no visual cue telling visitors they can tap. Add a subtle "i" (information) icon to each `WorkCard` on non-desktop viewports.

## Implementation

Changes to `src/routes/index.tsx` inside the `WorkCard` component:

1. **Import an info icon** from `lucide-react` (e.g. `Info`) alongside the existing `Play` import.
2. **Render the icon only on mobile/tablet** using a `lg:hidden` class so the desktop hover experience remains unchanged.
3. **Position the icon** in the top-right corner of the card, above the image, with a small semi-transparent circular background so it remains readable against varied artwork.
4. **Show/hide behavior**:
   - The icon is visible when the caption is hidden (`opacity-100` when `!isRevealed`).
   - The icon fades out (`opacity-0`) when the caption is revealed, so it does not overlap the painting details.
5. **Accessibility**: add an `aria-hidden="true"` attribute to the icon (the existing `aria-label` on the card already explains the tap action). Keep the icon `pointer-events-none` so it does not block the tap target.
6. **Styling**: use the existing semantic tokens — `bg-primary/40`, `text-primary-foreground`, `backdrop-blur-sm` — to match the play button overlay style.

## Verification

- Capture preview screenshots at mobile (~375 px) and tablet (~768–834 px) widths to confirm the icon appears on every painting tile.
- Tap a tile and confirm the icon disappears while the caption overlay appears.
- Confirm the icon is not visible on desktop and that hover still reveals the caption.
- Confirm the build passes.
