"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useDictionary, useLanguage } from "@/lib/i18n";

export function Introduction() {
  const lang = useLanguage();
  const dict = useDictionary();

  return (
    <section className="bg-kamao-sand py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              eyebrow={dict.home.intro.eyebrow}
              heading={dict.home.intro.heading}
              align="left"
            />
            <div className="mt-6 space-y-5 text-kamao-graphite/85">
              {dict.home.intro.copy.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <Link
              href={lang === "fr" ? "/fr/a-propos/" : "/about/"}
              className="mt-8 inline-flex items-center font-semibold text-kamao-copper hover:text-kamao-copper/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kamao-copper focus-visible:ring-offset-2"
            >
              {dict.home.intro.link}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-square">
            <Image
              src="/open-pit-terraces.jpg"
              alt={dict.home.intro.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
