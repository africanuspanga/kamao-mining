"use client";

import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { useDictionary, useLanguage } from "@/lib/i18n";
import { company } from "@/content/company";
import { formatEmailHref } from "@/lib/formatting";

export function ResponsibilityContent() {
  const lang = useLanguage();
  const dict = useDictionary();

  const sections = [
    {
      heading: dict.responsibility.sections.healthSafety.heading,
      copy: dict.responsibility.sections.healthSafety.copy,
      items: [] as string[],
      dark: false,
    },
    {
      heading: dict.responsibility.sections.traceability.heading,
      copy: dict.responsibility.sections.traceability.copy,
      items: [] as string[],
      dark: true,
    },
    {
      heading: dict.responsibility.sections.environment.heading,
      copy: dict.responsibility.sections.environment.copy,
      items: dict.responsibility.sections.environment.items,
      dark: false,
    },
    {
      heading: dict.responsibility.sections.community.heading,
      copy: dict.responsibility.sections.community.copy,
      items: dict.responsibility.sections.community.items,
      dark: true,
    },
    {
      heading: dict.responsibility.sections.governance.heading,
      copy: dict.responsibility.sections.governance.copy,
      items: dict.responsibility.sections.governance.items,
      dark: false,
    },
  ];

  const ctaCopy = dict.responsibility.cta.copy.replace("{{email}}", company.email);

  return (
    <>
      <PageHero
        heading={dict.responsibility.hero.heading}
        intro={dict.responsibility.hero.intro}
        breadcrumbs={[
          {
            label: dict.nav.responsibility,
            href: lang === "fr" ? "/fr/responsabilite/" : "/responsibility/",
          },
        ]}
      />

      {sections.map((section, index) => (
        <section
          key={index}
          className={
            section.dark
              ? "bg-kamao-earth py-20 md:py-28"
              : "bg-kamao-mist py-20 md:py-28"
          }
        >
          <Container>
            <div className="mx-auto max-w-4xl">
              <SectionHeader
                heading={section.heading}
                align="center"
                dark={section.dark}
              />
              <p
                className={
                  section.dark
                    ? "mt-6 text-center text-lg leading-relaxed text-kamao-mist/80"
                    : "mt-6 text-center text-lg leading-relaxed text-kamao-graphite/80"
                }
              >
                {section.copy}
              </p>
              {section.items.length > 0 && (
                <ul className="mt-10 grid gap-4 sm:grid-cols-2">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className={
                        section.dark
                          ? "flex items-start gap-3 rounded-2xl bg-kamao-graphite/40 p-4 text-kamao-mist/90"
                          : "flex items-start gap-3 rounded-2xl bg-white p-4 text-kamao-graphite/90 shadow-sm"
                      }
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-kamao-copper" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Container>
        </section>
      ))}

      <section className="bg-kamao-sand py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold text-kamao-earth md:text-section">
              {dict.responsibility.cta.heading}
            </h2>
            <p className="mt-4 text-lg text-kamao-graphite/80">
              {ctaCopy.split(company.email).map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <a
                      href={formatEmailHref(company.email)}
                      className="font-semibold text-kamao-copper hover:underline"
                    >
                      {company.email}
                    </a>
                  )}
                </span>
              ))}
            </p>
            <div className="mt-8">
              <Button
                variant="primary"
                href={formatEmailHref(company.email, "Responsibility Enquiry")}
              >
                {dict.responsibility.cta.button}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
