# Add homepage background music

Add the uploaded song as ambient background music on the homepage only, with a minimal header toggle.

## What will change

- Upload the attached MP3 to Lovable Assets so the audio file is served from the CDN.
- Create a small `AudioProvider` in `src/lib/audio.tsx` that manages the HTML5 `<audio>` element, muted state, and play/pause status.
- In `src/routes/index.tsx`, render the `<audio>` element with `autoPlay`, `muted` by default, and `loop`, using the uploaded CDN asset URL.
- In `src/components/SiteHeader.tsx`, add a minimal music-toggle button (speaker / sound-on / sound-off icon) that appears only on the homepage (`/`). Clicking it unmutes the audio and shows a playing state.
- Ensure the audio stops when the user navigates away from the homepage.
- Verify the build succeeds and the preview plays correctly.

## Behavior

- Playback: autoplay, but muted initially (required by modern browsers).
- Scope: homepage only.
- Control: one header icon that toggles mute/unmute.
- Looping: continuous.

## Files to modify

- `src/lib/audio.tsx` — new audio context/provider.
- `src/routes/index.tsx` — render audio element and connect to provider.
- `src/components/SiteHeader.tsx` — add homepage-only audio toggle button.
- `src/assets/cielo-ardent.mp3.asset.json` — new CDN asset pointer (created from the uploaded file).
