# Plan: Host audio on GitHub and fix the player controls

## Goal
Replace the current Lovable-hosted audio asset with a public GitHub raw URL, keep the music playback restricted to the homepage, and fix the header icon so it actually starts and stops the audio (not just mute/unmute). The site domain connection will not be needed.

## Steps

### 1. Upload the MP3 to GitHub and obtain the raw URL

Option A — new GitHub repository (recommended):

1. Create a new public repository on GitHub, e.g. `herve-teboul-media` or `arteboul-audio`.
2. Upload the file `Cielo Ardent - Oia at Sunset 1.mp3` to that repository (drag-and-drop on the repository home page works).
3. Commit the file (default commit message is fine).
4. Click the file name, then click the **Raw** button.
5. Copy the full URL from the browser address bar. It will look like:
   `https://raw.githubusercontent.com/<username>/<repo>/<branch>/Cielo%20Ardent%20-%20Oia%20at%20Sunset%201.mp3`

Option B — existing repository:

- Upload the file into an existing public repo and copy the raw URL the same way.

Note: the repository must be public for the site to stream the file. Private repositories return a login page instead of the MP3 bytes.

### 2. Update the audio source in code

- In `src/routes/index.tsx`, replace the local asset import (`cielo-ardent-oia-at-sunset-1-2.mp3.asset.json`) with the GitHub raw URL from Step 1.
- Pass that URL into the `AudioPlayer` component.
- Remove any remaining `AudioPlayerBar` import and rendering from the homepage.

### 3. Fix the audio controls

The current header icon only toggles mute, which means the audio is technically already playing silently but browsers often block autoplay with sound. We will switch to a real play/pause model:

- In `src/lib/audio.tsx`: expose `play()`, `pause()`, and `toggle()` methods that call the actual HTMLAudioElement API.
- In `src/components/SiteHeader.tsx`: change the homepage icon to use `toggle()` and display the icon based on `isPlaying` rather than `muted`.
- Keep the audio auto-playing only when the user explicitly turns it on (browser autoplay policy), and loop it on the homepage only.

### 4. Clean up local audio assets

- Delete the local asset pointer file `src/assets/cielo-ardent-oia-at-sunset-1-2.mp3.asset.json` if it still exists.
- Delete the local MP3 file in `public/` if it still exists, since the site will now stream from GitHub.
- Delete `src/components/AudioPlayerBar.tsx` if it is no longer used anywhere.

### 5. Verify and publish

- Run the dev build to confirm there are no import or reference errors.
- Preview the homepage, confirm the header icon appears, and that clicking it starts and stops the music.
- Publish the site so the live version uses the GitHub-hosted audio URL.

## Outcome

- Music is served from a public GitHub raw URL.
- The header icon on the homepage is the only visible control and it toggles play/pause correctly.
- No local MP3 remains in the project, so the domain question is irrelevant to the audio.
