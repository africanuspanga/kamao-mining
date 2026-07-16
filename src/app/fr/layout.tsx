import type { Metadata, Viewport } from "next";
import { LanguageProvider } from "@/lib/i18n";
import { siteUrl, defaultMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: {
    default: "KAMAO Mining Company Limited | Des ressources pour un monde connecté",
    template: "%s | KAMAO Mining",
  },
  description:
    "Kamao Mining Company Limited est une entreprise minière basée en RDC, spécialisée dans le développement et l'approvisionnement en minéraux soutenant l'énergie moderne, les infrastructures, la technologie et l'industrie mondiale.",
  alternates: {
    canonical: `${siteUrl}/fr/`,
    languages: {
      "en-US": siteUrl,
      "fr-FR": `${siteUrl}/fr/`,
    },
  },
  openGraph: {
    ...defaultMetadata.openGraph,
    locale: "fr_FR",
    url: `${siteUrl}/fr/`,
    title: "KAMAO Mining Company Limited | Des ressources pour un monde connecté",
    description:
      "Kamao Mining Company Limited est une entreprise minière basée en RDC, spécialisée dans le développement et l'approvisionnement en minéraux soutenant l'énergie moderne, les infrastructures, la technologie et l'industrie mondiale.",
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: "KAMAO Mining Company Limited | Des ressources pour un monde connecté",
    description:
      "Kamao Mining Company Limited est une entreprise minière basée en RDC, spécialisée dans le développement et l'approvisionnement en minéraux soutenant l'énergie moderne, les infrastructures, la technologie et l'industrie mondiale.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1822",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function FrenchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LanguageProvider lang="fr">{children}</LanguageProvider>;
}
