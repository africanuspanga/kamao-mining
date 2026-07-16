"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useDictionary, useLanguage } from "@/lib/i18n";
import { blogArticles, type BlogArticle } from "@/content/blog";
import { createArticleStructuredData } from "@/lib/structured-data";
import { formatDate } from "@/lib/formatting";

export function ArticleDetailContent({ article }: { article: BlogArticle }) {
  const lang = useLanguage();
  const dict = useDictionary();

  const relatedArticles = blogArticles
    .filter((a) => article.related.includes(a.slug))
    .slice(0, 3);

  const structuredData = createArticleStructuredData({
    title: article.title[lang],
    description: article.excerpt[lang],
    path: lang === "fr" ? `/fr/actualites/${article.slug}/` : `/insights/${article.slug}/`,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    image: article.heroImage,
    category: article.category[lang],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative overflow-hidden bg-kamao-earth pb-16 pt-32 md:pb-24 md:pt-44">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={article.heroImage}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-kamao-earth via-kamao-earth/80 to-kamao-earth/60" />
        </div>
        <Container className="relative z-10">
          <Breadcrumbs
            items={[
              {
                label: dict.nav.insights,
                href: lang === "fr" ? "/fr/actualites/" : "/insights/",
              },
              { label: article.title[lang] },
            ]}
            className="text-kamao-mist/70"
          />
          <div className="mt-6 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-kamao-copper">
              {article.category[lang]}
            </span>
            <h1 className="mt-3 font-heading text-3xl font-bold text-white md:text-page">
              {article.title[lang]}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-kamao-mist/80">
              <span>
                {dict.insights.meta.by} {article.author}
              </span>
              <time dateTime={article.publishedAt}>
                {formatDate(article.publishedAt, lang)}
              </time>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readingTime} {dict.insights.meta.readingTime}
              </span>
            </div>
          </div>
        </Container>
      </section>

      <article className="bg-kamao-mist py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={article.heroImage}
                alt={article.imageAlt[lang]}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 66vw, 100vw"
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-kamao-earth prose-a:text-kamao-copper hover:prose-a:text-kamao-copper/80">
              {article.content[lang].map((section, index) => (
                <div key={index}>
                  {section.heading && (
                    <h2 className="mb-4 mt-10 font-heading text-2xl font-bold text-kamao-earth">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="mb-5 leading-relaxed text-kamao-graphite/85"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {article.references[lang].length > 0 && (
              <div className="mt-12 border-t border-kamao-graphite/10 pt-8">
                <h2 className="font-heading text-xl font-bold text-kamao-earth">
                  {dict.insights.meta.references}
                </h2>
                <ul className="mt-4 space-y-2">
                  {article.references[lang].map((reference, index) => (
                    <li key={index} className="text-sm text-kamao-graphite/70">
                      {reference}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Container>
      </article>

      {relatedArticles.length > 0 && (
        <section className="bg-kamao-sand py-16 md:py-24">
          <Container>
            <h2 className="font-heading text-2xl font-bold text-kamao-earth md:text-section">
              {dict.insights.meta.related}
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((related) => {
                const href =
                  lang === "fr"
                    ? `/fr/actualites/${related.slug}/`
                    : `/insights/${related.slug}/`;
                return (
                  <Link
                    key={related.slug}
                    href={href}
                    className="group flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-kamao-copper">
                        {related.category[lang]}
                      </span>
                      <h3 className="mt-1 font-heading text-lg font-bold text-kamao-earth group-hover:text-kamao-copper">
                        {related.title[lang]}
                      </h3>
                    </div>
                    <ArrowRight className="ml-4 h-5 w-5 shrink-0 text-kamao-copper transition-transform group-hover:translate-x-1" />
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-kamao-earth py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-white md:text-section">
              {dict.home.closingCta.heading}
            </h2>
            <Button
              variant="primary"
              size="lg"
              href={lang === "fr" ? "/fr/contact/" : "/contact/"}
              className="mt-8"
            >
              {dict.actions.contactUs}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
