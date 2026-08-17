# Plan: Make Exhibition Souvenir Books Clearly Clickable

## Goal
Add an obvious button-style indicator under each souvenir book cover in the Publications page so visitors immediately understand that both the Paris Le Louvre and MEAM Barcelona books are clickable links.

## Proposed Changes

1. **Persistent button-style labels**
   - Add a small, outlined button directly beneath each book cover caption in the `EXHIBITIONS SOUVENIRS` section of `src/routes/publications.tsx`.
   - Text (bilingual):
     - English: **"View online"**
     - French: **"Voir en ligne"**
   - The button uses the existing `ExternalLink` icon from `lucide-react` to reinforce the "opens away" action.

2. **Keep the existing hover overlay**
   - The current centered "View online / Voir en ligne" hover overlay remains as a secondary cue on desktop.

3. **Visual style**
   - Use the site's primary button aesthetic (outlined border, uppercase tracking, small text) to match the existing minimal design language.
   - Ensure the button is centered under each cover, with comfortable spacing from the caption.

4. **No layout changes**
   - Keep the two-column grid as-is.
   - No new pages, routes, or dependencies.

## Verification
- Preview the `/publications` route on desktop and mobile.
- Confirm both souvenir covers show a clear button below each caption.
- Click each button to ensure it opens the correct Popsa URL.
- Confirm the existing hover overlay still works on desktop.
