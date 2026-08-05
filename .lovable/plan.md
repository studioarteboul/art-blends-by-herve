# Plan: Update Exhibitions & Collections

## Goal
Replace the current placeholder exhibitions list with the artist's verified CV, add the 2025 distinction, and list the specific art dictionaries that have catalogued his work since 2001.

## What will change

### `src/routes/exhibitions.tsx`
1. **Exhibitions list** — merge the artist's new entries with the existing ones, sorted reverse-chronologically:
   - 2026 — Museum MEAM Barcelona with Artio Gallery
   - 2026 — Le Louvre Paris with Artio Gallery
   - 2025 — Expo New York with Artio Gallery at One Art Space
   - 2024 — Art Shopping — Carrousel du Louvre
   - 2001–2025 — Studio-Galerie Arteboul
   - 2006 — "Art Expo" Javits Center New York
   - 2000 — Galerie Brigitte Desroches
   - 1999 — "Festival Provence" Hôtel Bonne Aventure
   - 2003 — Inaugural Exhibition, Studio ARTeboul
   - 2019 — Group Exhibition — Contemporary Mixed Media
   - 2012 — Solo Exhibition — Metallic Surfaces
   - 2001 — Solo Exhibition — Mediterranean Light
2. **Distinctions section** — add "2nd prize winner of the International Art Talent 2025" with French translation.
3. **Art dictionaries section** — replace the generic sentence with a bullet list of the three named publications.

## Bilingual text
Every new entry will receive a French translation consistent with the existing tone of the page. The three dictionary titles are proper names and will remain unchanged.

## Verification
After editing, run a production build to confirm the file compiles and the route renders correctly.
