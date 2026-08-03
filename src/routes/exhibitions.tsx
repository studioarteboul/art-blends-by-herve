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
    year: "2024",
    en: "Art Shopping — Carrousel du Louvre",
    fr: "Art Shopping — Carrousel du Louvre",
    place: "Paris, France",
  },
  {
    year: "2023",
    en: "Inaugural Exhibition, Studio ARTeboul",
    fr: "Exposition inaugurale, Studio ARTeboul",
    place: "Montréal, Canada",
  },
  {
    year: "2019",
    en: "Group Exhibition — Contemporary Mixed Media",
    fr: "Exposition collective — Techniques mixtes contemporaines",
    place: "Montréal, Canada",
  },
  {
    year: "2012",
    en: "Solo Exhibition — Metallic Surfaces",
    fr: "Exposition individuelle — Surfaces métalliques",
    place: "Outremont, Montréal",
  },
  {
    year: "2001",
    en: "Solo Exhibition — Mediterranean Light",
    fr: "Exposition individuelle — Lumière méditerranéenne",
    place: "Provence, France",
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
          <p className="border-b border-border pb-6 font-display text-xl md:text-2xl">
            {t(
              "Listed in several international art dictionaries since 2001.",
              "Répertorié dans plusieurs dictionnaires d'art internationaux depuis 2001.",
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
