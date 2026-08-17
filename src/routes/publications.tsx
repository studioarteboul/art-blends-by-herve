import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/lang";
import { Container } from "@/components/Section";
import { Row, Block, type Entry } from "@/components/ExhibitionParts";

const publications: Entry[] = [
  {
    year: "2026",
    en: "Artio Magazine — Issue 15",
    fr: "Artio Magazine — Numéro 15",
    place: "Artio Gallery",
    photos: ["/artio15-1.jpg", "/artio15-2.jpg", "/artio15-3.jpg"],
  },
  {
    year: "2026",
    en: "ArtioGallery Magazine — Issue 12",
    fr: "ArtioGallery Magazine — Numéro 12",
    place: "Artio Gallery",
    photos: ["/artio12-1.jpg", "/artio12-2.jpg", "/artio12-3.jpg"],
  },
];

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Hervé Teboul" },
      {
        name: "description",
        content:
          "Magazine features and press publications about painter Hervé Teboul, including ArtioGallery Magazine Issue 12.",
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
