import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useLang } from "@/lib/lang";
import { Container } from "@/components/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Studio — Hervé Teboul" },
      {
        name: "description",
        content:
          "Contact Studio ARTeboul in Montreal for appointments, artwork pricing inquiries, and available inventory via Arte Laguna World.",
      },
      { property: "og:title", content: "Contact & Studio — Hervé Teboul" },
      {
        property: "og:description",
        content: "Studio visits by appointment, pricing inquiries, and available inventory.",
      },
    ],
  }),
  component: Contact,
});

const SPLITFORMS_ENDPOINT = "https://splitforms.com";
const SPLITFORMS_ACCESS_KEY = "15c641663fad4ac59758cbbb09037223";

const emptyForm = { name: "", email: "", subject: "", work: "", message: "" };

function Contact() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState(emptyForm);

  const subjects = [
    t("Studio appointment", "Rendez-vous à l'atelier"),
    t("Artwork pricing inquiry", "Demande de prix"),
    t("Available inventory", "Inventaire disponible"),
    t("Press or exhibition", "Presse ou exposition"),
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    setSent(false);
    try {
      const res = await fetch(SPLITFORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: SPLITFORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject || subjects[0],
          work: form.work,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setForm(emptyForm);
      setSent(true);
    } catch {
      setError(
        t(
          "Something went wrong. Please email studioarteboul@gmail.com directly.",
          "Une erreur est survenue. Écrivez directement à studioarteboul@gmail.com.",
        ),
      );
    } finally {
      setSending(false);
    }
  };

  const fieldClass =
    "w-full border-b border-border bg-transparent py-3 text-base outline-none transition-colors focus:border-accent";
  const labelClass = "text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground";


  return (
    <Container>
      <div className="grid gap-16 py-24 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-accent">
            {t("Contact & Studio", "Contact et Atelier")}
          </p>
          <h1 className="mt-6 font-display text-4xl leading-tight md:text-6xl">Studio ARTeboul</h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            {t(
              "Studio visits are available by appointment in Montreal, where the practice has kept its creative roots. Active inventory is also listed on Arte Laguna World and Artio Gallery.",
              "Les visites d'atelier se font sur rendez-vous à Montréal, où la démarche conserve ses racines créatives. L'inventaire actif est également présenté sur Arte Laguna World et Artio Gallery.",
            )}
          </p>

          <dl className="mt-12 space-y-8">
            <div>
              <dt className={labelClass}>{t("Studio", "Atelier")}</dt>
              <dd className="mt-2 font-display text-xl">
                Studio ARTeboul — Montréal, QC
              </dd>
            </div>
            <div>
              <dt className={labelClass}>{t("Email", "Courriel")}</dt>
              <dd className="mt-2 font-display text-xl">studioarteboul@gmail.com</dd>
            </div>
            <div>
              <dt className={labelClass}>{t("Available works", "Œuvres disponibles")}</dt>
              <dd className="mt-2 flex flex-col gap-1 font-display text-xl">
                <a
                  href="https://artelaguna.world/artist/teboul-herve/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  Arte Laguna World
                </a>
                <a
                  href="https://www.artiogallery.com/herv-teboul"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  Artio Gallery
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-8"
        >
          <div>
            <label className={labelClass} htmlFor="name">
              {t("Name", "Nom")}
            </label>
            <input id="name" required className={fieldClass} />
          </div>
          <div>
            <label className={labelClass} htmlFor="email">
              {t("Email", "Courriel")}
            </label>
            <input id="email" type="email" required className={fieldClass} />
          </div>
          <div>
            <label className={labelClass} htmlFor="subject">
              {t("Subject", "Objet")}
            </label>
            <select id="subject" className={fieldClass}>
              {subjects.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass} htmlFor="work">
              {t("Work of interest (optional)", "Œuvre concernée (facultatif)")}
            </label>
            <input id="work" className={fieldClass} />
          </div>
          <div>
            <label className={labelClass} htmlFor="message">
              Message
            </label>
            <textarea id="message" rows={5} required className={fieldClass} />
          </div>
          <button
            type="submit"
            className="border border-foreground px-8 py-4 text-[0.7rem] uppercase tracking-[0.28em] transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {t("Send inquiry", "Envoyer la demande")}
          </button>
          {sent && (
            <p className="text-sm text-accent">
              {t(
                "Thank you — your message has been noted. The studio will reply shortly.",
                "Merci — votre message a été enregistré. L'atelier vous répondra sous peu.",
              )}
            </p>
          )}
        </form>
      </div>
    </Container>
  );
}
