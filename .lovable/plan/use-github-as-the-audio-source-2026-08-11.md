Use GitHub as the audio source

- Keep the background music sourced from the GitHub raw URL only (no local audio files, no Lovable Assets, no custom domain changes).
- Confirm there are no leftover local MP3 files or asset manifests in the project.
- If the user provides a different GitHub URL, update `AUDIO_URL` in `src/routes/index.tsx` to that link.
- Verify the audio control in the header still works after the change.
- Publish the updated version so the live preview reflects the GitHub audio source.
