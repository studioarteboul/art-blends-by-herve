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
        </div>
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
          © {new Date().getFullYear()} Hervé Teboul —{" "}
          {t("All rights reserved", "Tous droits réservés")}
        </p>
      </div>
    </footer>
  );
}
