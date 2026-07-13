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
    title: `${mineral.name.en} | KAMAO Mining`,
    description: mineral.shortStatement.en,
    path: `/minerals/${slug}/`,
    image: mineral.image,
    imageAlt: mineral.imageAlt.en,
  });
}

export default async function MineralDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mineral = getMineralBySlug(slug);
  if (!mineral) notFound();

  return (
    <LanguageProvider lang="en">
      <MineralDetailContent mineral={mineral} />
    </LanguageProvider>
  );
}
