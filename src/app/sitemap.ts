import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";
import { minerals } from "@/content/minerals";
import { blogArticles } from "@/content/blog";
import { getPublishedProjects } from "@/content/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/about/", priority: 0.8 },
    { path: "/minerals/", priority: 0.9 },
    { path: "/operations/", priority: 0.8 },
    { path: "/responsibility/", priority: 0.8 },
    { path: "/insights/", priority: 0.7 },
    { path: "/careers/", priority: 0.7 },
    { path: "/contact/", priority: 0.8 },
    { path: "/privacy/", priority: 0.5 },
    { path: "/terms/", priority: 0.5 },
  ];

  const frenchRoutes = [
    { path: "/fr/", priority: 1 },
    { path: "/fr/a-propos/", priority: 0.8 },
    { path: "/fr/mineraux/", priority: 0.9 },
    { path: "/fr/operations/", priority: 0.8 },
    { path: "/fr/responsabilite/", priority: 0.8 },
    { path: "/fr/actualites/", priority: 0.7 },
    { path: "/fr/carrieres/", priority: 0.7 },
    { path: "/fr/contact/", priority: 0.8 },
    { path: "/fr/confidentialite/", priority: 0.5 },
    { path: "/fr/conditions/", priority: 0.5 },
  ];

  const mineralPages = minerals.map((mineral) => ({
    path: `/minerals/${mineral.slug}/`,
    priority: 0.8,
  }));

  const frenchMineralPages = minerals.map((mineral) => ({
    path: `/fr/mineraux/${mineral.slug}/`,
    priority: 0.8,
  }));

  const articlePages = blogArticles.map((article) => ({
    path: `/insights/${article.slug}/`,
    priority: 0.7,
  }));

  const frenchArticlePages = blogArticles.map((article) => ({
    path: `/fr/actualites/${article.slug}/`,
    priority: 0.7,
  }));

  const projectPages = getPublishedProjects().map((project) => ({
    path: `/projects/${project.slug}/`,
    priority: 0.8,
  }));

  const frenchProjectPages = getPublishedProjects().map((project) => ({
    path: `/fr/projets/${project.slug}/`,
    priority: 0.8,
  }));

  const allPaths = [
    ...routes,
    ...frenchRoutes,
    ...mineralPages,
    ...frenchMineralPages,
    ...articlePages,
    ...frenchArticlePages,
    ...projectPages,
    ...frenchProjectPages,
  ];

  return allPaths.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));
}
