"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { useDictionary, useLanguage } from "@/lib/i18n";
import { getLatestArticles } from "@/content/blog";
import { formatDate } from "@/lib/formatting";

export function InsightsPreview() {
  const lang = useLanguage();
  const dict = useDictionary();
  const articles = getLatestArticles(3);

  if (articles.length === 0) return null;

  return (
    <section className="bg-kamao-sand py-20 md:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            heading={dict.home.insights.heading}
            description={dict.home.insights.description}
            align="left"
            className="sm:text-left"
          />
          <Button
            variant="outline"
            href={lang === "fr" ? "/fr/actualites/" : "/insights/"}
            className="self-start sm:self-auto"
          >
            {dict.actions.viewAll}
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => {
            const href =
              lang === "fr"
                ? `/fr/actualites/${article.slug}/`
                : `/insights/${article.slug}/`;
            return (
              <Link
                key={article.slug}
                href={href}
                className="group flex flex-col overflow-hidden rounded-sm bg-white shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kamao-copper focus-visible:ring-offset-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.heroImage}
                    alt={article.imageAlt[lang]}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-kamao-copper">
                    {article.category[lang]}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-bold text-kamao-earth group-hover:text-kamao-copper">
                    {article.title[lang]}
                  </h3>
                  <p className="mt-3 flex-1 text-kamao-graphite/80">
                    {article.excerpt[lang]}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-sm text-kamao-graphite/60">
                    <time dateTime={article.publishedAt}>
                      {formatDate(article.publishedAt, lang)}
                    </time>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readingTime} {dict.insights.meta.readingTime}
                    </span>
                  </div>
                  <span className="mt-4 inline-flex items-center font-semibold text-kamao-copper">
                    {dict.actions.readArticle}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
