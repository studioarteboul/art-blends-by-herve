import type { ReactNode } from "react";

export function PageHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 md:px-12">
      {eyebrow && (
        <p className="mb-6 text-[0.7rem] uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
      )}
      <h1 className="font-display text-4xl leading-tight md:text-6xl">{title}</h1>
      {intro && <p className="mt-6 text-lg text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-[110rem] px-6 md:px-12">{children}</div>;
}
