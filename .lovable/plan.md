# Start the music at page load

## The honest constraint

No browser will let a page play audible sound before the visitor interacts with it. That rule is enforced by Chrome, Safari, Edge and Firefox, and no code can bypass it. The one thing that is always allowed is **muted autoplay**.

So the closest possible behaviour to "music starts on load" is: the track starts playing the instant the page loads, silently, and becomes audible on the visitor's very first interaction — with a clear control so they know sound is there.

## What will change

- The track starts playing muted the moment the homepage loads, so it is already running and buffered.
- The header speaker icon shows a "sound off" state on arrival, with a small, understated "Sound on" label the first time a visitor lands, so the music is discoverable rather than hidden.
- The first click, tap, scroll or key press anywhere unmutes it automatically — no delay, no restart, the music simply becomes audible mid-track.
- The visitor's choice is remembered for the session: if they mute it, it stays muted while they browse; navigating between pages does not restart or re-prompt.
- Music remains homepage-only and loops continuously.

The practical result: for nearly every visitor, sound arrives within the first second, and it never restarts from the beginning when it does.

## Technical notes

- `src/lib/audio.tsx` — mount the audio element with `muted` and `autoPlay` so playback begins immediately; on the first gesture (`pointerdown`, `keydown`, `touchstart`, `scroll`) set `muted = false` rather than calling `play()`, unless the visitor already chose silence. Track `muted` alongside `isPlaying` in context and persist the preference to `sessionStorage`.
- `src/components/SiteHeader.tsx` — drive the icon from `isPlaying && !muted`; show the first-visit "Sound on" hint until the visitor interacts with the control.
- `src/routes/index.tsx` — unchanged; keeps the GitHub-hosted audio URL.
- Publish afterwards so the live site picks up the new behaviour.
