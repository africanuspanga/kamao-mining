import type { Metadata } from "next";
import { ContactContent } from "@/components/pages/ContactContent";
import { LanguageProvider } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact | KAMAO Mining",
  description:
    "Contactez Kamao Mining pour l'approvisionnement en minéraux, les partenariats de projet, la collaboration technique, l'investissement, les opportunités fournisseur, les carrières ou les demandes des médias.",
  path: "/fr/contact/",
  lang: "fr",
});

export default function FrenchContactPage() {
  return (
    <LanguageProvider lang="fr">
      <ContactContent />
    </LanguageProvider>
  );
}
