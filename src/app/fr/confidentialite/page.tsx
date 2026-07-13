import type { Metadata } from "next";
import { PrivacyContent } from "@/components/pages/PrivacyContent";
import { LanguageProvider } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Politique de confidentialité | KAMAO Mining",
  description:
    "Lisez la politique de confidentialité de Kamao Mining Company Limited.",
  path: "/fr/confidentialite/",
  lang: "fr",
});

export default function FrenchPrivacyPage() {
  return (
    <LanguageProvider lang="fr">
      <PrivacyContent />
    </LanguageProvider>
  );
}
