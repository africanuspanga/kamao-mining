"use client";

import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { useDictionary } from "@/lib/i18n";

export function PrivacyContent() {
  const dict = useDictionary();
  const sections = [
    dict.privacy.sections.information,
    dict.privacy.sections.use,
    dict.privacy.sections.sharing,
    dict.privacy.sections.security,
    dict.privacy.sections.rights,
    dict.privacy.sections.changes,
  ];

  return (
    <>
      <PageHero
        heading={dict.privacy.hero.heading}
        intro={dict.privacy.hero.intro}
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
