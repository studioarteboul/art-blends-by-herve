import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";

type AudioContextValue = {
  setAudioEl: (el: HTMLAudioElement | null) => void;
  userPausedRef: RefObject<boolean>;
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
  const userPausedRef = useRef(false);

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

  const pauseByUser = useCallback(() => {
    userPausedRef.current = true;
    pause();
  }, [pause]);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      userPausedRef.current = false;
      play();
    } else {
      pauseByUser();
    }
  }, [play, pauseByUser]);

  return (
    <AudioContext.Provider
      value={{ setAudioEl, userPausedRef, isPlaying, play, pause: pauseByUser, toggle }}
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
  const { setAudioEl, play, userPausedRef } = useAudio();
  const [el, setEl] = useState<HTMLAudioElement | null>(null);

  const attachRef = useCallback(
    (node: HTMLAudioElement | null) => {
      setAudioEl(node);
      setEl(node);
    },
    [setAudioEl],
  );

  useEffect(() => {
    if (!el) return;

    let done = false;
    const tryPlay = () => {
      if (done || userPausedRef.current) return;
      const p = el.play();
      if (p && typeof p.then === "function") {
        p.then(() => {
          done = true;
          cleanup();
        }).catch(() => {
          /* wait for a user gesture */
        });
      }
    };

    const events = ["pointerdown", "keydown", "touchstart", "scroll"] as const;
    const cleanup = () => {
      events.forEach((e) =>
        window.removeEventListener(e, tryPlay, { capture: true } as never),
      );
    };

    tryPlay();
    events.forEach((e) =>
      window.addEventListener(e, tryPlay, { capture: true, passive: true }),
    );

    return cleanup;
  }, [el, play, userPausedRef]);

  return (
    <audio
      ref={attachRef}
      src={src}
      loop
      playsInline
      autoPlay
      preload="auto"
      className="hidden"
      aria-label="Background music"
    />
  );
}
