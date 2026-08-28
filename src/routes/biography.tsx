import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/lang";
import { Container } from "@/components/Section";
import { PrizeItem } from "@/components/ExhibitionParts";
import artSchoolImage from "@/assets/studio-arteboul-art-school.jpeg.asset.json";
const portrait = "/herve-teboul-portrait.jpg";

export const Route = createFileRoute("/biography")({
  head: () => ({
    meta: [
      { title: "Biography | Biographie — Hervé Teboul" },
      {
        name: "description",
        content:
          "French artist based in Montreal since 2001, working in post-impressionist and contemporary mixed media.",
      },
      { property: "og:title", content: "Biography | Biographie — Hervé Teboul" },
      {
        property: "og:description",
        content:
          "From Provençal post-impressionism to contemporary mixed media: gold leaf, silver leaf, acrylic, and epoxy.",
      },
    ],
  }),
  component: Biography,
});

function Biography() {
  const { t } = useLang();

  const bioEn = `Hervé Teboul is a French artist and art teacher who has lived in Montreal, Canada, since 2001.

Passionate about art since childhood, he attended workshops in Nice around the age of 18, perfecting his technique and exploring painting in the south of France, where he lived until his thirties.

Gardens, the countryside, and bodies of water were his main sources of inspiration. A Post-Impressionist painter since 1998, he has produced several collections of paintings in which the light and Mediterranean colors have captivated numerous art lovers and collectors in Europe, Canada, and the United States, who have visited his studio-galleries and art schools to acquire his highly sought-after works.

After various periods, he now paints in a contemporary style on a variety of themes that interest him, using acrylics, gold or silver leaf, and epoxy.

Exhibitions and private collections internationally.

Hervé Teboul Art School since 2001 for students and artists of all levels.`;

  const bioFr = `Hervé Teboul est un artiste français et professeur d'art qui vit à Montréal, Canada, depuis 2001.

Passionné par l'art depuis son enfance, il a fréquenté des ateliers à Nice vers l'âge de 18 ans, perfectionnant sa technique et explorant la peinture dans le sud de la France, où il a vécu jusqu'à sa trentaine.

Les jardins, la campagne et les plans d'eau ont été ses principales sources d'inspiration. Peintre post-impressionniste depuis 1998, il a produit plusieurs collections de peintures dans lesquelles la lumière et les couleurs méditerranéennes ont captivé de nombreux amateurs d'art et collectionneurs en Europe, au Canada et aux États-Unis, qui ont visité ses ateliers-galeries et ses écoles d'art pour acquérir ses œuvres très recherchées.

Après différentes périodes, il peint désormais dans un style contemporain sur une variété de thèmes qui l'intéressent, en utilisant l'acrylique, les feuilles d'or ou d'argent et l'époxy.

Expositions et collections privées à l'international.

École d'art Hervé Teboul depuis 2001 pour étudiants et artistes de tous niveaux.`;



  return (
    <Container>
      <div className="grid gap-16 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-accent">
            {t("Biography", "Biographie")}
          </p>
          <h1 className="mt-6 font-display text-4xl leading-tight md:text-6xl">Hervé Teboul</h1>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/85">
            {t(bioEn, bioFr)
              .split("\n\n")
              .map((paragraph, i) => {
                const enMarker = "Hervé Teboul Art School";
                const frMarker = "École d'art Hervé Teboul";
                const marker = paragraph.includes(frMarker)
                  ? frMarker
                  : paragraph.includes(enMarker)
                    ? enMarker
                    : null;
                if (!marker) return <p key={i}>{paragraph}</p>;
                const [before, after] = paragraph.split(marker);
                return (
                  <p key={i}>
                    {before}
                    <strong>{marker}</strong>
                    {after}
                  </p>
                );
              })}
          </div>

          <img
            src={artSchoolImage.url}
            alt={t(
              "Hervé Teboul Art School — students painting in the studio",
              "École d'art Hervé Teboul — élèves peignant dans l'atelier",
            )}
            loading="lazy"
            width={1024}
            height={768}
            className="mt-14 w-full object-cover plate"
          />
        </div>

        <div className="lg:pt-24">
          <img
            src={portrait}
            alt={t(
              "Portrait of Hervé Teboul",
              "Portrait de Hervé Teboul",
            )}
            loading="lazy"
            width={1024}
            height={1280}
            className="w-full object-cover plate"
          />
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t("Hervé Teboul in his studio — Montreal", "Hervé Teboul dans son atelier — Montréal")}
          </p>
        </div>
      </div>

      <section className="border-t border-border py-14">
        <h2 className="mb-8 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
          {t("Distinctions", "Reconnaissances")}
        </h2>
        <ul className="divide-y divide-border">
          <PrizeItem />

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
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
{[
                { src: "/dict-roussan.webp", alt: t("Guide de Roussan, Marché de l'art au Québec", "Guide de Roussan, Marché de l'art au Québec") },
                { src: "/dict-magazinart.webp", alt: t("Répertoire biennal des artistes canadiens en galeries, Magazin'art", "Répertoire biennal des artistes canadiens en galeries, Magazin'art") },
                { src: "/dict-drouot.webp", alt: t("Dictionnaire Drouot Cotation, Larousse", "Dictionnaire Drouot Cotation, Larousse") },
              ].map((img) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="max-w-full h-auto object-contain"
                />
              ))}
            </div>
          </li>
        </ul>
      </section>
    </Container>
  );
}
