"use client";

import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useDictionary, useLanguage } from "@/lib/i18n";

export function OperationsContent() {
  const lang = useLanguage();
  const dict = useDictionary();

  return (
    <>
      <PageHero
        heading={dict.operations.hero.heading}
        intro={dict.operations.hero.intro}
        breadcrumbs={[
          {
            label: dict.nav.operations,
            href: lang === "fr" ? "/fr/operations/" : "/operations/",
          },
        ]}
      />

      <section className="bg-kamao-mist py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow={dict.operations.capabilities.eyebrow}
            heading={dict.operations.capabilities.heading}
            align="center"
            className="mx-auto"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dict.operations.capabilities.areas.map((area, index) => (
              <div
                key={index}
                className="rounded-2xl border-t-4 border-kamao-copper bg-white p-6 shadow-sm"
              >
                <h3 className="font-heading text-xl font-bold text-kamao-earth">
                  {area.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {area.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-kamao-graphite/80"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-kamao-copper" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-kamao-earth py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/aerial-crushing-operation.jpg"
                alt={dict.operations.closing.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-white md:text-section">
                {dict.operations.closing.heading}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-kamao-mist/80">
                {dict.operations.closing.copy}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
