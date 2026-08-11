# Fix homepage music: use the public MP3, remove the player bar, make the header icon play

Three issues to settle:

1. The visible player bar is still rendered on the homepage, so it is still on the live site.
2. The header sound icon only toggles mute. Browsers block autoplay, so the hidden audio element is typically never playing — unmuting a paused track gives silence.
3. The audio source should be the file already sitting in the project's public folder: `/Cielo Ardent - Oia at Sunset 1.mp3`.

## What will change

- Point the site audio at the public MP3 (`/Cielo%20Ardent%20-%20Oia%20at%20Sunset%201.mp3`) instead of the CDN asset pointer.
- Remove the player bar from the homepage and delete its component file.
- Turn the header sound icon into a real play/pause control: first click starts playback unmuted, later clicks pause and resume, and the icon reflects the actual state.
- Keep the icon homepage-only, styled as it is today.

## Technical notes

- `src/routes/index.tsx`: drop the `AudioPlayerBar` import and render, drop the `.asset.json` import, and pass the encoded public path to `<AudioPlayer />`.
- Delete `src/components/AudioPlayerBar.tsx`.
- `src/lib/audio.tsx`: replace the mute-only API with a `toggle()` that calls `audio.play()` (setting `muted = false`) when paused and `audio.pause()` when playing, handling the play promise rejection. Remove the hardcoded `autoPlay`/`muted` attributes; keep `loop`.
- `src/components/SiteHeader.tsx`: bind the button to the new toggle and drive the icon from `isPlaying`.
- The old CDN audio asset pointer stays untouched for now; it can be cleaned up separately.

Publishing is still required for the live site to pick this up.
