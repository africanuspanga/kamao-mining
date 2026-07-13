import type { Metadata } from "next";

export const siteUrl = "https://kamaomining.com";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KAMAO Mining Company Limited | Resources for a Connected World",
    template: "%s | KAMAO Mining",
  },
  description:
    "Kamao Mining Company Limited is a DRC-based mining company focused on developing and supplying minerals that support modern energy, infrastructure, technology and global industry.",
  keywords: [
    "mining company DRC",
    "cobalt mining DRC",
    "copper mining DRC",
    "coltan supplier DRC",
    "tantalum mining Congo",
    "gold mining DRC",
    "diamond mining Congo",
    "tin tungsten DRC",
    "lithium mining DRC",
    "responsible mineral sourcing",
    "DRC mineral partnerships",
  ],
  authors: [{ name: "KAMAO Mining Company Limited" }],
  creator: "KAMAO Mining Company Limited",
  publisher: "KAMAO Mining Company Limited",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "KAMAO Mining Company Limited",
    title: "KAMAO Mining Company Limited | Resources for a Connected World",
    description:
      "Kamao Mining Company Limited is a DRC-based mining company focused on developing and supplying minerals that support modern energy, infrastructure, technology and global industry.",
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
    title: "KAMAO Mining Company Limited | Resources for a Connected World",
    description:
      "Kamao Mining Company Limited is a DRC-based mining company focused on developing and supplying minerals that support modern energy, infrastructure, technology and global industry.",
    images: ["/open-pit-panorama.jpg"],
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
      "fr-FR": `${siteUrl}/fr/`,
    },
  },
};

export function createMetadata({
  title,
  description,
  path,
  image = "/open-pit-panorama.jpg",
  imageAlt = "KAMAO Mining",
  lang = "en",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  lang?: "en" | "fr";
}): Metadata {
  const url = `${siteUrl}${path}`;
  const locale = lang === "fr" ? "fr_FR" : "en_US";

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
      languages: {
        "en-US": lang === "en" ? url : `${siteUrl}${path.replace(/^\/fr/, "")}`,
        "fr-FR": lang === "fr" ? url : `${siteUrl}/fr${path}`,
      },
    },
    openGraph: {
      type: "website",
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
    ...createMetadata({ title, description, path, image, imageAlt, lang }),
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
