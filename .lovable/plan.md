# Tap-to-reveal painting info on mobile and tablet

## Goal

Let visitors on touch devices see the same painting title, medium, year, and dimensions that desktop users see on hover. Keep the desktop hover experience unchanged.

## What will change

Update the `WorkCard` component in `src/routes/index.tsx` so that tapping a painting on mobile/tablet toggles the dark caption overlay.

### Implementation

1. **Add local state** to `WorkCard` to track whether the caption is revealed.
2. **Make the card tappable**:
   - Add an `onClick` handler on the `<figure>` that toggles the revealed state.
   - Add keyboard support (`Enter` / `Space`) and ARIA attributes (`role="button"`, `tabIndex={0}`, `aria-pressed`) so the interaction is accessible.
3. **Conditional caption visibility**:
   - Mobile/tablet: caption opacity follows the React state.
   - Desktop (`lg:`): caption stays hidden until hover, exactly as it is now (`group-hover:opacity-100`).
4. **Preserve existing styling**: keep the gradient overlay, typography, spacing, and image scale animation intact.
5. **Avoid scroll interference**: a single tap toggles; scrolling still works normally because the handler fires on click, not touchstart.

### Verification

- Test on mobile and tablet preview widths that tapping a painting reveals and hides its info.
- Confirm desktop hover still shows the caption without needing a click.
- Confirm the build passes.
