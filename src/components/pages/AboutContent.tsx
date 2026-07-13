"use client";

import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useDictionary } from "@/lib/i18n";

export function AboutContent() {
  const dict = useDictionary();

  return (
    <>
      <PageHero heading={dict.about.hero.heading} intro={dict.about.hero.intro} />

      <section className="bg-kamao-mist py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-md md:p-10">
              <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-kamao-copper">
                {dict.about.mission.eyebrow}
              </span>
              <h2 className="font-heading text-card font-bold text-kamao-earth md:text-section">
                {dict.about.mission.heading}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-kamao-graphite/85">
                {dict.about.mission.text}
              </p>
            </div>
            <div className="rounded-2xl bg-kamao-earth p-8 md:p-10">
              <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-kamao-copper">
                {dict.about.vision.eyebrow}
              </span>
              <h2 className="font-heading text-card font-bold text-white md:text-section">
                {dict.about.vision.heading}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-kamao-mist/85">
                {dict.about.vision.text}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-kamao-sand py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow={dict.about.values.eyebrow}
            heading={dict.about.values.heading}
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dict.about.values.items.map((value, index) => (
              <div
                key={index}
                className="rounded-2xl border-t-4 border-kamao-copper bg-white p-6 shadow-md"
              >
                <h3 className="font-heading text-xl font-bold text-kamao-earth">
                  {value.title}
                </h3>
                <p className="mt-3 text-kamao-graphite/80">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
