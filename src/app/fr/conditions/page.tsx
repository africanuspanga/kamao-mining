import type { Metadata } from "next";
import { TermsContent } from "@/components/pages/TermsContent";
import { LanguageProvider } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Conditions d'utilisation | KAMAO Mining",
  description:
    "Lisez les conditions d'utilisation de Kamao Mining Company Limited.",
  path: "/fr/conditions/",
  lang: "fr",
});

export default function FrenchTermsPage() {
  return (
    <LanguageProvider lang="fr">
      <TermsContent />
    </LanguageProvider>
  );
}
