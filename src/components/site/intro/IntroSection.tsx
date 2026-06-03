import { Container } from "@/components/ui/Container";
import type { HomeMessages } from "@/messages/home";
import { INTRO_PARTNER_NAME } from "./intro-assets";

type IntroSectionProps = {
  content: HomeMessages["intro"];
};

export function IntroSection({ content }: IntroSectionProps) {
  return (
    <section className="bg-black py-16 sm:py-24 lg:py-32 xl:py-40">
      <Container>
        <div className="flex flex-col gap-10 sm:gap-12 lg:flex-row lg:items-start lg:gap-16 xl:gap-24">
          <div className="flex w-full shrink-0 flex-col lg:max-w-[min(100%,520px)]">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-brand sm:text-[11px]">
              {content.eyebrow}
            </p>

            <h2 className="mt-4 font-display uppercase tracking-tight leading-[0.9] text-4xl min-[400px]:text-5xl sm:mt-6 sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="block text-foreground">{content.titleLine1}</span>
              <span className="block text-foreground">{content.titleLine2}</span>
              <span className="block text-brand">{content.titleLine3}</span>
            </h2>

            <div className="mt-8 flex flex-col border border-brand sm:mt-12 lg:mt-16 min-[480px]:flex-row">
              <div className="flex shrink-0 items-center px-4 py-4 sm:px-6 sm:py-5">
                <span className="font-display text-lg uppercase tracking-tight text-foreground sm:text-xl lg:text-2xl">
                  {INTRO_PARTNER_NAME}
                </span>
              </div>

              <div
                aria-hidden
                className="hidden min-[480px]:block w-px shrink-0 self-stretch bg-border-strong"
              />
              <div
                aria-hidden
                className="h-px w-full bg-border-strong min-[480px]:hidden"
              />

              <p className="flex items-center px-4 py-4 font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-foreground min-[480px]:px-6 min-[480px]:py-5 sm:text-[10px]">
                {content.partnerTagline}
              </p>
            </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-6 sm:gap-8 lg:gap-10 lg:pt-1">
            <span aria-hidden className="block h-px w-10 bg-brand" />

            <p className="max-w-none text-base leading-relaxed text-muted sm:text-[17px] lg:text-lg lg:leading-[1.75]">
              {content.paragraphs[0]}
            </p>

            <hr className="border-0 border-t border-border-strong/40" />

            <p className="max-w-none text-base leading-relaxed text-muted sm:text-[17px] lg:text-lg lg:leading-[1.75]">
              {content.paragraphs[1]}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
