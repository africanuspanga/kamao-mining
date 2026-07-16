"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { createBreadcrumbStructuredData } from "@/lib/structured-data";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({
  items,
  className,
}: {
  items: BreadcrumbItem[];
  className?: string;
}) {
  const lang = useLanguage();
  const homeHref = lang === "fr" ? "/fr/" : "/";

  const structuredDataItems = items.map((item, index) => ({
    name: item.label,
    path: item.href ?? (index === 0 ? homeHref : "/"),
  }));

  const structuredData = createBreadcrumbStructuredData(structuredDataItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav aria-label="Breadcrumb" className={cn("w-full overflow-hidden", className)}>
        <ol className="flex min-w-0 flex-wrap items-center gap-2 text-sm text-kamao-graphite/70">
          <li className="min-w-0">
            <Link
              href={homeHref}
              className="truncate transition-colors hover:text-kamao-copper focus-ring rounded"
            >
              {lang === "fr" ? "Accueil" : "Home"}
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex min-w-0 items-center gap-2">
                <span aria-hidden="true" className="text-kamao-graphite/40">
                  /
                </span>
                {isLast || !item.href ? (
                  <span
                    className="truncate"
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="truncate transition-colors hover:text-kamao-copper focus-ring rounded"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
