"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getDictionary, getLanguageFromPath, type Language } from "@/lib/i18n";
import { navLinks } from "@/content/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const lang = getLanguageFromPath(pathname || "/");
  const dict = getDictionary(lang);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/" || pathname === "/fr/";
  const transparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-colors duration-300",
        transparent ? "bg-transparent" : "bg-kamao-earth/95 backdrop-blur-sm",
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            href={lang === "fr" ? "/fr/" : "/"}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kamao-copper focus-visible:ring-offset-2"
            aria-label={dict.company.brandName}
          >
            <Logo variant="light" width={150} />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const href = link.href[lang];
              const isActive = pathname === href;
              return (
                <Link
                  key={link.key}
                  href={href}
                  className={cn(
                    "text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kamao-copper focus-visible:ring-offset-2",
                    isActive
                      ? "text-kamao-copper"
                      : "text-white/90 hover:text-kamao-copper",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {dict.nav[link.labelKey]}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <LanguageSwitcher lang={lang} />
            <Button
              variant="primary"
              size="sm"
              href={lang === "fr" ? "/fr/contact/" : "/contact/"}
            >
              {dict.actions.contactUs}
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher lang={lang} />
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}

function LanguageSwitcher({ lang }: { lang: Language }) {
  const pathname = usePathname() || "/";

  const switchPath = (target: "en" | "fr") => {
    if (target === lang) return pathname;
    if (target === "en") {
      return pathname.replace(/^\/fr/, "") || "/";
    }
    const map: Record<string, string> = {
      "/": "/fr/",
      "/about/": "/fr/a-propos/",
      "/minerals/": "/fr/mineraux/",
      "/operations/": "/fr/operations/",
      "/projects/": "/fr/projets/",
      "/responsibility/": "/fr/responsabilite/",
      "/insights/": "/fr/actualites/",
      "/careers/": "/fr/carrieres/",
      "/contact/": "/fr/contact/",
      "/privacy/": "/fr/confidentialite/",
      "/terms/": "/fr/conditions/",
    };
    if (pathname.startsWith("/minerals/")) {
      return pathname.replace("/minerals/", "/fr/mineraux/");
    }
    if (pathname.startsWith("/insights/")) {
      return pathname.replace("/insights/", "/fr/actualites/");
    }
    if (pathname.startsWith("/projects/")) {
      return pathname.replace("/projects/", "/fr/projets/");
    }
    return map[pathname] || "/fr/";
  };

  const base =
    "relative z-10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kamao-copper focus-visible:ring-offset-2 rounded-full";

  return (
    <div
      className="relative inline-flex items-center rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur-sm"
      role="group"
      aria-label="Language selector"
    >
      <span
        className={cn(
          "absolute left-1 top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full bg-kamao-copper transition-all duration-200",
          lang === "fr" ? "translate-x-full" : "translate-x-0",
        )}
        aria-hidden="true"
      />
      <Link
        href={switchPath("en")}
        className={cn(base, lang === "en" ? "text-white" : "text-white/70 hover:text-white")}
        aria-label="Switch to English"
        aria-current={lang === "en" ? "true" : undefined}
      >
        EN
      </Link>
      <Link
        href={switchPath("fr")}
        className={cn(base, lang === "fr" ? "text-white" : "text-white/70 hover:text-white")}
        aria-label="Passer au français"
        aria-current={lang === "fr" ? "true" : undefined}
      >
        FR
      </Link>
    </div>
  );
}
