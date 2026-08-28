import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useLang } from "@/lib/lang";
import { Container } from "@/components/Section";
import { Block } from "@/components/ExhibitionParts";
import retrospectiveVideo from "@/assets/parcours-dartiste-720p.mp4.asset.json";

type Publication = {
  year: string;
  en: string;
  fr: string;
  place: string;
  photos: string[];
  video?: string;
};

const publications: Publication[] = [
  {
    year: "2026",
    en: "Artio Magazine — July — Issue 15",
    fr: "Artio Magazine — Juillet — Numéro 15",
    place: "Artio Gallery",
    photos: ["/artio15-1.jpg", "/artio15-2.jpg", "/artio15-3.jpg"],
  },
  {
    year: "2026",
    en: "Artio Magazine — April — Issue 12",
    fr: "Artio Magazine — Avril — Numéro 12",
    place: "Artio Gallery",
    photos: ["/artio12-1.jpg", "/artio12-2.jpg", "/artio12-3.jpg"],
  },
  {
    year: "2026",
    en: "Artio Gallery Exhibition Catalog — April — MEAM Barcelona",
    fr: "Catalogue d'exposition Artio Gallery — Avril — MEAM Barcelone",
    place: "Artio Gallery",
    photos: [
      "/artiocatmeam2026-1.jpg",
      "/artiocatmeam2026-2.webp",
      "/artiocatmeam2026-3.webp",
      "/artiocatmeam2026-4.webp",
    ],
  },
  {
    year: "2026",
    en: "Artio Gallery Exhibition Catalog — April — Paris Le Louvre",
    fr: "Catalogue d'exposition Artio Gallery — Avril — Paris Le Louvre",
    place: "Artio Gallery",
    photos: [
      "/artiocat2026-1.jpg",
      "/artiocat2026-2.jpg",
      "/artiocat2026-3.jpg",
      "/artiocat2026-4.jpg",
    ],
  },
  {
    year: "2025",
    en: "Artio Gallery Exhibition Catalog — October — New York",
    fr: "Catalogue d'exposition Artio Gallery — Octobre — New York",
    place: "Artio Gallery",
    photos: ["/artiocat2025-1.jpg", "/artiocat2025-2.jpg"],
  },
  {
    year: "2025",
    en: "Artio Gallery Exhibition Catalog — July — New York",
    fr: "Catalogue d'exposition Artio Gallery — Juillet — New York",
    place: "Artio Gallery",
    photos: ["/artiocatjul2025-1.jpg", "/artiocatjul2025-2.jpg"],
  },
  {
    year: "2026",
    en: "2026 Retrospective video — Yesterday to Today!",
    fr: "Vidéo rétrospective 2026 — D'hier à aujourd'hui !",
    place: "Studio ARTeboul",
    photos: [],
    video: retrospectiveVideo.url,
  },
  {
    year: "2024",
    en: "Author of a Novel — L'été des Génies — Editions du Panthéon & Amazon",
    fr: "Auteur d'un roman — L'été des Génies — Éditions du Panthéon & Amazon",
    place: "Montréal, Canada",
    photos: ["/lete-des-genies.jpg"],
  },
];

