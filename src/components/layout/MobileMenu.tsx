"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { getDictionary, getLanguageFromPath } from "@/lib/i18n";
import { navLinks } from "@/content/navigation";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const lang = getLanguageFromPath(pathname);
  const dict = getDictionary(lang);

  const toggle = () => setOpen((o) => !o);

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-white hover:bg-kamao-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kamao-copper md:hidden"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <div
        className={cn(
          "fixed inset-0 z-40 transform bg-kamao-earth transition-transform duration-300 ease-in-out md:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!open}
      >
        <div className="flex h-20 items-center justify-between px-5">
          <Logo variant="light" />
          <button
            type="button"
            onClick={toggle}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-white hover:bg-kamao-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kamao-copper"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-5 pt-6">
          {navLinks.map((link) => {
            const href = link.href[lang];
            const isActive = pathname === href;
            return (
              <Link
                key={link.key}
                href={href}
                onClick={() => setOpen(false)}
                className={cn(
                  "border-b border-kamao-graphite py-4 text-lg font-medium hover:text-kamao-copper",
                  isActive ? "text-kamao-copper" : "text-white",
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {dict.nav[link.labelKey]}
              </Link>
            );
          })}
          <div className="mt-6 flex flex-col gap-3">
            <Button
              variant="primary"
              href={lang === "fr" ? "/fr/contact/" : "/contact/"}
              className="w-full"
            >
              {dict.actions.contactUs}
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
