import { company } from "@/content/company";
import { siteUrl } from "@/lib/metadata";

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: company.legalName,
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}${company.logo.src}`,
    width: company.logo.width,
    height: company.logo.height,
  },
  email: company.email,
  telephone: [company.drcPhone, company.regionalPhone, company.whatsappPhone].filter(
    (phone): phone is string => typeof phone === "string" && phone.length > 0,
  ),
  // Address, coordinates, registration numbers and social profiles
  // intentionally omitted until verified by the client.
  sameAs: Object.values(company.social).filter((url): url is string => typeof url === "string"),
};

export const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "MiningCompany",
  "@id": `${siteUrl}/#business`,
  name: company.legalName,
  url: siteUrl,
  logo: `${siteUrl}${company.logo.src}`,
  email: company.email,
  telephone: [company.drcPhone, company.regionalPhone, company.whatsappPhone].filter(
    (phone): phone is string => typeof phone === "string" && phone.length > 0,
  ),
  areaServed: {
    "@type": "Country",
    name: company.country,
  },
  sameAs: Object.values(company.social).filter((url): url is string => typeof url === "string"),
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: company.legalName,
  url: siteUrl,
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/insights/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export function createBreadcrumbStructuredData(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function createWebPageStructuredData({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}${path}`,
    url: `${siteUrl}${path}`,
    name: title,
    description,
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: {
      "@id": `${siteUrl}/#organization`,
    },
  };
}

export function createArticleStructuredData({
  title,
  description,
  path,
  publishedAt,
  updatedAt,
  image,
  category,
}: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt: string;
  image: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: `${siteUrl}${image}`,
    datePublished: publishedAt,
    dateModified: updatedAt,
    author: {
      "@type": "Organization",
      name: "Kamao Insights Team",
    },
    publisher: {
      "@type": "Organization",
      name: company.legalName,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}${company.logo.src}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}${path}`,
    },
    articleSection: category,
  };
}
