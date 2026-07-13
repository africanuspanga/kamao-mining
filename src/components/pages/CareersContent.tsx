"use client";

import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { useDictionary } from "@/lib/i18n";
import { company } from "@/content/company";
import { formatEmailHref } from "@/lib/formatting";

export function CareersContent() {
  const dict = useDictionary();

  return (
    <>
      <PageHero heading={dict.careers.hero.heading} intro={dict.careers.hero.copy} />

      <section className="bg-kamao-mist py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow={dict.careers.categories.eyebrow}
            heading={dict.careers.categories.heading}
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dict.careers.categories.items.map((category, index) => (
              <div
                key={index}
                className="rounded-2xl border-t-4 border-kamao-copper bg-white p-6 shadow-md"
              >
                <h3 className="font-heading text-lg font-bold text-kamao-earth">
                  {category}
                </h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-kamao-earth py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader
              eyebrow={dict.careers.application.eyebrow}
              heading={dict.careers.application.heading}
              align="center"
              dark
            />
            <p className="mt-6 text-lg leading-relaxed text-kamao-mist/80">
              {dict.careers.application.instruction}
            </p>
            <div className="mt-4 inline-flex items-center rounded-2xl bg-kamao-graphite/40 px-4 py-3 text-sm text-kamao-mist/90">
              {dict.careers.application.warning}
            </div>
            <div className="mt-8">
              <Button
                variant="primary"
                size="lg"
                href={formatEmailHref(company.email, "Career Application")}
              >
                {dict.careers.application.button}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
