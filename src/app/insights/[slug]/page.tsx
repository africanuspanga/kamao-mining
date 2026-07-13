import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleDetailContent } from "@/components/pages/ArticleDetailContent";
import { LanguageProvider } from "@/lib/i18n";
import { blogArticles, getArticleBySlug } from "@/content/blog";
import { createArticleMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return createArticleMetadata({
    title: article.seoTitle.en,
    description: article.metaDescription.en,
    path: `/insights/${slug}/`,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    image: article.heroImage,
    imageAlt: article.imageAlt.en,
  });
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <LanguageProvider lang="en">
      <ArticleDetailContent article={article} />
    </LanguageProvider>
  );
}
