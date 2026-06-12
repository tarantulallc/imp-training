import { Container } from "@/components/ui/Container";
import type { HomeMessages } from "@/messages/home";
import { INTRO_PARTNER_NAME } from "./intro-assets";
import Image from "next/image";
type IntroSectionProps = {
  content: HomeMessages["intro"];
};

export function IntroSection({ content }: IntroSectionProps) {
  return (
    <section className="bg-black py-16 sm:py-24 lg:py-32 xl:py-40">
      <Container>
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[520px_minmax(0,600px)] lg:gap-16 xl:gap-24">
          <div className="flex min-w-0 flex-col">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-brand sm:text-[11px]">
              {content.eyebrow}
            </p>

            <h2 className="mt-4 w-full min-w-0 font-display text-[clamp(2.5rem,12vw+1rem,3.75rem)] leading-[0.9] uppercase tracking-tight sm:mt-6 sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="block text-foreground">
                {content.titleLine1}
              </span>
              <span className="block text-foreground">
                {content.titleLine2}
              </span>
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
                className="hidden w-px shrink-0 self-stretch bg-border-strong min-[480px]:block"
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

          <div className="flex flex-col justify-start gap-6 sm:gap-8 lg:gap-10 mt-10">
            <span aria-hidden className="block h-px w-10 bg-brand" />

            <p className="max-w-[55ch] text-base leading-relaxed text-muted sm:text-[17px] lg:text-lg lg:leading-[1.75]">
              {content.paragraphs[0]}
            </p>

            <hr className="border-0 border-t border-border-strong/40" />

            <p className="max-w-[55ch] text-base leading-relaxed text-muted sm:text-[17px] lg:text-lg lg:leading-[1.75]">
              {content.paragraphs[1]}
            </p>
            <div className="-mt-20 -ml-5">
              <Image
                src="/images/haas-automation-inc-logo.svg"
                alt="Haas Automation"
                width={160}
                height={60}
                className="w-full max-w-[260px] h-auto object-contain"
              />            
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
