import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "fr";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: <T>(en: T, fr: T) => T;
};

const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  t: (en) => en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("ht-lang");
    if (stored === "fr" || stored === "en") setLangState(stored);
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("ht-lang", next);
    document.documentElement.lang = next;
  };

  return (
    <LangContext.Provider
      value={{ lang, setLang, t: (en, fr) => (lang === "fr" ? fr : en) }}
    >
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
