"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useDictionary, useLanguage } from "@/lib/i18n";
import { minerals } from "@/content/minerals";

export function MineralsContent() {
  const lang = useLanguage();
  const dict = useDictionary();

  return (
    <>
      <PageHero
        heading={dict.minerals.hero.heading}
        intro={dict.minerals.hero.intro}
        centered
        breadcrumbs={[
          {
            label: dict.nav.minerals,
            href: lang === "fr" ? "/fr/mineraux/" : "/minerals/",
          },
        ]}
      />

      <section className="bg-kamao-mist py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow={dict.home.minerals.eyebrow}
            heading={dict.home.minerals.heading}
            description={dict.home.minerals.description}
            align="center"
            className="mx-auto"
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {minerals.map((mineral) => {
              const href =
                lang === "fr"
                  ? `/fr/mineraux/${mineral.slug}/`
                  : `/minerals/${mineral.slug}/`;
              return (
                <Link
                  key={mineral.slug}
                  href={href}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={mineral.image}
                      alt={mineral.imageAlt[lang]}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-kamao-earth/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 font-heading text-2xl font-bold text-white">
                      {mineral.name[lang]}
                    </h3>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="flex-1 text-kamao-graphite/80">
                      {mineral.shortStatement[lang]}
                    </p>
                    <span className="mt-4 inline-flex items-center font-semibold text-kamao-copper">
                      {dict.actions.learnMore}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
