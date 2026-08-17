import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { Container } from "@/components/Section";
import { AudioPlayer } from "@/lib/audio";
import goldLeafAsset from "@/assets/gold-leaf.jpg.asset.json";
import silverLeafAsset from "@/assets/silver-leaf.jpg.asset.json";
import roseGoldAsset from "@/assets/rose-gold.png.asset.json";

const AUDIO_URL =
  "https://raw.githubusercontent.com/studioarteboul/art-blends-by-herve/fc0048e069226aca210dc750cb846853e7481ec5/public/Cielo%20Ardent%20-%20Oia%20at%20Sunset%201.mp3";


type HeroSlide = {
  image?: string;
  images?: string[];
  labelsEn?: string[];
  labelsFr?: string[];
  altEn: string;
  altFr: string;
};

const heroSlides: HeroSlide[] = [
  {
    image: "/lumiere-de-soie.jpg",
    altEn: "Lumière de Soie — contemporary mixed media painting",
    altFr: "Lumière de Soie — peinture contemporaine en technique mixte",
  },
  {
    image: "/chic-soiree.jpg",
    altEn: "Chic Soirée — contemporary mixed media painting",
    altFr: "Chic Soirée — peinture contemporaine en technique mixte",
  },
  {
    image: "/elegance-nuit.jpg",
    altEn: "Élégance de Nuit — contemporary mixed media painting",
    altFr: "Élégance de Nuit — peinture contemporaine en technique mixte",
  },
  {
    image: "/rose-gala.jpg",
    altEn: "Rose Gala — contemporary mixed media painting",
    altFr: "Rose Gala — peinture contemporaine en technique mixte",
  },
  {
    image: "/rocky-victory-in-silence.jpg",
    altEn: "Rocky, Victory in Silence — contemporary mixed media painting",
    altFr: "Rocky, Victory in Silence — peinture contemporaine en technique mixte",
  },
  {
    image: "/mediterranean-bay.jpeg",
    altEn: "Trésor Côte d’Azur — post-impressionist landscape painting",
    altFr: "Trésor Côte d’Azur — peinture de paysage post-impressionniste",
  },
  {
    image: "/pine-over-the-bay.jpeg",
    altEn: "Balcon en Méditerranée — post-impressionist landscape painting",
    altFr: "Balcon en Méditerranée — peinture de paysage post-impressionniste",
  },
  {
    image: "/promenade-au-bord-de-l-eau.jpg",
    altEn: "Promenade au bord de l'eau — post-impressionist landscape painting",
    altFr: "Promenade au bord de l'eau — peinture de paysage post-impressionniste",
  },
  {
    images: [goldLeafAsset.url, silverLeafAsset.url, roseGoldAsset.url],
    labelsEn: ["Gold Leaf", "Silver Leaf", "Rose Gold Leaf"],
    labelsFr: ["Feuille d'or", "Feuille d'argent", "Feuille d'or rose"],
    altEn: "Gold, silver and rose gold leaf textures",
    altFr: "Textures à la feuille d'or, d'argent et d'or rose",
  },
];

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
    image: "/lumiere-de-soie.jpg",
    titleEn: "Lumière de Soie",
    titleFr: "Lumière de Soie",
    year: "2025",
    mediumEn: "Acrylic, gold leaf and epoxy",
    mediumFr: "Acrylique, feuille d'or et époxy",
    dimensions: "122 × 91 cm",
  },
  {
    image: "/parfum-de-femme.jpg",
    titleEn: "Parfum de Femme",
    titleFr: "Parfum de Femme",
    year: "2025",
    mediumEn: "Acrylic, gold and silver leaf and epoxy",
    mediumFr: "Acrylique, feuilles d'or et d'argent et époxy",
    dimensions: "122 × 91 cm",
  },
  {
    image: "/la-vie-en-rose.jpg",
    titleEn: "La Vie en Rose",
    titleFr: "La Vie en Rose",
    year: "2025",
    mediumEn: "Acrylic, rose gold leaf and epoxy",
    mediumFr: "Acrylique, feuille d'or rose et époxy",
    dimensions: "122 × 91 cm",
  },
  {
    image: "/petit-matin-damour.jpg",
    titleEn: "Petit matin d'amour",
    titleFr: "Petit matin d'amour",
    year: "2025",
    mediumEn: "Acrylic, silver leaf and epoxy",
    mediumFr: "Acrylique, feuille d'argent et époxy",
    dimensions: "91 × 91 cm",
  },
  {
    image: "/chic-soiree.jpg",
    titleEn: "Chic Soirée",
    titleFr: "Chic Soirée",
    year: "2025",
    mediumEn: "Acrylic, gold leaf and epoxy",
    mediumFr: "Acrylique, feuille d'or et époxy",
    dimensions: "122 × 91 cm",
  },
  {
    image: "/elegance-nuit.jpg",
    titleEn: "Élégance de Nuit",
    titleFr: "Élégance de Nuit",
    year: "2025",
    mediumEn: "Acrylic, silver leaf and epoxy",
    mediumFr: "Acrylique, feuille d'argent et époxy",
    dimensions: "122 × 91 cm",
  },
  {
    image: "/rouge-delice.jpg",
    titleEn: "Rouge Délice",
    titleFr: "Rouge Délice",
    year: "2025",
    mediumEn: "Acrylic, gold leaf and epoxy",
    mediumFr: "Acrylique, feuille d'or et époxy",
    dimensions: "122 × 91 cm",
  },
  {
    image: "/metamorphose.jpg",
    titleEn: "Métamorphose",
    titleFr: "Métamorphose",
    year: "2025",
    mediumEn: "Acrylic, gold and silver leaf and epoxy",
    mediumFr: "Acrylique, feuilles d'or et d'argent et époxy",
    dimensions: "100 × 100 cm",
  },
  {
    image: "/supercar.jpg",
    titleEn: "Supercar Ferrari",
    titleFr: "Supercar Ferrari",
    year: "2025",
    mediumEn: "Acrylic, silver leaf and epoxy",
    mediumFr: "Acrylique, feuille d'argent et époxy",
    dimensions: "150 × 90 cm",
  },
  {
    image: "/supercar-maserati.jpg",
    titleEn: "Supercar Maserati",
    titleFr: "Supercar Maserati",
    year: "2025",
    mediumEn: "Acrylic, silver leaf and epoxy",
    mediumFr: "Acrylique, feuille d'argent et époxy",
    dimensions: "150 × 90 cm",
  },
];

