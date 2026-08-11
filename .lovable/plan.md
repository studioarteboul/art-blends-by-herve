# Why the music starts silent, and how to fix it

## What's happening

The homepage audio is set to start playing on its own with sound on. Browsers (Chrome, Safari, Edge) block that: a page may not play audible sound until the visitor interacts with it. So the player loads, the browser refuses, and the site appears muted until you click or scroll.

There is no code bug to fix — this is a browser policy. There are only two honest ways around it.

## Option A (recommended): muted autoplay + obvious "sound on" control

- Start the track muted and playing. Muted autoplay is always allowed.
- Show the header speaker icon in a clearly "sound off" state with a small, tasteful "Sound on" label or subtle pulse the first time a visitor lands.
- One click unmutes instantly — the track is already running, so music begins without a load delay.
- Remember the choice for the session, so navigating pages doesn't re-prompt.

## Option B: keep trying to play on first interaction

- Keep the current behaviour but make it more reliable: attempt playback on the first click, scroll, key press, or touch anywhere on the page.
- Result: music starts a moment after the visitor does anything at all, with no visible prompt.
- Downside: a visitor who reads the page without interacting hears nothing, and it can feel unexpected when sound suddenly starts.

## Also worth checking

The live site may not yet include the most recent audio changes. Whichever option is chosen, the site should be published afterwards so herveteboul visitors get the updated behaviour.

## Technical notes

- `src/lib/audio.tsx` — adjust the initial state: for Option A, mount the element with `muted` and autoplay, and have `toggle()` set `muted = false` plus `play()` on first use; persist the preference in `sessionStorage`.
- `src/components/SiteHeader.tsx` — drive the icon from a combined `isPlaying && !muted` state, and add the first-visit hint affordance for Option A.
- `src/routes/index.tsx` — no change to the GitHub-hosted audio URL.
