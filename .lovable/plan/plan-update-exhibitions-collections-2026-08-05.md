# Plan: Update Exhibitions & Collections

## Goal
Add the artist's verified exhibitions, awards, and dictionary listings to the bilingual Exhibitions & Collections page while preserving the existing minimal layout.

## What will change

### `src/routes/exhibitions.tsx`
1. **Exhibitions list** — append the new entries and sort the full list reverse-chronologically:
   - 2026 — Museum MEAM Barcelona with Artio Gallery
   - 2026 — Le Louvre Paris with Artio Gallery
   - 2025 — Expo New York with Artio Gallery at One Art Space
   - 2024 — Art Shopping — Carrousel du Louvre
   - 2023 — Inaugural Exhibition, Studio ARTeboul
   - 2019 — Group Exhibition — Contemporary Mixed Media
   - 2012 — Solo Exhibition — Metallic Surfaces
   - 2006 — "Art Expo" Javits Center New York
   - 2001–2025 — Studio-Galerie Arteboul
   - 2001 — Solo Exhibition — Mediterranean Light
   - 2000 — Galerie Brigitte Desroches
   - 1999 — "Festival Provence" Hôtel Bonne Aventure

2. **Distinctions section** — add the new award line:
   - "2nd prize winner of the International Art Talent 2025"

3. **Dictionary listings** — replace the generic sentence with the three named publications as a bullet list:
   - DROUOT internationale cotation des artistes modernes et contemporains, LAROUSSE
   - Guide de Roussan, Marché de l'art au Québec
   - REPERTOIRE BIENNAL des artistes Canadiens en galeries, MAGAZIN'art

## Bilingual text
Every new entry will receive a French translation matching the existing page voice. The dictionary titles are proper names and remain unchanged.

## Verification
After editing, run a production build to confirm the file compiles and the route renders correctly.
