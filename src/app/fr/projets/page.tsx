import type { Metadata } from "next";
import { ProjectsContent } from "@/components/pages/ProjectsContent";
import { LanguageProvider } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Projets | KAMAO Mining",
  description:
    "Les informations de projet vérifiées de Kamao Mining seront publiées ici dès qu'elles seront disponibles.",
  path: "/fr/projets/",
  lang: "fr",
});

export default function FrenchProjectsPage() {
  return (
    <LanguageProvider lang="fr">
      <ProjectsContent />
    </LanguageProvider>
  );
}
