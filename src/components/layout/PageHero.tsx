import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function PageHero({
  heading,
  intro,
  className,
  centered = false,
}: {
  heading: string;
  intro?: string | readonly string[];
  className?: string;
  centered?: boolean;
}) {
  const introArray = Array.isArray(intro) ? intro : intro ? [intro] : [];

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-kamao-earth pb-20 pt-40 md:pb-28 md:pt-48",
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
          <h1 className="font-heading text-page font-bold text-white md:text-hero">
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
