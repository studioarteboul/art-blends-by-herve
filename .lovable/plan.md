# Add a subtle "under construction" notice

## Goal
Show a quiet, bilingual notice that the site is still being built, without disturbing the minimal, art-forward design.

## Where
A thin, low-contrast banner at the very top of every page, sitting above the sticky header. It scrolls away as you scroll while the header stays pinned.

## Design
- Full-width bar, single centered line of small uppercase text in the muted foreground color (the same voice as the footer/nav micro-labels).
- Thin bottom border to separate it from the header.
- No icon, no color block, no animation — intentionally understated.
- Bilingual via the existing `useLang()`/`t()` helper, so it follows the EN/FR toggle.

Copy:
- EN: `Website under construction`
- FR: `Site en construction`

## Files
- `src/components/ConstructionNotice.tsx` (new) — small component rendering the bar.
- `src/routes/__root.tsx` — import and render `<ConstructionNotice />` directly above `<SiteHeader />` in `RootComponent`.

## Technical details
- The banner lives in `__root.tsx` before the sticky header, so it naturally scrolls out of view while `SiteHeader` (sticky `top-0`) remains pinned.
- Styling reuses existing design tokens (`text-muted-foreground`, `border-border`, `text-[0.65rem] uppercase tracking-[0.22em]`), consistent with the current typography, with `text-center py-2`.
- No new dependencies.

## Verify
- Site builds cleanly.
- Preview shows the banner centered at the top on Works, Biography, Exhibitions, Publications, and Contact; the header still sticks on scroll.
- Toggling EN/FR swaps the wording.
