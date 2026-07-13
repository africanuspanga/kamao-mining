"use client";

import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { useDictionary } from "@/lib/i18n";

export function TermsContent() {
  const dict = useDictionary();
  const sections = [
    dict.terms.sections.use,
    dict.terms.sections.accuracy,
    dict.terms.sections.intellectual,
    dict.terms.sections.links,
    dict.terms.sections.liability,
    dict.terms.sections.governing,
  ];

  return (
    <>
      <PageHero
        heading={dict.terms.hero.heading}
        intro={dict.terms.hero.intro}
      />
      <section className="bg-kamao-mist py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-12">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="font-heading text-2xl font-bold text-kamao-earth">
                  {section.heading}
                </h2>
                <p className="mt-4 leading-relaxed text-kamao-graphite/80">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
