import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/lang";
import { Container } from "@/components/Section";
import { exhibitions, Row, Block } from "@/components/ExhibitionParts";

export const Route = createFileRoute("/exhibitions")({
  head: () => ({
    meta: [
      { title: "Exhibitions — Hervé Teboul" },
      {
        name: "description",
        content:
          "Chronological record of exhibitions, distinctions and collections for painter Hervé Teboul, including Art Shopping at the Carrousel du Louvre, Paris.",
      },
      { property: "og:title", content: "Exhibitions — Hervé Teboul" },
      {
        property: "og:description",
        content:
          "Solo and group exhibitions, international distinctions, and private and public collections.",
      },
    ],
  }),
  component: Exhibitions,
});

function Exhibitions() {
  const { t } = useLang();

  return (
    <Container>
      <div className="max-w-4xl py-24">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-accent">
          {t("Curriculum", "Parcours")}
        </p>
        <h1 className="mt-6 font-display text-4xl leading-tight md:text-6xl">
          {t("Exhibitions", "Expositions")}
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
