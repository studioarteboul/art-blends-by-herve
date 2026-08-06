import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/lib/lang";
import { Container } from "@/components/Section";
import lumiereAsset from "@/assets/lumiere-de-soie.webp.asset.json";
import parfumAsset from "@/assets/parfum-de-femme.webp.asset.json";
import petitMatinAsset from "@/assets/petit-matin-damour.webp.asset.json";
import rockyAsset from "@/assets/rocky-victory.webp.asset.json";
import rondeursAsset from "@/assets/rondeurs-dorees.webp.asset.json";
import roseGalaAsset from "@/assets/rose-gala.webp.asset.json";
import supercarAsset from "@/assets/supercar.jpg.asset.json";
import pinsAsset from "@/assets/pins-dores.jpg.asset.json";
import baieAsset from "@/assets/baie-mediterraneenne.jpg.asset.json";

const hero = supercarAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hervé Teboul — Works | Œuvres" },
      {
        name: "description",
        content:
          "Selected works by contemporary painter Hervé Teboul: mixed media with gold and silver leaf, epoxy resin, and Mediterranean post-impressionist landscapes.",
      },
      { property: "og:title", content: "Hervé Teboul — Works | Œuvres" },
      {
        property: "og:description",
        content:
          "Mixed media contemporary painting and Mediterranean post-impressionism. Studio ARTeboul, Montreal.",
      },
    ],
  }),
  component: Works,
});

type Work = {
  image: string;
  titleEn: string;
  titleFr: string;
  year: string;
  mediumEn: string;
  mediumFr: string;
  dimensions: string;
};

const contemporary: Work[] = [
  {
    image: hero,
    titleEn: "Chic soirée",
    titleFr: "Chic soirée",
    year: "2023",
    mediumEn: "Mixed Media (Acrylic, Gold Leaf, Epoxy)",
    mediumFr: "Technique mixte (Acrylique, Feuille d'or, Époxy)",
    dimensions: "152 × 102 cm",
  },
  {
    image: workScent,
    titleEn: "Scent of a Woman",
    titleFr: "Scent of a Woman",
    year: "2022",
    mediumEn: "Mixed Media (Acrylic, Silver Leaf, Epoxy)",
    mediumFr: "Technique mixte (Acrylique, Feuille d'argent, Époxy)",
    dimensions: "122 × 91 cm",
  },
  {
    image: workGold,
    titleEn: "Vertical Gold",
    titleFr: "Or vertical",
    year: "2021",
    mediumEn: "Mixed Media (Acrylic, Palette Knife, Gold Leaf)",
    mediumFr: "Technique mixte (Acrylique, Couteau, Feuille d'or)",
    dimensions: "100 × 80 cm",
  },
  {
    image: workTexture,
    titleEn: "Éclats",
    titleFr: "Éclats",
    year: "2024",
    mediumEn: "Mixed Media (Acrylic, Copper Leaf, Epoxy)",
    mediumFr: "Technique mixte (Acrylique, Feuille de cuivre, Époxy)",
    dimensions: "91 × 76 cm",
  },
];

const mediterranean: Work[] = [
  {
    image: workPond,
    titleEn: "Water Pond, Provence",
    titleFr: "Bassin d'eau, Provence",
    year: "2004",
    mediumEn: "Oil on canvas",
    mediumFr: "Huile sur toile",
    dimensions: "81 × 65 cm",
  },
  {
    image: workVillage,
    titleEn: "Southern Light",
    titleFr: "Lumière du Sud",
    year: "1999",
    mediumEn: "Oil on canvas",
    mediumFr: "Huile sur toile",
    dimensions: "92 × 73 cm",
  },
];

function WorkCard({ work }: { work: Work }) {
  const { t } = useLang();
  return (
    <figure className="group relative overflow-hidden bg-card plate">
      <img
        src={work.image}
        alt={t(work.titleEn, work.titleFr)}
        loading="lazy"
        className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      <figcaption className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/85 via-primary/25 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <p className="font-display text-2xl text-primary-foreground">
          {t(work.titleEn, work.titleFr)}, {work.year}
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-primary-foreground/80">
          {t(work.mediumEn, work.mediumFr)}
        </p>
        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-primary-foreground/70">
          {work.dimensions}
        </p>
      </figcaption>
    </figure>
  );
}

function Series({
  index,
  title,
  description,
  works,
}: {
  index: string;
  title: string;
  description: string;
  works: Work[];
}) {
  return (
    <section className="py-20">
      <div className="mb-12 flex flex-col gap-4 border-t border-border pt-8 md:flex-row md:items-start md:justify-between">
        <div className="flex items-baseline gap-6">
          <span className="text-[0.7rem] uppercase tracking-[0.3em] text-accent">{index}</span>
          <h2 className="font-display text-3xl leading-tight md:text-4xl">{title}</h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {works.map((w) => (
          <WorkCard key={w.titleEn + w.year} work={w} />
        ))}
      </div>
    </section>
  );
}

function Works() {
  const { t } = useLang();

  return (
    <>
      <section className="relative">
        <img
          src={hero}
          alt={t(
            "Chic soirée — contemporary mixed media painting with gold leaf",
            "Chic soirée — peinture contemporaine technique mixte à la feuille d'or",
          )}
          width={1920}
          height={1088}
          className="h-[68vh] w-full object-cover md:h-[82vh]"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/70 to-transparent">
          <Container>
            <div className="pb-12 md:pb-20">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-primary-foreground/70">
                {t("Contemporary Painter — Montreal", "Peintre contemporain — Montréal")}
              </p>
              <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] text-primary-foreground md:text-7xl">
                {t(
                  "Structure, texture and metallic brilliance.",
                  "Structure, texture et brillance métallique.",
                )}
              </h1>
              <p className="mt-5 text-sm uppercase tracking-[0.18em] text-primary-foreground/75">
                Chic soirée, 2023 —{" "}
                {t(
                  "Mixed Media (Acrylic, Gold Leaf, Epoxy)",
                  "Technique mixte (Acrylique, Feuille d'or, Époxy)",
                )}
              </p>
            </div>
          </Container>
        </div>
      </section>

      <Container>
        <Series
          index="I"
          title={t(
            "Contemporary & Mixed Media",
            "Art contemporain et techniques mixtes",
          )}
          description={t(
            "Acrylics built with the palette knife, gold and silver leaf, and poured epoxy finishes — high-contrast surfaces where light moves with the viewer.",
            "Acryliques travaillées au couteau, feuilles d'or et d'argent et finitions époxy coulées — des surfaces à fort contraste où la lumière se déplace avec le regard.",
          )}
          works={contemporary}
        />
        <Series
          index="II"
          title={t(
            "Mediterranean Landscapes & Post-Impressionism",
            "Paysages méditerranéens et post-impressionnisme",
          )}
          description={t(
            "A tribute to early influences: water ponds, olive hillsides and the vivid light of Southern France that still governs the palette today.",
            "Un hommage aux influences des débuts : bassins d'eau, collines d'oliviers et lumière vive du sud de la France qui gouverne encore la palette aujourd'hui.",
          )}
          works={mediterranean}
        />

        <section className="border-t border-border py-20 text-center">
          <p className="mx-auto max-w-2xl font-display text-3xl leading-snug md:text-4xl">
            {t(
              "Available works and pricing are shared on request.",
              "Les œuvres disponibles et les prix sont communiqués sur demande.",
            )}
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block border border-foreground px-8 py-4 text-[0.7rem] uppercase tracking-[0.28em] transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {t("Inquire about a work", "Demander des informations")}
          </Link>
        </section>
      </Container>
    </>
  );
}
