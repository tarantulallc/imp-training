import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { localizeHref } from "@/lib/i18n-server";
import type { HtecMessages } from "@/messages/htec";

type HtecStandardsSectionProps = {
  content: HtecMessages["standards"];
};

export async function HtecStandardsSection({
  content,
}: HtecStandardsSectionProps) {
  const learnMoreHref = await localizeHref("/about");

  return (
    <section className="relative overflow-hidden bg-[#0E1214] py-16 sm:py-24 lg:py-32 xl:py-40">
      <span
        aria-hidden
        className="pointer-events-none absolute -left-[0.05em] top-1/2 hidden -translate-y-1/2 select-none font-display text-[clamp(8rem,22vw,18rem)] uppercase leading-none tracking-tight text-foreground/[0.04] lg:block"
      >
        {content.watermark}
      </span>

      <Container className="relative">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16 xl:gap-24">
          <div className="flex shrink-0 flex-col gap-5 lg:max-w-md xl:max-w-lg">
            <div className="flex items-center gap-4">
              <span
                aria-hidden
                className="h-px w-10 shrink-0 bg-brand sm:w-12"
              />
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand sm:text-xs">
                {content.eyebrow}
              </p>
            </div>

            <h2 className="font-display text-3xl uppercase leading-[0.9] tracking-tight text-foreground min-[400px]:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block">{content.titleLine1}</span>
              <span className="block text-brand">{content.titleLine2}</span>
            </h2>
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-8 sm:gap-10">
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

            <Link
              href={learnMoreHref}
              className="group inline-flex w-fit items-center gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground transition-colors hover:text-brand sm:text-xs"
            >
              <span
                aria-hidden
                className="h-px w-10 bg-brand transition-all group-hover:w-12 sm:w-12"
              />
              {content.cta}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
