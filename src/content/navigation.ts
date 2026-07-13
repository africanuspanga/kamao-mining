export const navLinks = [
  { key: "home", labelKey: "home", href: { en: "/", fr: "/fr/" } },
  { key: "about", labelKey: "about", href: { en: "/about/", fr: "/fr/a-propos/" } },
  { key: "minerals", labelKey: "minerals", href: { en: "/minerals/", fr: "/fr/mineraux/" } },
  { key: "operations", labelKey: "operations", href: { en: "/operations/", fr: "/fr/operations/" } },
  // Projects hidden from main nav until verified projects exist.
  // { key: "projects", labelKey: "projects", href: { en: "/projects/", fr: "/fr/projets/" } },
  { key: "responsibility", labelKey: "responsibility", href: { en: "/responsibility/", fr: "/fr/responsabilite/" } },
  { key: "insights", labelKey: "insights", href: { en: "/insights/", fr: "/fr/actualites/" } },
  { key: "careers", labelKey: "careers", href: { en: "/careers/", fr: "/fr/carrieres/" } },
  { key: "contact", labelKey: "contact", href: { en: "/contact/", fr: "/fr/contact/" } },
] as const;

export type NavLinkKey = (typeof navLinks)[number]["key"];
