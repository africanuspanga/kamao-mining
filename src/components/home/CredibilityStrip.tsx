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
    <section className="border-b border-kamao-earth/10 bg-kamao-mist py-8">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 border-l-2 border-kamao-copper pl-4"
            >
              <span className="font-heading text-lg font-bold text-kamao-earth">
                {item}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
