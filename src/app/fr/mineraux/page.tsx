import type { Metadata } from "next";
import { MineralsContent } from "@/components/pages/MineralsContent";
import { LanguageProvider } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Minéraux | KAMAO Mining",
  description:
    "Explorez le focus minéral de Kamao Mining : cobalt, cuivre, coltan, tantale, or, diamants, étain, tungstène et lithium de la RDC.",
  path: "/fr/mineraux/",
  lang: "fr",
});

export default function FrenchMineralsPage() {
  return (
    <LanguageProvider lang="fr">
      <MineralsContent />
    </LanguageProvider>
  );
}
