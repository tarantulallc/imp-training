import { Container } from "@/components/ui/Container";
import type { HtecMessages } from "@/messages/htec";
import { HtecPartnerCard } from "./HtecPartnerCard";

type HtecIntroSectionProps = {
  content: HtecMessages["intro"];
};

export function HtecIntroSection({ content }: HtecIntroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-24 lg:py-32 xl:py-40">
      <span
        aria-hidden
        className="pointer-events-none absolute -left-[0.05em] top-1/2 hidden -translate-y-1/2 select-none font-display text-[clamp(8rem,22vw,18rem)] uppercase leading-none tracking-tight text-foreground/[0.04] lg:block"
      >
        {content.watermark}
      </span>

      <Container className="relative">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16 xl:gap-20">
          <div className="flex min-w-0 flex-1 flex-col gap-6 sm:gap-8 lg:max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand sm:text-xs">
              {content.eyebrow}
            </p>

            <h2 className="font-display text-5xl uppercase tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {content.title}
            </h2>

            <div className="flex flex-col gap-5 sm:gap-6">
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

          <aside className="w-full shrink-0 lg:max-w-md xl:max-w-lg">
            <HtecPartnerCard content={content.card} />
          </aside>
        </div>
      </Container>
    </section>
  );
}
