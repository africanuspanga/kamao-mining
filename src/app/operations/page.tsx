import type { Metadata } from "next";
import { OperationsContent } from "@/components/pages/OperationsContent";
import { LanguageProvider } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Operations | KAMAO Mining",
  description:
    "Learn how Kamao Mining works across the mineral value chain, from geological assessment and project planning to extraction, preparation and market access.",
  path: "/operations/",
});

export default function OperationsPage() {
  return (
    <LanguageProvider lang="en">
      <OperationsContent />
    </LanguageProvider>
  );
}
