import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/i18n";
import { ResponsibilityContent } from "@/components/pages/ResponsibilityContent";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Responsibility | KAMAO Mining",
  description:
    "Read about Kamao Mining's commitments to health and safety, responsible sourcing, environmental stewardship, communities and ethical governance.",
  path: "/responsibility/",
});

export default function ResponsibilityPage() {
  return (
    <LanguageProvider lang="en">
      <ResponsibilityContent />
    </LanguageProvider>
  );
}
