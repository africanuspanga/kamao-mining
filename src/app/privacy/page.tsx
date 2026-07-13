import type { Metadata } from "next";
import { PrivacyContent } from "@/components/pages/PrivacyContent";
import { LanguageProvider } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy | KAMAO Mining",
  description: "Read the Kamao Mining Company Limited Privacy Policy.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <LanguageProvider lang="en">
      <PrivacyContent />
    </LanguageProvider>
  );
}
