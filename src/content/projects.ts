export type MiningProject = {
  slug: string;
  name: { en: string; fr: string };
  province: { en: string; fr: string };
  country: { en: string; fr: string };
  minerals: { en: string[]; fr: string[] };
  stage:
    | "exploration"
    | "development"
    | "construction"
    | "production"
    | "care-and-maintenance";
  overview: { en: string[]; fr: string[] };
  ownership?: { en: string; fr: string };
  licenceReference?: { en: string; fr: string };
  concessionArea?: { en: string; fr: string };
  productionCapacity?: { en: string; fr: string };
  workforce?: { en: string; fr: string };
  image?: string;
  gallery?: string[];
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  verified: boolean;
  published: boolean;
};

// No verified projects have been supplied by the client.
// Add projects here only when verified === true && published === true.
export const projects: MiningProject[] = [];

export function getPublishedProjects(): MiningProject[] {
  return projects.filter((p) => p.verified === true && p.published === true);
}

export function getProjectBySlug(slug: string): MiningProject | undefined {
  return getPublishedProjects().find((p) => p.slug === slug);
}
