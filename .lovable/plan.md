Update site audio track to use the newly uploaded file

Goal: Replace the current background music on the homepage with the uploaded audio file (Cielo_Ardent_-_Oia_at_Sunset_1-2.mp3).

Steps:

1. Upload the uploaded MP3 to Lovable Assets CDN
   - Use the lovable-assets CLI from the /mnt/user-uploads/ mount.
   - Save the generated .asset.json pointer file to src/assets/.

2. Update the audio source in the code
   - Point the audio player in src/routes/index.tsx to the new CDN URL from the asset pointer.

3. Build and verify
   - Run bun run build to ensure the change compiles cleanly.
   - Verify the audio player still renders on the homepage and the toggle works.

Technical notes:
- The audio player is currently rendered on the homepage only and is muted by default to allow autoplay.
- No other site logic changes; this is purely swapping the audio source.
