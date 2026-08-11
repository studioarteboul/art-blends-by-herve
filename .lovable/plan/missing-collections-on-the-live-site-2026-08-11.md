# Missing collections on the live site

## What I found

The three collections render correctly in the preview: all 40 images (Caseisme 12, Impressionism Revisited 5, Period of Provence 23) load with no broken files, and each image URL returns a valid JPEG.

The live site at art-blends-by-herve.lovable.app does not contain those sections at all — not the images, not even the section titles. It is still serving an older published version from before these collections were added.

## The fix

Publish the site. There is no code change needed; the current code is correct.

## Steps

1. Publish the project so the live site picks up the current version.
2. Reload the live site and confirm Series IV, V and VI appear with their paintings.

## Note

If the paintings are also missing for you in the preview (not just the live site), tell me which browser you are using and I will look again — the preview is currently rendering all of them.
