"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useDictionary, useLanguage } from "@/lib/i18n";
import { minerals, type Mineral } from "@/content/minerals";

export function MineralDetailContent({ mineral }: { mineral: Mineral }) {
  const lang = useLanguage();
  const dict = useDictionary();

  const relatedMinerals = minerals.filter((m) => mineral.related.includes(m.slug));

  return (
    <>
      <section className="relative overflow-hidden bg-kamao-earth pb-16 pt-36 md:pb-24 md:pt-44">
        <Container>
          <Link
            href={lang === "fr" ? "/fr/mineraux/" : "/minerals/"}
            className="inline-flex items-center text-sm font-medium text-kamao-mist/80 hover:text-kamao-copper"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {dict.nav.minerals}
          </Link>
          <h1 className="mt-6 max-w-3xl font-heading text-page font-bold text-white md:text-hero">
            {mineral.pageHeading[lang]}
          </h1>
        </Container>
      </section>

      <section className="bg-kamao-mist py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-square">
              <Image
                src={mineral.image}
                alt={mineral.imageAlt[lang]}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
            <div>
              <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-kamao-copper">
                {dict.minerals.detail.overview}
              </span>
              <div className="space-y-5 text-lg leading-relaxed text-kamao-graphite/85">
                {mineral.pageCopy[lang].map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10">
                <h2 className="font-heading text-xl font-bold text-kamao-earth">
                  {dict.minerals.detail.applications}
                </h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {mineral.applications[lang].map((app, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-kamao-graphite/80"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-kamao-copper" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <Button
                  variant="primary"
                  href={lang === "fr" ? "/fr/contact/" : "/contact/"}
                >
                  {dict.actions.contactUs}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {relatedMinerals.length > 0 && (
        <section className="bg-kamao-sand py-16 md:py-24">
          <Container>
            <h2 className="font-heading text-section font-bold text-kamao-earth">
              {dict.minerals.detail.relatedMinerals}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedMinerals.map((related) => {
                const href =
                  lang === "fr"
                    ? `/fr/mineraux/${related.slug}/`
                    : `/minerals/${related.slug}/`;
                return (
                  <Link
                    key={related.slug}
                    href={href}
                    className="group flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <span className="font-heading text-lg font-bold text-kamao-earth group-hover:text-kamao-copper">
                      {related.name[lang]}
                    </span>
                    <ArrowRight className="h-5 w-5 text-kamao-copper transition-transform group-hover:translate-x-1" />
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
