import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MineralDetailContent } from "@/components/pages/MineralDetailContent";
import { LanguageProvider } from "@/lib/i18n";
import { minerals, getMineralBySlug } from "@/content/minerals";
import { createMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return minerals.map((mineral) => ({ slug: mineral.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const mineral = getMineralBySlug(slug);
  if (!mineral) return {};

  return createMetadata({
    title: `${mineral.name.fr} | KAMAO Mining`,
    description: mineral.shortStatement.fr,
    path: `/fr/mineraux/${slug}/`,
    image: mineral.image,
    imageAlt: mineral.imageAlt.fr,
    lang: "fr",
  });
}

export default async function FrenchMineralDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mineral = getMineralBySlug(slug);
  if (!mineral) notFound();

  return (
    <LanguageProvider lang="fr">
      <MineralDetailContent mineral={mineral} />
    </LanguageProvider>
  );
}
