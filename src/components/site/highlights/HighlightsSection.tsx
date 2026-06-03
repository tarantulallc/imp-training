import { Container } from "@/components/ui/Container";
import type { HomeMessages } from "@/messages/home";

type HighlightsSectionProps = {
  content: HomeMessages["highlights"];
};

export function HighlightsSection({ content }: HighlightsSectionProps) {
  return (
    <section className="bg-black py-16 sm:py-24 lg:py-32 xl:py-40">
      <Container>
        <div className="border-x border-t border-border-strong/40">
          <div className="grid grid-cols-1 gap-px bg-border-strong/40 sm:grid-cols-2 lg:grid-cols-3">
            {content.items.map((item) => (
              <article
                key={item.key}
                className="flex flex-col gap-3 bg-black px-5 py-8 sm:gap-4 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
              >
                <h3 className="font-display text-lg uppercase leading-[0.95] tracking-tight text-foreground min-[400px]:text-xl sm:text-2xl lg:text-[1.75rem]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted sm:text-base lg:text-lg lg:leading-[1.7]">
                  {item.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
