import type { Metadata } from "next";
import { TermsContent } from "@/components/pages/TermsContent";
import { LanguageProvider } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Terms of Use | KAMAO Mining",
  description: "Read the Kamao Mining Company Limited Terms of Use.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <LanguageProvider lang="en">
      <TermsContent />
    </LanguageProvider>
  );
}
