import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/lang";
import { Container } from "@/components/Section";
import { Row, Block, type Entry } from "@/components/ExhibitionParts";

const publications: Entry[] = [
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
    year: "2025",
    en: "Artio Gallery Exhibition Catalog — October — New York",
    fr: "Catalogue d'exposition Artio Gallery — Octobre — New York",
    place: "Artio Gallery",
    photos: ["/artiocat2025-1.jpg", "/artiocat2025-2.jpg"],
  },
];


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
              <Row key={p.year + p.en} entry={p} />
            ))}
          </ul>
        </Block>
      </div>
    </Container>
  );
}
