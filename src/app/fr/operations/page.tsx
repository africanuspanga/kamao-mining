import type { Metadata } from "next";
import { OperationsContent } from "@/components/pages/OperationsContent";
import { LanguageProvider } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Opérations | KAMAO Mining",
  description:
    "Découvrez comment Kamao Mining travaille à travers la chaîne de valeur minérale, de l'évaluation géologique à l'accès aux marchés.",
  path: "/fr/operations/",
  lang: "fr",
});

export default function FrenchOperationsPage() {
  return (
    <LanguageProvider lang="fr">
      <OperationsContent />
    </LanguageProvider>
  );
}
