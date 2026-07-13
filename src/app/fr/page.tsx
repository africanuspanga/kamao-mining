import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { CredibilityStrip } from "@/components/home/CredibilityStrip";
import { Introduction } from "@/components/home/Introduction";
import { MineralPortfolio } from "@/components/home/MineralPortfolio";
import { OperationsProcess } from "@/components/home/OperationsProcess";
import { ResponsibilityPreview } from "@/components/home/ResponsibilityPreview";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { Industries } from "@/components/home/Industries";
import { InsightsPreview } from "@/components/home/InsightsPreview";
import { ClosingCTA } from "@/components/home/ClosingCTA";
import { LanguageProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "KAMAO Mining Company Limited | Des ressources pour un monde connecté",
  description:
    "Kamao Mining Company Limited est une entreprise minière basée en RDC, spécialisée dans le développement et l'approvisionnement en minéraux soutenant l'énergie moderne, les infrastructures, la technologie et l'industrie mondiale.",
};

export default function FrenchHomePage() {
  return (
    <LanguageProvider lang="fr">
      <Hero />
      <CredibilityStrip />
      <Introduction />
      <MineralPortfolio />
      <OperationsProcess />
      <ResponsibilityPreview />
      <ProjectsPreview />
      <Industries />
      <InsightsPreview />
      <ClosingCTA />
    </LanguageProvider>
  );
}
