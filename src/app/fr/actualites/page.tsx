import type { Metadata } from "next";
import { InsightsContent } from "@/components/pages/InsightsContent";
import { LanguageProvider } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Actualités | KAMAO Mining",
  description:
    "Lisez les perspectives de Kamao Mining sur le secteur minier de la RDC, les minéraux critiques, l'exploitation minière responsable et les chaînes d'approvisionnement mondiales.",
  path: "/fr/actualites/",
  lang: "fr",
});

export default function FrenchInsightsPage() {
  return (
    <LanguageProvider lang="fr">
      <InsightsContent />
    </LanguageProvider>
  );
}
