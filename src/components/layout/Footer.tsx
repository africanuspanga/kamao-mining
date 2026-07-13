"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";
import { getDictionary, getLanguageFromPath } from "@/lib/i18n";
import { formatEmailHref, formatPhoneHref, getYear } from "@/lib/formatting";
import { company } from "@/content/company";
import { navLinks } from "@/content/navigation";

export function Footer() {
  const pathname = usePathname() || "/";
  const lang = getLanguageFromPath(pathname);
  const dict = getDictionary(lang);
  const year = getYear();

  const footerNav = [
    { label: dict.nav.about, href: lang === "fr" ? "/fr/a-propos/" : "/about/" },
    { label: dict.nav.minerals, href: lang === "fr" ? "/fr/mineraux/" : "/minerals/" },
    { label: dict.nav.operations, href: lang === "fr" ? "/fr/operations/" : "/operations/" },
    { label: dict.nav.responsibility, href: lang === "fr" ? "/fr/responsabilite/" : "/responsibility/" },
    { label: dict.nav.insights, href: lang === "fr" ? "/fr/actualites/" : "/insights/" },
    { label: dict.nav.careers, href: lang === "fr" ? "/fr/carrieres/" : "/careers/" },
    { label: dict.nav.contact, href: lang === "fr" ? "/fr/contact/" : "/contact/" },
  ];

  return (
    <footer className="bg-kamao-earth text-white">
      <Container>
        <div className="grid gap-12 border-b border-kamao-graphite py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo variant="light" width={200} />
            <p className="mt-6 max-w-xs text-kamao-mist/80">
              {dict.company.tagline}
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-kamao-copper">
              {dict.footer.navigation}
            </h3>
            <ul className="space-y-3">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-kamao-mist/80 transition-colors hover:text-kamao-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kamao-copper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-kamao-copper">
              {dict.footer.contact}
            </h3>
            <ul className="space-y-3 text-kamao-mist/80">
              <li>
                <a
                  href={formatEmailHref(company.email)}
                  className="transition-colors hover:text-kamao-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kamao-copper"
                >
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={formatPhoneHref(company.drcPhone)}
                  className="transition-colors hover:text-kamao-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kamao-copper"
                >
                  {company.drcPhone}
                </a>
              </li>
              <li>
                <a
                  href={formatPhoneHref(company.regionalPhone)}
                  className="transition-colors hover:text-kamao-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kamao-copper"
                >
                  {company.regionalPhone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-kamao-copper">
              {dict.footer.legal}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={lang === "fr" ? "/fr/confidentialite/" : "/privacy/"}
                  className="text-kamao-mist/80 transition-colors hover:text-kamao-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kamao-copper"
                >
                  {dict.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href={lang === "fr" ? "/fr/conditions/" : "/terms/"}
                  className="text-kamao-mist/80 transition-colors hover:text-kamao-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kamao-copper"
                >
                  {dict.footer.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-8">
          <p className="text-sm text-kamao-mist/50">
            © {year} {dict.company.name}. {lang === "fr" ? "Tous droits réservés." : "All rights reserved."}
          </p>
        </div>
      </Container>
    </footer>
  );
}
