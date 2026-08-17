# Plan: Rename Souvenir Book Buttons

## Goal
Update the button labels under the two souvenir book covers on the Publications page from "View online / Voir en ligne" to "Open photo book / Ouvrir le livre photo".

## Proposed Changes

1. **Update the persistent button labels in `src/routes/publications.tsx`**
   - Change the text rendered under the Paris Le Louvre souvenir cover.
   - Change the text rendered under the MEAM Barcelona souvenir cover.
   - English: **"Open photo book"**
   - French: **"Ouvrir le livre photo"**

2. **Update the hover overlay text to match**
   - The centered overlay that currently says "View online / Voir en ligne" should also be updated to "Open photo book / Ouvrir le livre photo" so the language is consistent across both states.

## Verification
- Preview the `/publications` route in English and French.
- Confirm both the persistent button labels and the hover overlays show the new text.
- Confirm clicking still opens the correct Popsa URLs.
