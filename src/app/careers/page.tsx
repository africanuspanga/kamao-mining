import type { Metadata } from "next";
import { CareersContent } from "@/components/pages/CareersContent";
import { LanguageProvider } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Careers | KAMAO Mining",
  description:
    "Join Kamao Mining. Explore career opportunities in geology, mining operations, health and safety, engineering, logistics and more in the DRC.",
  path: "/careers/",
});

export default function CareersPage() {
  return (
    <LanguageProvider lang="en">
      <CareersContent />
    </LanguageProvider>
  );
}
