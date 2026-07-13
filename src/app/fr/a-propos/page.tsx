import type { Metadata } from "next";
import { AboutContent } from "@/components/pages/AboutContent";
import { LanguageProvider } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "À propos | KAMAO Mining",
  description:
    "Découvrez Kamao Mining Company Limited, notre mission, notre vision et nos valeurs en tant qu'entreprise minière basée en RDC axée sur le développement minier responsable.",
  path: "/fr/a-propos/",
  lang: "fr",
});

export default function FrenchAboutPage() {
  return (
    <LanguageProvider lang="fr">
      <AboutContent />
    </LanguageProvider>
  );
}
