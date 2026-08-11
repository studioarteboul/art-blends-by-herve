# Plan: Add Social Media Links

## Goal
Add the artist's Instagram, Facebook page, and personal Facebook profile links to the site in a minimal, bilingual way that matches the existing understated design.

## Placement
1. **Site footer** — add a small row of social links so they appear on every page without competing with the artwork.
2. **Contact page** — add the same links near the studio email and available-works links, where visitors are already in a reach-out mindset.

## Links to add
| Platform | Label (EN) | Label (FR) | URL |
| --- | --- | --- | --- |
| Instagram | Instagram | Instagram | `https://www.instagram.com/studioarteboul` |
| Facebook page | Facebook Page | Page Facebook | `https://www.facebook.com/studioarteboul` |
| Facebook profile | Facebook Profile | Profil Facebook | `https://www.facebook.com/herve.teboul.7` |

## What will change

### `src/components/SiteFooter.tsx`
- Insert a small inline list of external links between the studio address and the copyright line, using the same `text-muted-foreground` / hover styling as the header.
- Each link opens in a new tab with `rel="noreferrer"`.

### `src/routes/contact.tsx`
- Add a new entry in the contact details definition list below "Available works" titled **Social** / **Réseaux sociaux**.
- List the three links in the same visual style as the existing Arte Laguna World / Artio Gallery links.

## Bilingual text
All labels are translated; the URLs remain unchanged.

## Verification
After editing, run a production build to confirm the footer and contact page render correctly and all links are valid external anchors.
