import type { Metadata } from "next";
import { AboutContent } from "@/components/pages/AboutContent";
import { LanguageProvider } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About KAMAO Mining | A Congolese Mining Company with a Global Outlook",
  description:
    "Learn about Kamao Mining Company Limited, our mission, vision and values as a DRC-based mining company focused on responsible mineral development.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <LanguageProvider lang="en">
      <AboutContent />
    </LanguageProvider>
  );
}
