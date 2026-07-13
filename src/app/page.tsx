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
import { defaultMetadata } from "@/lib/metadata";

export const metadata: Metadata = defaultMetadata;

export default function HomePage() {
  return (
    <LanguageProvider lang="en">
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
