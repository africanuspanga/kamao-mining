import type { Metadata } from "next";
import { CareersContent } from "@/components/pages/CareersContent";
import { LanguageProvider } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Carrières | KAMAO Mining",
  description:
    "Rejoignez Kamao Mining. Découvrez les opportunités de carrière en géologie, opérations minières, santé et sécurité, ingénierie, logistique et plus en RDC.",
  path: "/fr/carrieres/",
  lang: "fr",
});

export default function FrenchCareersPage() {
  return (
    <LanguageProvider lang="fr">
      <CareersContent />
    </LanguageProvider>
  );
}