function Lightbox({
  photos,
  index,
  onClose,
  onChange,
  label,
}: {
  photos: string[];
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
  label: string;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-6 backdrop-blur"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-6 top-6 text-muted-foreground transition-colors hover:text-foreground"
      >
        <X className="h-6 w-6" />
      </button>
      <button
        type="button"
        aria-label="Previous"
        onClick={(e) => {
          e.stopPropagation();
          onChange((index - 1 + photos.length) % photos.length);
        }}
        className="absolute left-4 text-muted-foreground transition-colors hover:text-foreground md:left-10"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <img
        src={photos[index]}
        alt={`${label} — ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] max-w-full object-contain"
      />
      <button
        type="button"
        aria-label="Next"
        onClick={(e) => {
          e.stopPropagation();
          onChange((index + 1) % photos.length);
        }}
        className="absolute right-4 text-muted-foreground transition-colors hover:text-foreground md:right-10"
      >
        <ChevronRight className="h-8 w-8" />
      </button>
    </div>
  );
}

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Hervé Teboul" },
      {
        name: "description",
        content:
          "Magazine features and press publications about painter Hervé Teboul, including Artio Magazine Issue 12.",
      },
      { property: "og:title", content: "Publications — Hervé Teboul" },
      {
        property: "og:description",
        content: "Press features and magazine publications on the work of Hervé Teboul.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Publications,
});

function PublicationRow({ entry }: { entry: Publication }) {
  const { t } = useLang();
  const [active, setActive] = useState<number | null>(null);
  const label = t(entry.en, entry.fr);

  return (
    <li className="border-b border-border py-10">
      <div className="grid grid-cols-[4rem_1fr] gap-6 md:grid-cols-[6rem_1fr_16rem]">
        <span className="text-[0.7rem] uppercase tracking-[0.24em] text-accent">{entry.year}</span>
        <span className="font-display text-xl md:text-2xl">{label}</span>
        <span className="col-start-2 text-xs uppercase tracking-[0.2em] text-muted-foreground md:col-start-3 md:text-right">
          {entry.place}
        </span>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {entry.photos.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            className="block overflow-hidden"
          >
            <img
              src={src}
              alt={`${label} — ${t("photo", "photo")} ${i + 1}`}
              loading="lazy"
              className="max-w-full h-auto object-contain transition-opacity hover:opacity-80"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <Lightbox
          photos={entry.photos}
          index={active}
          label={label}
          onClose={() => setActive(null)}
          onChange={setActive}
        />
      )}
    </li>
  );
}

function Publications() {
  const { t } = useLang();

  return (
    <Container>
      <div className="max-w-4xl py-24">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-accent">
          {t("Press", "Presse")}
        </p>
        <h1 className="mt-6 font-display text-4xl leading-tight md:text-6xl">
          {t("Publications", "Publications")}
        </h1>

        <Block title={t("Magazines & Features", "Magazines et articles")}>
          <ul>
            {publications.map((p) => (
              <PublicationRow key={p.year + p.en} entry={p} />
            ))}
          </ul>
        </Block>

        <section className="py-14">
          <h2 className="mt-6 font-display text-4xl leading-tight md:text-6xl">
            {t("Exhibition Souvenirs", "Souvenirs d'Expositions")}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <a
              href="https://popsa.com/shared-print/22db9222-42c9-45d6-98af-9bf6b60d378e/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden">
                <img
                  src="/paris-cover.jpg"
                  alt={t(
                    "Exhibition Souvenir Book — Paris Le Louvre",
                    "Livret souvenir d'exposition — Paris Le Louvre"
                  )}
                  loading="lazy"
                  className="max-w-full h-auto w-full object-contain transition-opacity duration-300 group-hover:opacity-85"
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 transition-all duration-300 group-hover:bg-background/20 group-hover:opacity-100">
                  <span className="flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-xs uppercase tracking-[0.2em]">
                    {t("Open photo book", "Ouvrir le livre photo")}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
              <p className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {t(
                  "Exhibition Souvenir Book — Paris Le Louvre 2026",
                  "Livret souvenir d'exposition — Paris Le Louvre 2026"
                )}
              </p>
              <div className="mt-4 flex justify-center">
                <span className="inline-flex items-center gap-2 border border-border px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:border-foreground group-hover:text-foreground">
                  {t("Open photo book", "Ouvrir le livre photo")}
                  <ExternalLink className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>

            <a
              href="https://popsa.com/shared-print/4872dc01-9e14-4338-803b-83fa2f010fcf/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden">
                <img
                  src="/meam-book-cover.jpg"
                  alt={t(
                    "Exhibition Souvenir Book — MEAM Barcelona",
                    "Livret souvenir d'exposition — MEAM Barcelone"
                  )}
                  loading="lazy"
                  className="max-w-full h-auto w-full object-contain transition-opacity duration-300 group-hover:opacity-85"
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 transition-all duration-300 group-hover:bg-background/20 group-hover:opacity-100">
                  <span className="flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-xs uppercase tracking-[0.2em]">
                    {t("Open photo book", "Ouvrir le livre photo")}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
              <p className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {t(
                  "Exhibition Souvenir Book — MEAM Barcelona 2026",
                  "Livret souvenir d'exposition — MEAM Barcelone 2026"
                )}
              </p>
              <div className="mt-4 flex justify-center">
                <span className="inline-flex items-center gap-2 border border-border px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:border-foreground group-hover:text-foreground">
                  {t("Open photo book", "Ouvrir le livre photo")}
                  <ExternalLink className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          </div>
        </section>
      </div>
    </Container>
  );
}
