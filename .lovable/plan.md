# Fix the missing biography portrait

## What's wrong

The biography page points at a portrait file that no longer exists in the project. When the artwork images were moved into the local `/public` folder, the portrait was left behind: the page still reads a pointer file (`src/assets/herve-teboul-portrait.jpg.asset.json`) that references `/herve-teboul-portrait.jpg`, but there is no such file in `public/`, so the browser gets nothing and the image area stays blank.

The original uploaded portrait (the black-and-white photo with arms crossed) is still available, so it can simply be restored.

## The fix

1. Place the portrait photo into the `public` folder as `herve-teboul-portrait.jpg`, matching the same lowercase naming used for the artwork.
2. Update the biography page to load the image directly from `/herve-teboul-portrait.jpg`, the same way the works images load.
3. Remove the now-unused pointer file so nothing references the broken path.
4. Verify the biography page renders the portrait in both English and French.

## Technical notes

- `src/routes/biography.tsx`: drop the `import portrait from "@/assets/herve-teboul-portrait.jpg.asset.json"` and use a plain `const portrait = "/herve-teboul-portrait.jpg"` constant for `src`.
- Copy `/mnt/user-uploads/39.jpg` to `public/herve-teboul-portrait.jpg`.
- Delete `src/assets/herve-teboul-portrait.jpg.asset.json`.
- Keep existing alt text, caption, lazy loading, and `plate` styling unchanged.
