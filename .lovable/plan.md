# Music at page load — closest achievable behaviour

## The constraint

Every modern browser blocks audible sound until the visitor interacts with the page. No code can start audible music at load. The only playback always permitted at load is **muted autoplay**.

## What will change

- The track begins playing the instant the homepage loads — silently, already running and buffered, so there is no delay or restart when it becomes audible.
- The header speaker icon is elevated into a clear, understated "Sound on" affordance on arrival: icon plus a small caption and a gentle pulse, styled to match the minimal art-forward design. It stops calling attention once the visitor engages.
- Any first interaction — click, tap, scroll, key press — unmutes the already-running track, so it becomes audible mid-phrase rather than starting over.
- If the visitor mutes it, that choice sticks for the whole session; navigating between pages never re-prompts or restarts the track.
- Music stays homepage-only and loops.

Net effect: sound is present from the first moment and reaches nearly every visitor within a second, with a visible cue for anyone who does not interact right away.

## Technical notes

- `src/lib/audio.tsx` — mount the audio element with `muted` and `autoPlay` so playback starts at load; on first gesture set `muted = false` instead of calling `play()`, unless the visitor already chose silence. Track `muted` alongside `isPlaying` in context; persist the preference to `sessionStorage` (read inside `useEffect`, never during render).
- `src/components/SiteHeader.tsx` — drive the icon from `isPlaying && !muted`; render the first-visit "Sound on" hint until the visitor interacts, then retire it.
- `src/routes/index.tsx` — unchanged; keeps the GitHub-hosted audio URL.
- Publish afterwards so the live site reflects the new behaviour.
