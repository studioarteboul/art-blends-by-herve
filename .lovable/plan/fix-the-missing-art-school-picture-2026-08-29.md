# Fix the missing art school picture

## What's wrong

The biography page loads the art school photo from a CDN pointer file (`src/assets/studio-arteboul-art-school.jpeg.asset.json`). That CDN URL is not rendering on the published live site, so the studio image area appears blank. Every other image on the site (including the portrait, which had the same problem) is served from the local `public/` folder and works fine.

## The fix

Apply the same approach that fixed the portrait:

1. Copy the original uploaded photo (`Studio_Arteboul_art_school.jpeg`) into the `public` folder as `studio-arteboul-art-school.jpeg`, matching the lowercase naming used by all other images.
2. Update the biography page to load the image directly from `/studio-arteboul-art-school.jpeg` instead of the CDN pointer.
3. Remove the now-unused pointer file so nothing references the broken CDN URL.
4. Verify the picture renders on the biography page in both English and French, then it will appear on the live site after the next publish.

## Technical notes

- `src/routes/biography.tsx`: drop the `import artSchoolImage from "@/assets/studio-arteboul-art-school.jpeg.asset.json"` and use a plain `const artSchoolImage = "/studio-arteboul-art-school.jpeg"` (adjusting the `src={artSchoolImage.url}` usage to `src={artSchoolImage}`).
- Copy `/mnt/user-uploads/Studio_Arteboul_art_school.jpeg` to `public/studio-arteboul-art-school.jpeg`.
- Delete `src/assets/studio-arteboul-art-school.jpeg.asset.json`.
- Keep the caption overlay, alt text, lazy loading, and `plate` styling unchanged.
- A re-publish is required for the fix to reach the live website.
