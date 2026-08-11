# Plan: Replace Social Media Text with Icons

## Goal
Replace the current text-based social media links in the footer and contact page with recognizable platform icons, keeping the links accessible and bilingual labels intact.

## What will change

### `src/components/SiteFooter.tsx`
- Replace the horizontal list of text links (`Instagram`, `Facebook Page`, `Facebook Profile`) with icon-only buttons.
- Use `lucide-react` icons: `Instagram` for Instagram, and `Facebook` for both Facebook links.
- Keep each link's `href`, `target="_blank"`, `rel="noreferrer"`, and add `aria-label` for screen readers (e.g. "Instagram", "Facebook Page", "Facebook Profile").
- Maintain the same muted-to-foreground hover color transition.

### `src/routes/contact.tsx`
- In the "Social / Réseaux sociaux" section, replace the stacked text links with a horizontal row of icon buttons.
- Use the same `Instagram` and `Facebook` icons from `lucide-react`.
- Keep `aria-label` attributes and hover styling consistent with the footer.
- Preserve the same link URLs and the bilingual section label.

## Design notes
- Icons will use `currentColor` so they inherit the surrounding text color and hover state.
- Size will be consistent with the site's minimal scale (likely `size={20}`).
- No new dependencies expected; `lucide-react` is already available in the project.

## Verification
Run a production build to confirm the icons import correctly, the route renders, and no accessibility warnings are introduced.
