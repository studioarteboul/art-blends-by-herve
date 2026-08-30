# Pause background music while videos play

## Goal
When a visitor plays any video on the site (Works page video thumbnails, Works lightbox video, Publications videos), the ambient website music pauses automatically. When the video is paused, ends, or is closed, the music resumes — unless the visitor had intentionally muted it with the header toggle.

## Approach
Do it once, globally, inside the existing audio system (`src/lib/audio.tsx`) rather than wiring each `<video>` tag individually.

```text
<video> play event (captured at document level)
        │
        ▼
AudioProvider ── music playing? ──► pause music, mark "auto-resume pending"
        ▲
video pause / ended / emptied ──► if "auto-resume pending" and the user
                                  did not mute manually → resume music
```

### Why document-level capture
Video `play`/`pause` events do not bubble, but capture-phase listeners on `document` see them for every video on the page — so this single listener covers:

- Video artworks in the Works collections (`src/routes/index.tsx`)
- The Works lightbox video player (same file)
- Videos on the Publications page (`src/routes/publications.tsx`)
- Any future video added anywhere, with no extra wiring

### Changes in `src/lib/audio.tsx`
1. Add a module-level counter/ref for "videos currently playing" (handles two videos never overlapping, but keeps logic safe if they do).
2. Add a `suspendedByVideoRef` flag so we only auto-resume music that we paused — never override the visitor's manual mute (`userPausedRef` stays the source of truth).
3. Register capture listeners for `play`, `pause`, `ended`, `emptied` on `document`:
   - `play` → if music is playing and not user-muted: pause it, set `suspendedByVideoRef = true`.
   - `pause`/`ended`/`emptied` → if no other video is still playing and `suspendedByVideoRef` is set and `!userPausedRef.current`: resume music.

### Edge cases covered
- Music manually muted via header toggle → nothing resumes it later.
- Video paused mid-way vs. fully ended → music resumes in both cases.
- Lightbox closed (video unmounted) → `emptied` fires, music resumes.
- Browser blocks autoplay of music → `play()` already fails silently; no crash.

## Technical details
- Single file changed: `src/lib/audio.tsx`. No changes to `index.tsx`, `publications.tsx`, or the header.
- No new dependencies; uses standard DOM media events.
- Verify in the preview (Playwright): music playing → press play on a Works video → music silent; pause/end video → music resumes; manual mute toggle still works as before.
