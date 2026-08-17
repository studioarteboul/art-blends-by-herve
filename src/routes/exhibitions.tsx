import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/lib/lang";
import { Container } from "@/components/Section";

export const Route = createFileRoute("/exhibitions")({
  head: () => ({
    meta: [
      { title: "Exhibitions & Collections — Hervé Teboul" },
      {
        name: "description",
        content:
          "Chronological record of exhibitions, distinctions and collections for painter Hervé Teboul, including Art Shopping at the Carrousel du Louvre, Paris.",
      },
      { property: "og:title", content: "Exhibitions & Collections — Hervé Teboul" },
      {
        property: "og:description",
        content:
          "Solo and group exhibitions, international distinctions, and private and public collections.",
      },
    ],
  }),
  component: Exhibitions,
});

type Entry = { year: string; en: string; fr: string; place: string; placeFr?: string; photos?: string[] };

const louvrePhotos = Array.from({ length: 9 }, (_, i) => `/louvre${i + 2}.jpg`);
const meamPhotos = Array.from({ length: 9 }, (_, i) => `/meam${i + 1}.jpg`);

const exhibitions: Entry[] = [
  {
    year: "2026",
    en: "Museum MEAM Barcelona with Artio Gallery",
    fr: "Musée MEAM Barcelone avec Artio Gallery",
    place: "Barcelona, Spain",
    placeFr: "Barcelone, Espagne",
    photos: meamPhotos,
  },
  {
    year: "2026",
    en: "Le Louvre Paris with Artio Gallery",
    fr: "Le Louvre Paris avec Artio Gallery",
    place: "Paris, France",
    photos: louvrePhotos,
  },
  {
    year: "2025",
    en: "Expo New York with Artio Gallery at One Art Space",
    fr: "Expo New York avec Artio Gallery au One Art Space",
    place: "New York, USA",
  },
  {
    year: "2021",
    en: "Gallery BOA — Contemporary Mixed Media",
    fr: "Galerie BOA — Techniques mixtes contemporaines",
    place: "Montréal, Canada",
  },
  {
    year: "2019",
    en: "Group Exhibition — Contemporary Mixed Media",
    fr: "Exposition collective — Techniques mixtes contemporaines",
    place: "Montréal, Canada",
  },
  {
    year: "2016",
    en: "Inaugural Exhibition, Studio Gallery ARTeboul",
    fr: "Exposition inaugurale, Studio Gallery ARTeboul",
    place: "Montréal, Canada",
  },
  {
    year: "2012",
    en: "Solo Exhibition — Metallic Surfaces",
    fr: "Exposition individuelle — Surfaces métalliques",
    place: "Outremont, Montréal",
  },
  {
    year: "2006",
    en: "Art Expo — Javits Center",
    fr: "Art Expo — Javits Center",
    place: "New York, USA",
  },
  {
    year: "2001 - Present",
    en: "Studio-Galerie Arteboul",
    fr: "Studio-Galerie Arteboul",
    place: "Montréal, Canada",
  },
  {
    year: "2001",
    en: "Solo Exhibition — Aux Couleurs de Provence",
    fr: "Exposition individuelle — Aux Couleurs de Provence",
    place: "Montréal, Canada",
  },
  {
    year: "2000",
    en: "Galerie Brigitte Desroches",
    fr: "Galerie Brigitte Desroches",
    place: "Montréal, Canada",
  },
  {
    year: "1999",
    en: "Festival Provence — Hôtel Bonaventure",
    fr: "Festival Provence — Hôtel Bonaventure",
    place: "Montréal, Canada",
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
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % photos.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, photos.length, onClose, onChange]);

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

function Row({ entry }: { entry: Entry }) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const photos = entry.photos;
  const label = t(entry.en, entry.fr);

  return (
    <li className="grid grid-cols-[4rem_1fr] gap-6 border-b border-border py-6 md:grid-cols-[6rem_1fr_16rem]">
      <span className="text-[0.7rem] uppercase tracking-[0.24em] text-accent">{entry.year}</span>
      {photos ? (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="text-left font-display text-xl transition-colors hover:text-accent md:text-2xl"
        >
          {label}
          <span className="ml-3 align-middle text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
            {t("Photos", "Photos")}
          </span>
        </button>
      ) : (
        <span className="font-display text-xl md:text-2xl">{label}</span>
      )}
      <span className="col-start-2 text-xs uppercase tracking-[0.2em] text-muted-foreground md:col-start-3 md:text-right">
        {t(entry.place, entry.placeFr || entry.place)}
      </span>

      {photos && open && (
        <div className="col-span-full mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {photos.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              className="block overflow-hidden"
            >
              <img
                src={src}
                alt={`${label} — ${t("exhibition photo", "photo d'exposition")} ${i + 1}`}
                loading="lazy"
                className="max-w-full h-auto object-contain transition-opacity hover:opacity-80"
              />
            </button>
          ))}
        </div>
      )}

      {photos && active !== null && (
        <Lightbox
          photos={photos}
          index={active}
          label={label}
          onClose={() => setActive(null)}
          onChange={setActive}
        />
      )}
    </li>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="py-14">
      <h2 className="mb-8 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Exhibitions() {
  const { t } = useLang();

  return (
    <Container>
      <div className="max-w-4xl py-24">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-accent">
          {t("Curriculum", "Parcours")}
        </p>
        <h1 className="mt-6 font-display text-4xl leading-tight md:text-6xl">
          {t("Exhibitions & Collections", "Expositions et Collections")}
        </h1>

        <Block
          title={t("Solo & Group Exhibitions", "Expositions individuelles et collectives")}
        >
          <ul>
            {exhibitions.map((e) => (
              <Row key={e.year + e.en} entry={e} />
            ))}
          </ul>
        </Block>

        <Block title={t("Distinctions", "Reconnaissances")}>
          <ul className="divide-y divide-border">
            <li className="py-6 font-display text-xl md:text-2xl">
              {t(
                "2nd prize winner of the International Art Talent 2025",
                "2e prix du International Art Talent 2025",
              )}
            </li>
            <li className="py-6">
              <p className="font-display text-xl md:text-2xl">
                {t(
                  "Listed since 2001 in several art dictionaries:",
                  "Répertorié depuis 2001 dans plusieurs dictionnaires d'art :",
                )}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground/85">
                <li>
                  DROUOT internationale cotation des artistes modernes et contemporains, LAROUSSE
                </li>
                <li>Guide de Roussan, Marché de l'art au Québec</li>
                <li>REPERTOIRE BIENNAL des artistes Canadiens en galeries, MAGAZIN'art</li>
              </ul>
            </li>
          </ul>
        </Block>

        <Block title={t("Quotation", "Cotation")}>
          <p className="border-b border-border pb-6 font-display text-xl md:text-2xl">
            {t(
              "Works range from $5,000 to $25,000 depending on size format. Pricing is shared on request.",
              "Les œuvres sont offertes entre 5 000 $ et 25 000 $ selon le format. Les prix sont communiqués sur demande.",
            )}
          </p>
        </Block>

        <Block title={t("Collections", "Collections")}>
          <p className="border-b border-border pb-6 font-display text-xl md:text-2xl">
            {t(
              "Private and public collections across France, Canada, and the United States.",
              "Collections privées et publiques en France, au Canada et aux États-Unis.",
            )}
          </p>
        </Block>
      </div>
    </Container>
  );
}
