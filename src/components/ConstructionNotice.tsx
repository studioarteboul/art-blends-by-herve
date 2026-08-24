import { useLang } from "@/lib/lang";

export function ConstructionNotice() {
  const { t } = useLang();
  return (
    <div className="border-b border-border/60 px-6 py-2 text-center">
      <p className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
        {t("Website under construction", "Site en construction")}
      </p>
    </div>
  );
}
