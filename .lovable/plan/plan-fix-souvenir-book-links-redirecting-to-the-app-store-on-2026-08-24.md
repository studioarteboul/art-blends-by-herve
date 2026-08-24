# Plan: Fix Souvenir Book Links Redirecting to the App Store on Mobile

## Problem

On the `/publications` page, the two exhibition souvenir book links point to
`https://share.popsa.com/FMij/...`. When opened on a mobile phone (iPhone or
Android), these links hand off to the Popsa native app. If the app is not
installed, the phone falls back to the App Store / Play Store instead of showing
the photo book — exactly the behavior reported.

Verified by opening the links in a headless mobile browser:

- `share.popsa.com` on iPhone Safari fires `itms-appss://apps.apple.com/...` (the App Store redirect) and aborts the page load.
- On Android Chrome the load also aborts (Play Store handoff).
- On desktop the same link resolves to a normal web page, which is why it worked there.

## Root cause

`share.popsa.com` is Popsa's universal-link (app-deep-link) domain. On mobile it
redirects into the native app and, without the app installed, into the app
store. Popsa also has a plain browser URL that renders the same book and works
on every device.

## Fix

Replace the two `share.popsa.com` hrefs in `src/routes/publications.tsx`
(lines ~233 and ~270) with the direct browser URL for each book:

- Paris Le Louvre book:
  `https://share.popsa.com/FMij/22db9222-42c9-45d6-98af-9bf6b60d378e`
  → `https://popsa.com/shared-print/22db9222-42c9-45d6-98af-9bf6b60d378e/`

- MEAM Barcelona book:
  `https://share.popsa.com/FMij/4872dc01-9e14-4338-803b-83fa2f010fcf`
  → `https://popsa.com/shared-print/4872dc01-9e14-4338-803b-83fa2f010fcf/`

These `popsa.com/shared-print/{id}/` URLs were confirmed to return HTTP 200 and
render the photo book web app on iPhone Safari and Android Chrome without any
app-store redirect. `target="_blank"` and `rel="noopener noreferrer"` stay
unchanged, so the book still opens in a new tab.

## Verification

- Open `/publications` in a mobile viewport (iPhone and Android).
- Click each "Open photo book" button / cover.
- Confirm the photo book loads in the browser instead of the App Store / Play Store.
- Confirm the same links still work on desktop.