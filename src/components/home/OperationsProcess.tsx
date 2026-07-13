"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useDictionary } from "@/lib/i18n";

export function OperationsProcess() {
  const dict = useDictionary();

  return (
    <section className="bg-kamao-earth py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow={dict.home.operations.eyebrow}
          heading={dict.home.operations.heading}
          align="center"
          dark
          className="mx-auto"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dict.home.operations.stages.map((stage, index) => (
            <div
              key={index}
              className="relative border-l-2 border-kamao-copper/40 bg-kamao-graphite/40 p-6 pl-8"
            >
              <span className="absolute -left-[2px] top-6 h-2 w-2 -translate-x-1/2 rounded-full bg-kamao-copper" />
              <span className="mb-2 block font-heading text-4xl font-bold text-kamao-copper/30">
                {stage.number}
              </span>
              <h3 className="mb-3 font-heading text-xl font-bold text-white">
                {stage.title}
              </h3>
              <p className="text-kamao-mist/75">{stage.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
