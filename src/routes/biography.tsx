import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/lang";
import { Container } from "@/components/Section";
import portrait from "@/assets/work-texture.jpg";

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

  const bioEn = `Born in France and based in Montreal since 2001, Hervé Teboul is a contemporary painter whose career spans over three decades. Initially inspired by the vibrant landscapes and Mediterranean light of Provence, his early work rooted itself in a colorful post-impressionist style. Over time, his practice has evolved into a bold contemporary exploration. Teboul synthesizes his classical foundations with modern textures, utilizing acrylics, palette knife structures, gold or silver leaf, and epoxy resin layers. Celebrated by international collectors across North America and Europe, his work harmonizes structure and metallic brilliance to capture elegance and timeless forms.`;

  const bioFr = `Né en France et établi à Montréal depuis 2001, Hervé Teboul est un peintre contemporain dont la carrière s'étend sur plus de trois décennies. Initialement inspiré par les paysages vibrants et la lumière méditerranéenne de la Provence, ses débuts s'inscrivent dans un style post-impressionniste coloré. Au fil du temps, sa démarche a évolué vers une pratique contemporaine audacieuse. Teboul synthétise ses fondations classiques avec des textures modernes, utilisant l'acrylique, le travail au couteau, les feuilles d'or ou d'argent, et la résine époxy. Prisé par les collectionneurs en Amérique du Nord et en Europe, son travail harmonise la structure et la brillance métallique pour capturer des formes élégantes et intemporelles.`;

  const facts = [
    { k: t("Born", "Naissance"), v: t("France", "France") },
    { k: t("Based", "Établi à"), v: t("Montreal, since 2001", "Montréal, depuis 2001") },
    { k: t("Practice", "Pratique"), v: t("Over three decades", "Plus de trois décennies") },
    {
      k: t("Media", "Médiums"),
      v: t(
        "Acrylic, palette knife, gold & silver leaf, epoxy",
        "Acrylique, couteau, feuilles d'or et d'argent, époxy",
      ),
    },
  ];

  return (
    <Container>
      <div className="grid gap-16 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-accent">
            {t("Biography", "Biographie")}
          </p>
          <h1 className="mt-6 font-display text-4xl leading-tight md:text-6xl">Hervé Teboul</h1>
          <p className="mt-10 text-lg leading-relaxed text-foreground/85">{t(bioEn, bioFr)}</p>

          <dl className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2">
            {facts.map((f) => (
              <div key={f.k} className="bg-background p-6">
                <dt className="text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
                  {f.k}
                </dt>
                <dd className="mt-2 font-display text-xl">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:pt-24">
          <img
            src={portrait}
            alt={t(
              "Detail of a mixed media canvas by Hervé Teboul",
              "Détail d'une toile technique mixte de Hervé Teboul",
            )}
            loading="lazy"
            width={1024}
            height={1280}
            className="w-full object-cover plate"
          />
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t("Studio detail — Montreal", "Détail d'atelier — Montréal")}
          </p>
        </div>
      </div>
    </Container>
  );
}
