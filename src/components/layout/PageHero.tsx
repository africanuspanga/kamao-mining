import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/layout/Breadcrumbs";
import { cn } from "@/lib/utils";

export function PageHero({
  heading,
  intro,
  className,
  centered = false,
  breadcrumbs,
}: {
  heading: string;
  intro?: string | readonly string[];
  className?: string;
  centered?: boolean;
  breadcrumbs?: BreadcrumbItem[];
}) {
  const introArray = Array.isArray(intro) ? intro : intro ? [intro] : [];

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-kamao-earth pb-16 pt-32 md:pb-28 md:pt-48",
        className,
      )}
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--kamao-copper)_0%,_transparent_50%)]" />
      </div>
      <Container>
        <div
          className={cn(
            "relative max-w-3xl",
            centered && "mx-auto text-center",
          )}
        >
          {breadcrumbs && (
            <Breadcrumbs items={breadcrumbs} className="mb-6 text-kamao-mist/70" />
          )}
          <h1 className="font-heading text-3xl font-bold text-white md:text-page">
            {heading}
          </h1>
          {introArray.length > 0 && (
            <div className="mt-6 space-y-4">
              {introArray.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-kamao-mist/80 md:text-xl"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
