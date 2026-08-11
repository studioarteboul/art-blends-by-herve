import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type AudioContextValue = {
  setAudioEl: (el: HTMLAudioElement | null) => void;
  isPlaying: boolean;
  play: () => void;
  pause: () => void;
  toggle: () => void;
};

const AudioContext = createContext<AudioContextValue | null>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioEl, setAudioElState] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const setAudioEl = useCallback((el: HTMLAudioElement | null) => {
    audioRef.current = el;
    setAudioElState(el);
  }, []);

  useEffect(() => {
    if (!audioEl) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audioEl.addEventListener("play", handlePlay);
    audioEl.addEventListener("pause", handlePause);
    audioEl.addEventListener("ended", handleEnded);
    setIsPlaying(!audioEl.paused);

    return () => {
      audioEl.removeEventListener("play", handlePlay);
      audioEl.removeEventListener("pause", handlePause);
      audioEl.removeEventListener("ended", handleEnded);
    };
  }, [audioEl]);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = false;
    audio.volume = 1;
    const p = audio.play();
    if (p && typeof p.catch === "function") {
      p.catch(() => setIsPlaying(false));
    }
  }, []);

  const pause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      play();
    } else {
      pause();
    }
  }, [play, pause]);

  return (
    <AudioContext.Provider
      value={{ setAudioEl, isPlaying, play, pause, toggle }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return ctx;
}

export function AudioPlayer({ src }: { src: string }) {
  const { setAudioEl } = useAudio();

  return (
    <audio
      ref={setAudioEl}
      src={src}
      loop
      playsInline
      preload="auto"
      className="hidden"
      aria-label="Background music"
    />
  );
}
