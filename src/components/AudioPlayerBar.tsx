import { useEffect, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useAudio } from "@/lib/audio";
import { useLang } from "@/lib/lang";

function format(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function AudioPlayerBar({ title }: { title: string }) {
  const { audioRef, muted, toggleMuted, isPlaying } = useAudio();
  const { t } = useLang();
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setCurrent(audio.currentTime);
    const onMeta = () => setDuration(audio.duration);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    if (audio.readyState >= 1) onMeta();
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
    };
  }, [audioRef]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      void audio.play();
    } else {
      audio.pause();
    }
  };

  const seek = (value: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = value;
    setCurrent(value);
  };

  const progress = duration ? (current / duration) * 100 : 0;

  return (
    <div className="flex items-center gap-5 border border-border bg-card/60 px-5 py-4 backdrop-blur-sm">
      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? t("Pause", "Pause") : t("Play", "Lecture")}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground/30 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
      </button>

      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex items-baseline justify-between gap-4">
          <span className="truncate text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
            {title}
          </span>
          <span className="shrink-0 text-[0.65rem] tabular-nums tracking-[0.14em] text-muted-foreground">
            {format(current)} / {format(duration)}
          </span>
        </div>

        <div className="relative h-1 w-full bg-border">
          <div
            className="absolute inset-y-0 left-0 bg-accent"
            style={{ width: `${progress}%` }}
          />
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={current}
            onChange={(e) => seek(Number(e.target.value))}
            aria-label={t("Seek", "Naviguer")}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={toggleMuted}
        aria-label={
          muted
            ? t("Turn music on", "Activer la musique")
            : t("Turn music off", "Couper la musique")
        }
        className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
      >
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
    </div>
  );
}