const mediterranean: Work[] = [
  {
    image: "/mediterranean-bay.jpeg",
    titleEn: "Trésor Côte d’Azur",
    titleFr: "Trésor Côte d’Azur",
    year: "2026",
    mediumEn: "Acrylic and gold leaf on canvas",
    mediumFr: "Acrylique et feuille d'or sur toile",
    dimensions: "91 × 122 cm",
  },
  {
    image: "/pine-over-the-bay.jpeg",
    titleEn: "Balcon en Méditerranée",
    titleFr: "Balcon en Méditerranée",
    year: "2026",
    mediumEn: "Acrylic and gold leaf on canvas",
    mediumFr: "Acrylique et feuille d'or sur toile",
    dimensions: "91 × 122 cm",
  },
  {
    image: "/promenade-au-bord-de-l-eau.jpg",
    titleEn: "Promenade au bord de l'eau",
    titleFr: "Promenade au bord de l'eau",
    year: "2026",
    mediumEn: "Acrylic and gold leaf on canvas",
    mediumFr: "Acrylique et feuille d'or sur toile",
    dimensions: "91 × 91 cm",
  },
];

const japon: Work[] = Array.from({ length: 7 }, (_, i) => ({
  image: `/ij${i + 1}.jpg`,
  titleEn: `IJ${i + 1}`,
  titleFr: `IJ${i + 1}`,
  year: "2021",
  mediumEn: "Acrylic on canvas",
  mediumFr: "Acrylique sur toile",
  dimensions: "",
}));

