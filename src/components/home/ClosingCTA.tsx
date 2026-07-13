"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useDictionary, useLanguage } from "@/lib/i18n";
import { company } from "@/content/company";
import { formatEmailHref } from "@/lib/formatting";

export function ClosingCTA() {
  const lang = useLanguage();
  const dict = useDictionary();

  return (
    <section className="relative overflow-hidden bg-kamao-earth py-20 md:py-28">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/open-pit-panorama.jpg)" }}
        />
      </div>
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-section font-bold text-white md:text-page">
            {dict.home.closingCta.heading}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-kamao-mist/80 md:text-xl">
            {dict.home.closingCta.copy}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href={lang === "fr" ? "/fr/contact/" : "/contact/"}
            >
              {dict.actions.contactKamao}
            </Button>
            <Button
              variant="outlineWhite"
              size="lg"
              href={formatEmailHref(company.email)}
            >
              {dict.actions.emailTeam}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
