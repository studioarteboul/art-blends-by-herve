import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { Play } from "lucide-react";
import { useLang } from "@/lib/lang";
import { Container } from "@/components/Section";
import { AudioPlayer } from "@/lib/audio";

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
    images: ["/gold-leaf.jpg", "/silver-leaf.jpg", "/rose-gold.png"],
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
    mediumEn: "Acrylic, gold leaf & epoxy",
    mediumFr: "Acrylique, feuille d'or & époxy",
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
    mediumEn: "Acrylic, silver leaf & epoxy",
    mediumFr: "Acrylique, feuille d'argent & époxy",
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
    mediumEn: "Acrylic, silver leaf and epoxy",
    mediumFr: "Acrylique, feuille d'argent et époxy",
    dimensions: "122 × 183 cm",
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
  {
    image: "/rondeurs-dorees.webp",
    titleEn: "Rondeurs Dorées",
    titleFr: "Rondeurs Dorées",
    year: "2025",
    mediumEn: "Acrylic, gold leaf and epoxy",
    mediumFr: "Acrylique, feuille d'or et époxy",
    dimensions: "122 × 91 cm",
  },
  {
    image: "/rose-gala-2025.webp",
    titleEn: "Rose Gala",
    titleFr: "Rose Gala",
    year: "2025",
    mediumEn: "Acrylic, rose gold leaf and epoxy",
    mediumFr: "Acrylique, feuille d'or rose et époxy",
    dimensions: "122 × 91 cm",
  },
  {
    image: "/dance-lascive.jpg",
    titleEn: "Dance Lascive",
    titleFr: "Dance Lascive",
    year: "2025",
    mediumEn: "Acrylic, silver leaf and epoxy",
    mediumFr: "Acrylique, feuille d'argent et époxy",
    dimensions: "122 × 91 cm",
  },
  {
    image: "/a-l-ombre-des-pins.jpg",
    titleEn: "À l'Ombre des Pins",
    titleFr: "À l'Ombre des Pins",
    year: "2025",
    mediumEn: "Acrylic, gold leaf and epoxy",
    mediumFr: "Acrylique, feuille d'or et époxy",
    dimensions: "92 × 122 cm",
  },
  {
    image: "/ambiance-jazzy.jpg",
    titleEn: "Ambiance Jazzy",
    titleFr: "Ambiance Jazzy",
    year: "2025",
    mediumEn: "Acrylic, gold leaf and epoxy",
    mediumFr: "Acrylique, feuille d'or et époxy",
    dimensions: "61 × 92 cm",
  },
  {
    image: "/duo-de-mandarine.jpg",
    titleEn: "Duo de Mandarine",
    titleFr: "Duo de Mandarine",
    year: "2025",
    mediumEn: "Acrylic, gold leaf and epoxy",
    mediumFr: "Acrylique, feuille d'or et époxy",
    dimensions: "92 × 92 cm",
  },
  {
    image: "/fun-d-azur.jpg",
    titleEn: "Fun d'Azur",
    titleFr: "Fun d'Azur",
    year: "2025",
    mediumEn: "Acrylic, silver leaf and epoxy",
    mediumFr: "Acrylique, feuille d'argent et époxy",
    dimensions: "122 × 183 cm",
  },
  {
    image: "/lumiere-d-amour.jpg",
    titleEn: "Lumière d'Amour",
    titleFr: "Lumière d'Amour",
    year: "2025",
    mediumEn: "Acrylic, gold leaf and epoxy",
    mediumFr: "Acrylique, feuille d'or et époxy",
    dimensions: "51 × 61 cm",
  },
  {
    image: "/reine-d-abondance.jpg",
    titleEn: "Reine d'Abondance",
    titleFr: "Reine d'Abondance",
    year: "2025",
    mediumEn: "Acrylic, gold leaf and epoxy",
    mediumFr: "Acrylique, feuille d'or et époxy",
    dimensions: "92 × 92 cm",
  },
  {
    image: "/scintillante.jpg",
    titleEn: "Scintillante",
    titleFr: "Scintillante",
    year: "2025",
    mediumEn: "Acrylic, silver and gold leaf and epoxy",
    mediumFr: "Acrylique, feuilles d'argent et d'or et époxy",
    dimensions: "92 × 122 cm",
  },
  {
    image: "/foret-doree.jpg",
    titleEn: "Chemin Doré",
    titleFr: "Chemin Doré",
    year: "2025",
    mediumEn: "Acrylic, gold leaf and epoxy",
    mediumFr: "Acrylique, feuille d'or et époxy",
    dimensions: "92 × 122 cm",
  },
  {
    image: "/quand-les-vagues-dansent.jpeg",
    titleEn: "Quand les Vagues Dansent",
    titleFr: "Quand les Vagues Dansent",
    year: "2024",
    mediumEn: "Acrylic, silver pearl and epoxy",
    mediumFr: "Acrylique, perle d'argent et époxy",
    dimensions: "51 × 51 cm",
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

const japon: Work[] = Array.from({ length: 7 }, (_, i) => {
  const n = i + 1;
  let dimensions = "";
  if (n === 1) dimensions = "122 × 183 cm";
  else if ([2, 3, 4, 7].includes(n)) dimensions = "92 × 122 cm";
  else if ([5, 6].includes(n)) dimensions = "92 × 92 cm";
  return {
    image: `/ij${n}.jpg`,
    titleEn: `IJ${n}`,
    titleFr: `IJ${n}`,
    year: "2021",
    mediumEn: "Acrylic on canvas",
    mediumFr: "Acrylique sur toile",
    dimensions,
  };
});

const caseisme: Work[] = Array.from({ length: 12 }, (_, i) => {
  const n = i + 1;
  let dimensions = "";
  if (n === 1) dimensions = "92 × 92 cm";
  else if (n === 2) dimensions = "61 × 76 cm";
  else if (n === 3) dimensions = "92 × 102 cm";
  else if (n === 4) dimensions = "92 × 92 cm";
  else if (n === 5) dimensions = "61 × 76 cm";
  else if (n === 6) dimensions = "76 × 92 cm";
  else if (n === 7) dimensions = "76 × 92 cm";
  else if (n === 8) dimensions = "76 × 92 cm";
  else if (n === 9) dimensions = "92 × 76 cm";
  else if (n === 10) dimensions = "122 × 152 cm";
  else if (n === 11) dimensions = "61 × 76 cm";
  else if (n === 12) dimensions = "76 × 92 cm";
  return {
    image: `/cc${n}.jpg`,
    titleEn: `CC${n}`,
    titleFr: `CC${n}`,
    year: "",
    mediumEn: "Oil on canvas",
    mediumFr: "Huile sur toile",
    dimensions,
  };
});

const impressionism: Work[] = Array.from({ length: 5 }, (_, i) => {
  const n = i + 1;
  let dimensions = "";
  if (n === 1) dimensions = "61 × 92 cm";
  else if (n === 2) dimensions = "61 × 92 cm";
  else if (n === 3) dimensions = "76 × 92 cm";
  else if (n === 4) dimensions = "102 × 102 cm";
  else if (n === 5) dimensions = "76 × 102 cm";
  return {
    image: `/ir${n}.jpg`,
    titleEn: `IR${n}`,
    titleFr: `IR${n}`,
    year: "",
    mediumEn: "Oil on canvas",
    mediumFr: "Huile sur toile",
    dimensions,
  };
});

const provence: Work[] = [
  { image: "/pr1.jpg", titleEn: "PR1", titleFr: "PR1", year: "", mediumEn: "Oil on canvas", mediumFr: "Huile sur toile", dimensions: "46 × 56 cm" },
  { image: "/pr2.jpg", titleEn: "PR2", titleFr: "PR2", year: "", mediumEn: "Oil on canvas", mediumFr: "Huile sur toile", dimensions: "51 × 61 cm" },
  { image: "/pr3.jpg", titleEn: "PR3", titleFr: "PR3", year: "", mediumEn: "Oil on canvas", mediumFr: "Huile sur toile", dimensions: "51 × 61 cm" },
  { image: "/pr4.jpg", titleEn: "PR4", titleFr: "PR4", year: "", mediumEn: "Oil on canvas", mediumFr: "Huile sur toile", dimensions: "76 × 92 cm" },
  { image: "/pr5.jpg", titleEn: "PR5", titleFr: "PR5", year: "", mediumEn: "Oil on canvas", mediumFr: "Huile sur toile", dimensions: "61 × 76 cm" },
  { image: "/pr6.jpg", titleEn: "PR6", titleFr: "PR6", year: "", mediumEn: "Oil on canvas", mediumFr: "Huile sur toile", dimensions: "61 × 76 cm" },
  { image: "/pr7.jpg", titleEn: "PR7", titleFr: "PR7", year: "", mediumEn: "Oil on canvas", mediumFr: "Huile sur toile", dimensions: "61 × 76 cm" },
  { image: "/pr8.jpg", titleEn: "PR8", titleFr: "PR8", year: "", mediumEn: "Oil on canvas", mediumFr: "Huile sur toile", dimensions: "61 × 76 cm" },
  { image: "/pr9.jpg", titleEn: "PR9", titleFr: "PR9", year: "", mediumEn: "Oil on canvas", mediumFr: "Huile sur toile", dimensions: "61 × 76 cm" },
  { image: "/pr10.jpg", titleEn: "PR10", titleFr: "PR10", year: "", mediumEn: "Oil on canvas", mediumFr: "Huile sur toile", dimensions: "61 × 76 cm" },
  { image: "/pr11.jpg", titleEn: "PR11", titleFr: "PR11", year: "", mediumEn: "Oil on canvas", mediumFr: "Huile sur toile", dimensions: "61 × 76 cm" },
  { image: "/pr12.jpg", titleEn: "PR12", titleFr: "PR12", year: "", mediumEn: "Oil on canvas", mediumFr: "Huile sur toile", dimensions: "51 × 61 cm" },
  { image: "/pr13.jpg", titleEn: "PR13", titleFr: "PR13", year: "", mediumEn: "Oil on canvas", mediumFr: "Huile sur toile", dimensions: "76 × 92 cm" },
  { image: "/pr14.jpg", titleEn: "PR14", titleFr: "PR14", year: "", mediumEn: "Oil on canvas", mediumFr: "Huile sur toile", dimensions: "61 × 76 cm" },
  { image: "/pr15.jpg", titleEn: "PR15", titleFr: "PR15", year: "", mediumEn: "Oil on canvas", mediumFr: "Huile sur toile", dimensions: "51 × 61 cm" },
  { image: "/pr16.jpg", titleEn: "PR16", titleFr: "PR16", year: "", mediumEn: "Oil on canvas", mediumFr: "Huile sur toile", dimensions: "76 × 92 cm" },
  { image: "/pr17.jpg", titleEn: "PR17", titleFr: "PR17", year: "", mediumEn: "Oil on canvas", mediumFr: "Huile sur toile", dimensions: "61 × 76 cm" },
  { image: "/pr18.jpg", titleEn: "PR18", titleFr: "PR18", year: "", mediumEn: "Oil on canvas", mediumFr: "Huile sur toile", dimensions: "61 × 76 cm" },
  { image: "/pr19.jpg", titleEn: "PR19", titleFr: "PR19", year: "", mediumEn: "Oil on canvas", mediumFr: "Huile sur toile", dimensions: "61 × 76 cm" },
  { image: "/pr20.jpg", titleEn: "PR20", titleFr: "PR20", year: "", mediumEn: "Oil on canvas", mediumFr: "Huile sur toile", dimensions: "51 × 61 cm" },
  { image: "/pr21.jpg", titleEn: "PR21", titleFr: "PR21", year: "", mediumEn: "Oil on canvas", mediumFr: "Huile sur toile", dimensions: "122 × 122 cm" },
  { image: "/pr22.jpg", titleEn: "PR22", titleFr: "PR22", year: "", mediumEn: "Oil on canvas", mediumFr: "Huile sur toile", dimensions: "92 × 92 cm" },
  { image: "/pr23.jpg", titleEn: "PR23", titleFr: "PR23", year: "", mediumEn: "Oil on canvas", mediumFr: "Huile sur toile", dimensions: "92 × 122 cm" },
];



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
                  {slide.labelsEn && slide.labelsFr && (
                    <div className="flex items-center justify-center bg-primary/80 py-3">
                      <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground">
                        {t(slide.labelsEn[j], slide.labelsFr[j])}
                      </span>
                    </div>
                  )}
                  <img
                    src={src}
                    alt={j === 0 ? alt : ""}
                    loading="lazy"
                    className="flex-1 w-full object-cover"
                  />
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

function VideoCard({
  src,
  poster,
  caption,
}: {
  src: string;
  poster?: string | undefined;
  caption?: string | undefined;
}) {
  const [playing, setPlaying] = useState(false);
  return (
    <figure className="group relative overflow-hidden bg-card plate">
      {playing ? (
        <video
          src={src}
          poster={poster}
          autoPlay
          controls
          playsInline
          className="max-w-full h-auto object-cover w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={caption}
          className="block w-full"
        >
          <img
            src={poster}
            alt={caption ?? ""}
            loading="lazy"
            className="max-w-full h-auto object-cover w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-primary/20 transition-colors duration-500 group-hover:bg-primary/30">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-primary-foreground/70 bg-primary/40 backdrop-blur-sm">
              <Play className="ml-0.5 h-6 w-6 text-primary-foreground" />
            </span>
          </span>
          {caption && (
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 to-transparent p-4 text-left text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/90">
              {caption}
            </figcaption>
          )}
        </button>
      )}
    </figure>
  );
}


function Series({
  index,
  title,
  subtitle,
  note,
  description,
  works,
  video,
  videoPoster,
  videoCaption,
}: {
  index: string;
  title: string;
  subtitle?: string;
  note?: string;
  description: string;
  works: Work[];
  video?: string;
  videoPoster?: string;
  videoCaption?: string;
}) {
  const { t } = useLang();
  return (
    <section className="py-20">
      <div className="mb-12 flex flex-col gap-4 border-t border-border pt-8 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-1">
          {note && (
            <p className="text-sm italic text-muted-foreground/80 md:text-base">{note}</p>
          )}
          <div className="flex items-baseline gap-6">
            <span className="text-[0.7rem] uppercase tracking-[0.3em] text-accent">{index}</span>
            <h2 className="font-display text-3xl leading-tight md:text-4xl">{title}</h2>
          </div>
          {subtitle && (
            <p className="ml-[2.4rem] text-sm text-muted-foreground md:text-base">{subtitle}</p>
          )}
        </div>
        <div className="max-w-md">
          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
          <p className="mt-3 text-sm font-semibold text-muted-foreground">
            {t(
              "Some of the works listed below may no longer be available.",
              "Certaines œuvres présentées ci-dessous peuvent ne plus être disponibles.",
            )}
          </p>
        </div>
      </div>
      <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {video && (
          <VideoCard src={video} poster={videoPoster} caption={videoCaption} />
        )}
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
            "French Riviera — Côte d’Azur, 2026",
            "French Riviera — Côte d’Azur, 2026",
          )}
          subtitle={t(
            "Contemporary & Mixed Media",
            "Art contemporain et techniques mixtes",
          )}
          note={t(
            "New collection in production.",
            "Nouvelle collection en production.",
          )}
          description={t(
            "A contemporary tribute to early influences: the Mediterranean, Provence landscapes and the vivid light of Southern France that still governs today's palette.",
            "Un hommage contemporain aux influences des débuts : la Méditerranée, les paysages de Provence et la lumière vive du sud de la France qui gouverne encore la palette d'aujourd'hui.",
          )}
          works={mediterranean}
        />
        <Series
          index="II"
          title={t(
            "Brilliance & Symbolism, 2024 - 2025",
            "Brillance & symbolisme, 2024 - 2025",
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
          video="/brillance-symbolisme.mp4"
          videoPoster="/brillance-symbolisme-poster.jpg"
          videoCaption={t("Studio film — Brilliance & Symbolism", "Film d'atelier — Brillance et symbolisme")}
        />
        <Series
          index="III"
          title={t("Impressionism Revisited, 2022 - 2023", "Impressionnisme Revisité, 2022 - 2023")}
          description={t(
            "Gardens, water and shifting light revisited through a contemporary lens: dense impasto touches that dissolve the motif into pure colour and vibration.",
            "Jardins, eau et lumière changeante revisités par un regard contemporain : des touches épaisses en impasto qui dissolvent le motif en couleur et vibration pures.",
          )}
          works={impressionism}
          video="/impressionnisme-revisite.mp4"
          videoPoster="/impressionnisme-revisite-poster.jpg"
          videoCaption={t("Studio film — Impressionism Revisited", "Film d'atelier — Impressionnisme Revisité")}
        />

        <Series
          index="IV"
          title={t("Japan Inspired, 2021", "Inspiration Japon, 2021")}
          description={t(
            "A series drawn from Japanese imagery: dancers, samurai and blossoms, painted in acrylic with a restrained, contemplative palette.",
            "Une série inspirée de l'imaginaire japonais : danseuses, samouraïs et floraisons, peints à l'acrylique dans une palette retenue et contemplative.",
          )}
          works={japon}
          video="/inspiration-japon.mp4"
          videoPoster="/inspiration-japon-poster.jpg"
          videoCaption={t("Studio film — Japan Inspired", "Film d'atelier — Inspiration Japon")}
        />

        <Series
          index="V"
          title={t("Caseisme Collection, 2016 - 2020", "Collection Caseisme, 2016 - 2020")}
          description={t(
            "A mosaic of thick palette-knife strokes: each small block of colour is laid down whole, and the image assembles itself from the accumulation.",
            "Une mosaïque de touches épaisses au couteau : chaque petit bloc de couleur est posé entier, et l'image se compose par accumulation.",
          )}
          works={caseisme}
          video="/caseisme.mp4"
          videoPoster="/caseisme-poster.jpg"
          videoCaption={t("Studio film — Caseisme Collection", "Film d'atelier — Collection Caseisme")}
        />
        <Series
          index="VI"
          title={t("Period of Provence, 2000 - 2012", "Période de Provence, 2000 - 2012")}
          description={t(
            "Early Provençal works: vineyards, shaded courtyards, blue shutters and flowering gardens, painted in oil with a warm Southern light.",
            "Œuvres provençales des débuts : vignes, cours ombragées, volets bleus et jardins fleuris, peints à l'huile dans la lumière chaude du Sud.",
          )}
          works={provence}
          video="/period-of-provence.mp4"
          videoPoster="/period-of-provence-poster.jpg"
          videoCaption={t("Studio film — Period of Provence", "Film d'atelier — Période de Provence")}
        />

        <section className="border-t border-border py-20">
          <div className="max-w-4xl">
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-accent">
              {t("Quotation", "Cotation")}
            </p>
            <p className="mt-6 font-display text-xl md:text-2xl">
{t(
                "Available works are offered between $7,000 and $28,000 depending on their quotation by format. Pricing is shared on request.",
                "Les œuvres disponibles sont proposées entre 7 000 $ et 28 000 $ selon leur cotation au format. Les prix sont communiqués sur demande.",
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