const caseisme: Work[] = Array.from({ length: 12 }, (_, i) => ({
  image: `/cc${i + 1}.jpg`,
  titleEn: `CC${i + 1}`,
  titleFr: `CC${i + 1}`,
  year: "",
  mediumEn: "Oil on canvas",
  mediumFr: "Huile sur toile",
  dimensions: "",
}));

const impressionism: Work[] = Array.from({ length: 5 }, (_, i) => ({
  image: `/ir${i + 1}.jpg`,
  titleEn: `IR${i + 1}`,
  titleFr: `IR${i + 1}`,
  year: "",
  mediumEn: "Oil on canvas",
  mediumFr: "Huile sur toile",
  dimensions: "",
}));

const provence: Work[] = Array.from({ length: 23 }, (_, i) => ({
  image: `/pr${i + 1}.jpg`,
  titleEn: `PR${i + 1}`,
  titleFr: `PR${i + 1}`,
  year: "",
  mediumEn: "Oil on canvas",
  mediumFr: "Huile sur toile",
  dimensions: "",
}));



function HeroCarousel() {
  const { t } = useLang();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (reducedMotion || paused) return;
    const id = setInterval(next, 3000);
    return () => clearInterval(id);
  }, [reducedMotion, paused, next]);

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {heroSlides.map((slide, i) => {
        const layer = `absolute inset-0 h-full w-full transition-opacity duration-[3000ms] ease-in-out ${
          i === index ? "opacity-100" : "opacity-0"
        }`;
        const alt = t(slide.altEn, slide.altFr);
        if (slide.images) {
          return (
            <div key={slide.altEn} className={`${layer} grid grid-cols-3 gap-px`} aria-hidden={i !== index}>
              {slide.images.map((src, j) => (
                <div key={src} className="relative flex flex-col h-full">
                  <img
                    src={src}
                    alt={j === 0 ? alt : ""}
                    loading="lazy"
                    className="flex-1 w-full object-cover"
                  />
                  {slide.labelsEn && slide.labelsFr && (
                    <div className="flex items-center justify-center bg-primary/80 py-3">
                      <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground">
                        {t(slide.labelsEn[j], slide.labelsFr[j])}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          );
        }
        return (
          <img
            key={slide.image}
            src={slide.image}
            alt={alt}
            fetchPriority={i === 0 ? "high" : undefined}
            loading={i === 0 ? "eager" : "lazy"}
            className={`${layer} object-cover`}
          />
        );
      })}
      <div className="absolute bottom-6 right-6 z-20 flex gap-2">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.image ?? slide.altEn}
            type="button"
            aria-label={`${t("Go to slide", "Aller à la diapositive")} ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === index
                ? "bg-primary-foreground"
                : "bg-primary-foreground/40 hover:bg-primary-foreground/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function WorkCard({ work }: { work: Work }) {
  const { t } = useLang();
  return (
    <figure className="group relative overflow-hidden bg-card plate">
      <img
        src={work.image}
        alt={t(work.titleEn, work.titleFr)}
        loading="lazy"
        className="max-w-full h-auto object-cover w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />

      <figcaption className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/85 via-primary/25 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <p className="font-display text-2xl text-primary-foreground">
          {t(work.titleEn, work.titleFr)}
          {work.year ? `, ${work.year}` : ""}

        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-primary-foreground/80">
          {t(work.mediumEn, work.mediumFr)}
        </p>
        {work.dimensions && (
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-primary-foreground/70">
            {work.dimensions}
          </p>
        )}
      </figcaption>
    </figure>
  );
}

function Series({
  index,
  title,
  subtitle,
  description,
  works,
}: {
  index: string;
  title: string;
  subtitle?: string;
  description: string;
  works: Work[];
}) {
  return (
    <section className="py-20">
      <div className="mb-12 flex flex-col gap-4 border-t border-border pt-8 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline gap-6">
            <span className="text-[0.7rem] uppercase tracking-[0.3em] text-accent">{index}</span>
            <h2 className="font-display text-3xl leading-tight md:text-4xl">{title}</h2>
          </div>
          {subtitle && (
            <p className="ml-[2.4rem] text-sm text-muted-foreground md:text-base">{subtitle}</p>
          )}
        </div>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
      <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
      <AudioPlayer src={AUDIO_URL} />
      <section className="relative h-[68vh] md:h-[82vh]">
        <HeroCarousel />
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
            </div>
          </Container>
        </div>
      </section>

      <Container>
        <Series

          index="I"
          title={t(
            "Brilliance & Symbolism",
            "Brillance et symbolisme",
          )}
          subtitle={t(
            "Contemporary & Mixed Media",
            "Art contemporain et techniques mixtes",
          )}
          description={t(
            "Acrylics built with gold and silver leaf, and epoxy finishes — high-contrast surfaces where light moves with the viewer.",
            "Acryliques avec feuilles d'or et d'argent et finitions époxy — des surfaces à fort contraste où la lumière se déplace avec le regard.",
          )}
          works={contemporary}
        />
        <Series
          index="II"
          title={t(
            "French Riviera — Côte d’Azur",
            "French Riviera — Côte d’Azur",
          )}
          subtitle={t(
            "Contemporary & Mixed Media",
            "Art contemporain et techniques mixtes",
          )}
          description={t(
            "A tribute to early influences: the Mediterranean, Provence landscapes and the vivid light of Southern France that still governs today's palette.",
            "Un hommage aux influences des débuts : la Méditerranée, les paysages de Provence et la lumière vive du sud de la France qui gouverne encore la palette d'aujourd'hui.",
          )}
          works={mediterranean}
        />
        <Series
          index="III"
          title={t("Japan Inspired", "Inspiration Japon")}
          description={t(
            "A series drawn from Japanese imagery: dancers, samurai and blossoms, painted in acrylic with a restrained, contemplative palette.",
            "Une série inspirée de l'imaginaire japonais : danseuses, samouraïs et floraisons, peints à l'acrylique dans une palette retenue et contemplative.",
          )}
          works={japon}
        />
        <Series
          index="IV"
          title={t("Caseisme Collection", "Collection Caseisme")}
          description={t(
            "A mosaic of thick palette-knife strokes: each small block of colour is laid down whole, and the image assembles itself from the accumulation.",
            "Une mosaïque de touches épaisses au couteau : chaque petit bloc de couleur est posé entier, et l'image se compose par accumulation.",
          )}
          works={caseisme}
        />
        <Series
          index="V"
          title={t("Impressionism Revisited", "Impressionnisme Revisité")}
          description={t(
            "Gardens, water and shifting light revisited through a contemporary lens: dense impasto touches that dissolve the motif into pure colour and vibration.",
            "Jardins, eau et lumière changeante revisités par un regard contemporain : des touches épaisses en impasto qui dissolvent le motif en couleur et vibration pures.",
          )}
          works={impressionism}
        />
        <Series
          index="VI"
          title={t("Period of Provence", "Période de Provence")}
          description={t(
            "Early Provençal works: vineyards, shaded courtyards, blue shutters and flowering gardens, painted in oil with a warm Southern light.",
            "Œuvres provençales des débuts : vignes, cours ombragées, volets bleus et jardins fleuris, peints à l'huile dans la lumière chaude du Sud.",
          )}
          works={provence}
        />

        <section className="border-t border-border py-20">
          <div className="max-w-4xl">
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-accent">
              {t("Quotation", "Cotation")}
            </p>
            <p className="mt-6 border-b border-border pb-6 font-display text-xl md:text-2xl">
              {t(
                "Works range from $5,000 to $25,000 depending on size format. Pricing is shared on request.",
                "Les œuvres sont offertes entre 5 000 $ et 25 000 $ selon le format. Les prix sont communiqués sur demande.",
              )}
            </p>
          </div>
        </section>

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
