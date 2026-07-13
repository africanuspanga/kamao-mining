import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  metadataBase: new URL("https://kamaomining.com"),
  title: {
    default: "KAMAO Mining Company Limited | Des ressources pour un monde connecté",
    template: "%s | KAMAO Mining",
  },
  description:
    "Kamao Mining Company Limited est une entreprise minière basée en RDC, spécialisée dans le développement et l'approvisionnement en minéraux soutenant l'énergie moderne, les infrastructures, la technologie et l'industrie mondiale.",
  alternates: {
    canonical: "https://kamaomining.com/fr/",
  },
  openGraph: {
    locale: "fr_FR",
  },
};

export default function FrenchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LanguageProvider lang="fr">{children}</LanguageProvider>;
}
