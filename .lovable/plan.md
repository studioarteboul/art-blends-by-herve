# Fix homepage music: remove player bar, make the header icon actually play

Two things are wrong right now:

1. The visible player bar is still in the homepage code (`AudioPlayerBar` is still rendered under the hero), so it is still on the live site.
2. The header sound icon only toggles mute. Browsers block autoplay, so the hidden audio element is usually never playing at all — unmuting a paused track produces silence.

## What will change

- Remove the player bar from the homepage and delete the now-unused component file.
- Change the header icon from a mute toggle into a real play/pause control: the first click starts playback (unmuted), later clicks pause and resume. The icon reflects the actual state (sound on / sound off).
- Keep the icon on the homepage only, same minimal styling as today.

## Technical notes

- `src/routes/index.tsx`: drop the `AudioPlayerBar` import and render; keep `<AudioPlayer src={audioAsset.url} />`.
- Delete `src/components/AudioPlayerBar.tsx`.
- `src/lib/audio.tsx`: replace the mute-only API with a `toggle()` that calls `audio.play()` (and sets `muted = false`) when paused, `audio.pause()` when playing, with the promise rejection handled. Remove the hardcoded `autoPlay`/`muted` attributes so state is driven from the toggle.
- `src/components/SiteHeader.tsx`: bind the button to the new toggle and use `isPlaying` for the icon.

After the change, publish is still required for the live site to update.
