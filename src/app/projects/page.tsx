import type { Metadata } from "next";
import { ProjectsContent } from "@/components/pages/ProjectsContent";
import { LanguageProvider } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Projects | KAMAO Mining",
  description:
    "Verified Kamao Mining project information will be published here once available. We do not display fictional or unverified projects.",
  path: "/projects/",
});

export default function ProjectsPage() {
  return (
    <LanguageProvider lang="en">
      <ProjectsContent />
    </LanguageProvider>
  );
}
