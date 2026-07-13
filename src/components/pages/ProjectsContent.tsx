"use client";

import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { useDictionary, useLanguage } from "@/lib/i18n";
import { getPublishedProjects } from "@/content/projects";

export function ProjectsContent() {
  const lang = useLanguage();
  const dict = useDictionary();
  const projects = getPublishedProjects();

  if (projects.length === 0) {
    return (
      <>
        <PageHero
          heading={dict.projects.hero.heading}
          intro={dict.projects.hero.intro}
        />
        <section className="bg-kamao-mist py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-2xl font-bold text-kamao-earth">
                {dict.projects.empty.heading}
              </h2>
              <p className="mt-4 text-kamao-graphite/70">
                {dict.projects.empty.description}
              </p>
            </div>
          </Container>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        heading={dict.projects.hero.heading}
        intro={dict.projects.hero.intro}
      />
      <section className="bg-kamao-mist py-20 md:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.slug} className="rounded-sm bg-white p-6 shadow-sm">
                <h2 className="font-heading text-xl font-bold text-kamao-earth">
                  {project.name[lang]}
                </h2>
                <p className="mt-2 text-kamao-graphite/80">{project.overview[lang][0]}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
