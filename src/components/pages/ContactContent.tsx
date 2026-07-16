"use client";

import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { useDictionary, useLanguage } from "@/lib/i18n";

export function ContactContent() {
  const lang = useLanguage();
  const dict = useDictionary();

  return (
    <>
      <PageHero
        heading={dict.contact.hero.heading}
        intro={dict.contact.hero.copy}
        breadcrumbs={[
          {
            label: dict.nav.contact,
            href: lang === "fr" ? "/fr/contact/" : "/contact/",
          },
        ]}
      />

      <section className="bg-kamao-mist py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-1">
              <SectionHeader
                eyebrow={dict.contact.details.eyebrow}
                heading={dict.contact.details.heading}
                align="left"
              />
              <div className="mt-8">
                <ContactDetails />
              </div>
            </div>
            <div className="lg:col-span-2">
              <SectionHeader
                eyebrow={dict.contact.form.eyebrow}
                heading={dict.contact.form.heading}
                align="left"
              />
              <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm md:p-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative h-64 overflow-hidden md:h-80">
        <Image
          src="/mountain-mining-truck.jpg"
          alt={dict.contact.imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-kamao-earth/30" />
      </section>
    </>
  );
}
