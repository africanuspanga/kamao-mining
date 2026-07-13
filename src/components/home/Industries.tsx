"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useDictionary } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Industries() {
  const dict = useDictionary();

  return (
    <section className="bg-kamao-earth py-20 md:py-28">
      <Container>
        <SectionHeader
          heading={dict.home.industries.heading}
          align="center"
          dark
          className="mx-auto"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.home.industries.items.map((item, index) => (
            <div
              key={index}
              className={cn(
                "group border border-kamao-graphite bg-kamao-graphite/30 p-6 transition-colors hover:border-kamao-copper/50",
                index === 0 && "lg:col-span-2",
              )}
            >
              <h3 className="font-heading text-lg font-bold text-white group-hover:text-kamao-copper">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
