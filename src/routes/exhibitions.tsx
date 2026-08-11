import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
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

type Entry = { year: string; en: string; fr: string; place: string };

const exhibitions: Entry[] = [
  {
    year: "2026",
    en: "Museum MEAM Barcelona with Artio Gallery",
    fr: "Musée MEAM Barcelone avec Artio Gallery",
    place: "Barcelona, Spain",
  },
  {
    year: "2026",
    en: "Le Louvre Paris with Artio Gallery",
    fr: "Le Louvre Paris avec Artio Gallery",
    place: "Paris, France",
  },
  {
    year: "2025",
    en: "Expo New York with Artio Gallery at One Art Space",
    fr: "Expo New York avec Artio Gallery au One Art Space",
    place: "New York, USA",
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

function Row({ entry }: { entry: Entry }) {
  const { t } = useLang();
  return (
    <li className="grid grid-cols-[4rem_1fr] gap-6 border-b border-border py-6 md:grid-cols-[6rem_1fr_16rem]">
      <span className="text-[0.7rem] uppercase tracking-[0.24em] text-accent">{entry.year}</span>
      <span className="font-display text-xl md:text-2xl">{t(entry.en, entry.fr)}</span>
      <span className="col-start-2 text-xs uppercase tracking-[0.2em] text-muted-foreground md:col-start-3 md:text-right">
        {entry.place}
      </span>
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
