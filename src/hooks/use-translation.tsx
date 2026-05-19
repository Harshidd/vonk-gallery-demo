"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { translations, type Lang, type Translations } from "@/lib/translations";

interface LanguageContextValue {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "tr" : "en"));
  }, []);

  const value: LanguageContextValue = {
    lang,
    t: translations[lang],
    toggleLang,
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useTranslation(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return ctx;
}
