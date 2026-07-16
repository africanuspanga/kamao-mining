"use client";

import { Container } from "@/components/ui/Container";
import { useDictionary } from "@/lib/i18n";

export function CredibilityStrip() {
  const dict = useDictionary();

  const items = [
    dict.home.credibility.drcBased,
    dict.home.credibility.diversifiedFocus,
    dict.home.credibility.globalOutlook,
    dict.home.credibility.responsibleGrowth,
  ];

  return (
    <section className="border-b border-kamao-earth/10 bg-kamao-mist py-10">
      <Container>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 md:gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-left sm:text-center"
            >
              <span className="h-2 w-2 rounded-full bg-kamao-copper" />
              <span className="font-heading text-base font-bold text-kamao-earth md:text-lg">
                {item}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
