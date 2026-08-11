import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";

type AudioContextValue = {
  audioRef: RefObject<HTMLAudioElement | null>;
  isPlaying: boolean;
  play: () => void;
  pause: () => void;
  toggle: () => void;
};

const AudioContext = createContext<AudioContextValue | null>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [audioRef.current]);

  const play = () => {
    const audio = audioRef.current;
    if (!audio) return;
    void audio.play().catch(() => {
      // Autoplay or browser restriction prevented playback; remain in stopped state.
    });
  };

  const pause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
  };

  const toggle = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  return (
    <AudioContext.Provider value={{ audioRef, isPlaying, play, pause, toggle }}>
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
  const { audioRef } = useAudio();

  return (
    <audio
      ref={audioRef}
      src={src}
      loop
      playsInline
      preload="metadata"
      className="hidden"
      aria-label="Background music"
    />
  );
}
