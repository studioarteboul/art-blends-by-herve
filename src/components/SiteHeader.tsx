import { Link, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useLang } from "@/lib/lang";
import { useAudio } from "@/lib/audio";

export function SiteHeader() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const isHome = router.state.location.pathname === "/";
  const { isPlaying, toggle } = useAudio();

  const links = [
    { to: "/", label: t("Works", "Œuvres") },
    { to: "/biography", label: t("Biography", "Biographie") },
    {
      to: "/exhibitions",
      label: t("Exhibitions & Collections", "Expositions et Collections"),
    },
    { to: "/contact", label: t("Contact", "Contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[110rem] items-center justify-between gap-8 px-6 py-5 md:px-12">
        <Link to="/" className="shrink-0">
          <span className="font-display text-xl tracking-[0.2em] uppercase text-foreground">
            Hervé Teboul
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {isHome && (
            <button
              type="button"
              onClick={toggle}
              aria-label={
                isPlaying
                  ? t("Turn music off", "Couper la musique")
                  : t("Turn music on", "Activer la musique")
              }
              className="flex items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
            >
              {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
              {isPlaying && (
                <span className="ml-2 hidden text-[0.65rem] uppercase tracking-[0.2em] md:inline">
                  {t("Playing", "Lecture")}
                </span>
              )}
            </button>
          )}
          <div className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em]">
            <button
              onClick={() => setLang("en")}
              className={
                lang === "en"
                  ? "text-accent"
                  : "text-muted-foreground transition-colors hover:text-foreground"
              }
            >
              EN
            </button>
            <span className="text-border">|</span>
            <button
              onClick={() => setLang("fr")}
              className={
                lang === "fr"
                  ? "text-accent"
                  : "text-muted-foreground transition-colors hover:text-foreground"
              }
            >
              FR
            </button>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground md:hidden"
            aria-label={t("Toggle menu", "Ouvrir le menu")}
          >
            {open ? t("Close", "Fermer") : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-border/60 px-6 py-6 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-xs uppercase tracking-[0.22em] text-muted-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
