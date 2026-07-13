import type { Metadata } from "next";
import { InsightsContent } from "@/components/pages/InsightsContent";
import { LanguageProvider } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Insights | KAMAO Mining",
  description:
    "Read insights from Kamao Mining on the DRC mineral sector, critical minerals, responsible mining and global supply chains.",
  path: "/insights/",
});

export default function InsightsPage() {
  return (
    <LanguageProvider lang="en">
      <InsightsContent />
    </LanguageProvider>
  );
}
