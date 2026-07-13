"use client";

import React, { createContext, useContext } from "react";
import { en } from "@/content/translations/en";
import { fr } from "@/content/translations/fr";

export type Language = "en" | "fr";

const dictionaries = { en, fr };

export type Dictionary = typeof en;

export function getDictionary(lang: Language): Dictionary {
  return dictionaries[lang];
}

export function getLanguageFromPath(pathname: string): Language {
  return pathname.startsWith("/fr") ? "fr" : "en";
}

const DictionaryContext = createContext<{
  lang: Language;
  dictionary: Dictionary;
}>({ lang: "en", dictionary: en });

export function LanguageProvider({
  lang,
  children,
}: {
  lang: Language;
  children: React.ReactNode;
}) {
  const dictionary = dictionaries[lang];
  return (
    <DictionaryContext.Provider value={{ lang, dictionary }}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary() {
  const context = useContext(DictionaryContext);
  if (!context) {
    throw new Error("useDictionary must be used within a LanguageProvider");
  }
  return context.dictionary;
}

export function useLanguage() {
  const context = useContext(DictionaryContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context.lang;
}
