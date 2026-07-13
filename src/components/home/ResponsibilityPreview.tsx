"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { useDictionary, useLanguage } from "@/lib/i18n";

export function ResponsibilityPreview() {
  const lang = useLanguage();
  const dict = useDictionary();

  return (
    <section className="bg-kamao-mist py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-square">
            <Image
              src="/underground-mine-team.jpg"
              alt={dict.home.responsibility.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow={dict.home.responsibility.eyebrow}
              heading={dict.home.responsibility.heading}
              align="left"
            />
            <div className="mt-6 space-y-4 text-lg text-kamao-graphite/85">
              {dict.home.responsibility.copy.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-6 space-y-3">
              {dict.home.responsibility.priorities.map((priority, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-kamao-copper text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-kamao-graphite/90">{priority}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button
                variant="primary"
                href={lang === "fr" ? "/fr/responsabilite/" : "/responsibility/"}
              >
                {dict.home.responsibility.button}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
