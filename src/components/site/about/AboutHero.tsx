import { Container } from "@/components/ui/Container";
import type { AboutMessages } from "@/messages/about";

type AboutHeroProps = {
  content: AboutMessages["hero"];
};

export function AboutHero({ content }: AboutHeroProps) {
  return (
    <section className="bg-black py-16 sm:py-24 lg:py-32 xl:py-40">
      <Container>
        <div className="flex max-w-4xl flex-col gap-8 sm:gap-10 lg:gap-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand sm:text-xs">
            {content.eyebrow}
          </p>

          <h1 className="font-display uppercase leading-[0.88] tracking-tight text-4xl min-[400px]:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="block text-foreground">{content.titleLine1}</span>
            <span className="block text-brand">{content.titleLine2}</span>
            <span className="block text-foreground">{content.titleLine3}</span>
          </h1>

          <div className="flex max-w-2xl flex-col gap-5 sm:gap-6 lg:max-w-xl">
            {content.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base leading-relaxed text-muted sm:text-[17px] lg:text-lg lg:leading-[1.75]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
