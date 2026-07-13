"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useDictionary } from "@/lib/i18n";
import { getPublishedProjects } from "@/content/projects";

export function ProjectsPreview() {
  const dict = useDictionary();
  const projects = getPublishedProjects();

  // Only render when verified projects exist.
  if (projects.length === 0) return null;

  return (
    <section className="bg-kamao-sand py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow={dict.home.projects.eyebrow}
          heading={dict.home.projects.heading}
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.slug} className="rounded-sm bg-white p-6 shadow-sm">
              <h3 className="font-heading text-xl font-bold text-kamao-earth">
                {project.name.en}
              </h3>
              <p className="mt-2 text-kamao-graphite/80">{project.overview.en[0]}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
