"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LanguageProvider, getLanguageFromPath } from "@/lib/i18n";
import { useDictionary } from "@/lib/i18n";

export default function NotFoundPage() {
  const pathname = usePathname() || "/";
  const lang = getLanguageFromPath(pathname);

  return (
    <LanguageProvider lang={lang}>
      <NotFoundContent />
    </LanguageProvider>
  );
}

function NotFoundContent() {
  const dict = useDictionary();

  return (
    <section className="flex min-h-[70vh] items-center bg-kamao-mist py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-8xl font-bold text-kamao-copper/30">
            404
          </span>
          <h1 className="mt-4 font-heading text-section font-bold text-kamao-earth">
            {dict.errors.notFoundTitle}
          </h1>
          <p className="mt-4 text-lg text-kamao-graphite/80">
            {dict.errors.notFoundMessage}
          </p>
          <Button variant="primary" href="/" className="mt-8">
            {dict.errors.goHome}
          </Button>
        </div>
      </Container>
    </section>
  );
}
