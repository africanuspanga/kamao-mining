import type { Metadata } from "next";

export const siteUrl = "https://kamaomining.com";

export const defaultTitle =
  "KAMAO Mining Company Limited | Resources for a Connected World";
export const defaultDescription =
  "Kamao Mining Company Limited is a DRC-based mining company focused on developing and supplying minerals that support modern energy, infrastructure, technology and global industry.";

const routeAlternates: Record<string, { en: string; fr: string }> = {
  "/": { en: "/", fr: "/fr/" },
  "/about/": { en: "/about/", fr: "/fr/a-propos/" },
  "/minerals/": { en: "/minerals/", fr: "/fr/mineraux/" },
  "/operations/": { en: "/operations/", fr: "/fr/operations/" },
  "/projects/": { en: "/projects/", fr: "/fr/projets/" },
  "/responsibility/": { en: "/responsibility/", fr: "/fr/responsabilite/" },
  "/insights/": { en: "/insights/", fr: "/fr/actualites/" },
  "/careers/": { en: "/careers/", fr: "/fr/carrieres/" },
  "/contact/": { en: "/contact/", fr: "/fr/contact/" },
  "/privacy/": { en: "/privacy/", fr: "/fr/confidentialite/" },
  "/terms/": { en: "/terms/", fr: "/fr/conditions/" },
};

export function getHreflangAlternates(path: string, lang: "en" | "fr") {
  const normalized = path.replace(/\/$/, "");

  // Detail pages: /minerals/:slug, /insights/:slug, /projects/:slug
  if (normalized.startsWith("/minerals/")) {
    const slug = normalized.replace("/minerals/", "");
    return {
      "en-US": `${siteUrl}/minerals/${slug}/`,
      "fr-FR": `${siteUrl}/fr/mineraux/${slug}/`,
    };
  }
  if (normalized.startsWith("/fr/mineraux/")) {
    const slug = normalized.replace("/fr/mineraux/", "");
    return {
      "en-US": `${siteUrl}/minerals/${slug}/`,
      "fr-FR": `${siteUrl}/fr/mineraux/${slug}/`,
    };
  }
  if (normalized.startsWith("/insights/")) {
    const slug = normalized.replace("/insights/", "");
    return {
      "en-US": `${siteUrl}/insights/${slug}/`,
      "fr-FR": `${siteUrl}/fr/actualites/${slug}/`,
    };
  }
  if (normalized.startsWith("/fr/actualites/")) {
    const slug = normalized.replace("/fr/actualites/", "");
    return {
      "en-US": `${siteUrl}/insights/${slug}/`,
      "fr-FR": `${siteUrl}/fr/actualites/${slug}/`,
    };
  }
  if (normalized.startsWith("/projects/")) {
    const slug = normalized.replace("/projects/", "");
    return {
      "en-US": `${siteUrl}/projects/${slug}/`,
      "fr-FR": `${siteUrl}/fr/projets/${slug}/`,
    };
  }
  if (normalized.startsWith("/fr/projets/")) {
    const slug = normalized.replace("/fr/projets/", "");
    return {
      "en-US": `${siteUrl}/projects/${slug}/`,
      "fr-FR": `${siteUrl}/fr/projets/${slug}/`,
    };
  }

  const mapped =
    routeAlternates[path] ||
    routeAlternates[`${normalized}/`] ||
    Object.values(routeAlternates).find(
      (alt) => alt.en === path || alt.en === `${normalized}/` || alt.fr === path || alt.fr === `${normalized}/`,
    );
  if (mapped) {
    return {
      "en-US": `${siteUrl}${mapped.en}`,
      "fr-FR": `${siteUrl}${mapped.fr}`,
    };
  }

  // Fallback: canonical only
  return undefined;
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | KAMAO Mining",
  },
  description: defaultDescription,
  keywords: [
    "KAMAO Mining",
    "KAMAO Mining Company Limited",
    "mining company DRC",
    "DRC mining",
    "cobalt mining DRC",
    "copper mining DRC",
    "coltan supplier DRC",
    "tantalum mining Congo",
    "gold mining DRC",
    "diamond mining Congo",
    "tin mining DRC",
    "tungsten mining DRC",
    "lithium mining DRC",
    "responsible mineral sourcing",
    "critical minerals",
    "DRC mineral partnerships",
    "kamaomining.com",
  ],
  authors: [{ name: "KAMAO Mining Company Limited", url: siteUrl }],
  creator: "KAMAO Mining Company Limited",
  publisher: "KAMAO Mining Company Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "KAMAO Mining Company Limited",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/open-pit-panorama.jpg",
        width: 1200,
        height: 630,
        alt: "KAMAO Mining - Industrial open-pit mining landscape",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/open-pit-panorama.jpg"],
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
      "fr-FR": `${siteUrl}/fr/`,
    },
  },
  icons: {
    icon: "/Kamo-Favicon.png",
    apple: "/Kamo-Favicon.png",
  },
  other: {
    "theme-color": "#0b1822",
    "msapplication-TileColor": "#0b1822",
    "msapplication-TileImage": "/Kamo-Favicon.png",
    "geo.region": "CD",
    "geo.placename": "Democratic Republic of the Congo",
  },
};

export function createMetadata({
  title,
  description,
  path,
  image = "/open-pit-panorama.jpg",
  imageAlt = "KAMAO Mining",
  lang = "en",
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  lang?: "en" | "fr";
  type?: "website" | "article";
}): Metadata {
  const url = `${siteUrl}${path}`;
  const locale = lang === "fr" ? "fr_FR" : "en_US";
  const languages = getHreflangAlternates(path, lang);

  return {
    title: {
      absolute: title,
    },
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type,
      locale,
      url,
      siteName: "KAMAO Mining Company Limited",
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function createArticleMetadata({
  title,
  description,
  path,
  publishedAt,
  updatedAt,
  image,
  imageAlt,
  lang = "en",
}: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt: string;
  image: string;
  imageAlt: string;
  lang?: "en" | "fr";
}): Metadata {
  return {
    ...createMetadata({ title, description, path, image, imageAlt, lang, type: "article" }),
    authors: [{ name: "Kamao Insights Team" }],
    openGraph: {
      type: "article",
      locale: lang === "fr" ? "fr_FR" : "en_US",
      url: `${siteUrl}${path}`,
      siteName: "KAMAO Mining Company Limited",
      title,
      description,
      publishedTime: publishedAt,
      modifiedTime: updatedAt,
      authors: ["Kamao Insights Team"],
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
  };
}
