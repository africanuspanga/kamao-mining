import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/i18n";
import { ResponsibilityContent } from "@/components/pages/ResponsibilityContent";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Responsabilité | KAMAO Mining",
  description:
    "Découvrez les engagements de Kamao Mining en matière de santé et sécurité, d'approvisionnement responsable, de gestion environnementale, de communautés et de gouvernance éthique.",
  path: "/fr/responsabilite/",
});

export default function FrenchResponsibilityPage() {
  return (
    <LanguageProvider lang="fr">
      <ResponsibilityContent />
    </LanguageProvider>
  );
}
