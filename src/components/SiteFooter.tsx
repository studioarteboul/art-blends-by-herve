import { useLang } from "@/lib/lang";

export function SiteFooter() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border/60 px-6 py-14 md:px-12">
      <div className="mx-auto flex max-w-[110rem] flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-lg tracking-[0.2em] uppercase">Hervé Teboul</p>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            {t(
              "Studio ARTeboul — Montreal, Quebec. Visits by appointment.",
              "Studio ARTeboul — Montréal, Québec. Visites sur rendez-vous.",
            )}
          </p>
          <ul className="mt-4 flex flex-wrap gap-4 text-sm">
            <li>
              <a
                href="https://www.instagram.com/studioarteboul"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/studioarteboul"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("Facebook Page", "Page Facebook")}
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/herve.teboul.7"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("Facebook Profile", "Profil Facebook")}
              </a>
            </li>
          </ul>
        </div>
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
          © {new Date().getFullYear()} Hervé Teboul —{" "}
          {t("All rights reserved", "Tous droits réservés")}
        </p>
      </div>
    </footer>
  );
}
