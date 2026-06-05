import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { localizeHref } from "@/lib/i18n-server";
import type { CncBasicsMessages } from "@/messages/cnc-basics";

type CncBasicsPageProps = {
  content: CncBasicsMessages;
};

const eyebrowClass =
  "font-mono text-[11px] uppercase tracking-[0.22em] text-brand sm:text-xs";

const ctaClass =
  "inline-flex w-full min-[400px]:w-fit items-center justify-center gap-2 rounded-none bg-brand px-8 py-3.5 " +
  "font-sans text-xs font-medium uppercase tracking-[0.12em] text-foreground sm:px-10 sm:py-4 sm:text-sm " +
  "transition-colors duration-200 hover:bg-brand-600 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-black";

export async function CncBasicsPage({ content }: CncBasicsPageProps) {
  const registerHref = await localizeHref("/register");

  return (
    <div className="bg-black">
      <section className="relative isolate min-h-[min(100svh,36rem)] w-full overflow-hidden sm:min-h-[55vh] lg:min-h-[65vh]">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat grayscale"
          style={{ backgroundImage: "url('/images/base.svg')" }}
          role="img"
          aria-label={content.hero.imageAlt}
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-black/60" />

        <Container className="relative flex min-h-[min(100svh,36rem)] flex-col justify-end py-24 sm:min-h-[55vh] sm:py-28 lg:min-h-[65vh] lg:py-32">
          <div className="flex max-w-4xl flex-col gap-6 sm:gap-8 lg:gap-10">
            <p className={eyebrowClass}>{content.hero.eyebrow}</p>

            <h1 className="font-display uppercase leading-[0.88] tracking-tight text-3xl text-foreground min-[400px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              <span className="block">{content.hero.titleLine1}</span>
              <span className="block">{content.hero.titleLine2}</span>
            </h1>

            <div className="flex flex-col gap-2 sm:gap-3">
              <p className="font-display text-3xl uppercase tracking-tight text-brand sm:text-4xl lg:text-5xl">
                {content.hero.price}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground sm:text-[11px]">
                {content.hero.paymentNote}
              </p>
            </div>

            <Link href={registerHref} className={ctaClass}>
              {content.hero.cta}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 xl:py-40">
        <Container>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16 xl:gap-24">
            <div className="shrink-0 lg:max-w-[min(100%,420px)]">
              <h2 className="font-display text-3xl uppercase tracking-tight text-foreground min-[400px]:text-4xl sm:text-5xl lg:text-6xl">
                {content.intro.title}
              </h2>
              <span
                aria-hidden
                className="mt-6 block h-px w-12 bg-brand sm:mt-8"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-6 sm:gap-8">
              {content.intro.paragraphs.map((paragraph) => (
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

      <section className="pb-16 sm:pb-24 lg:pb-32 xl:pb-40">
        <Container className="flex flex-col gap-10 sm:gap-12 lg:gap-16">
          <div className="flex flex-col gap-4 sm:gap-5">
            <p className={eyebrowClass}>{content.curriculum.eyebrow}</p>
            <h2 className="font-display text-3xl uppercase tracking-tight text-foreground min-[400px]:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
              {content.curriculum.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border-strong/40 sm:grid-cols-2">
            {content.curriculum.modules.map((module) => (
              <article
                key={module.number}
                className="flex flex-col gap-4 bg-black px-5 py-8 sm:gap-5 sm:px-8 sm:py-10 lg:px-10 lg:py-12"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand sm:text-xs">
                  {content.curriculum.moduleLabel} {module.number}
                  <span className="text-border-strong" aria-hidden>
                    {" "}
                    //
                  </span>
                </p>
                <h3 className="font-display text-xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-2xl lg:text-[1.75rem]">
                  {module.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted sm:text-base lg:leading-[1.7]">
                  {module.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border-strong/40 py-16 sm:py-24 lg:py-32 xl:py-40">
        <Container className="flex flex-col items-center gap-8 text-center sm:gap-10">
          <h2 className="font-display text-4xl uppercase tracking-tight text-foreground min-[400px]:text-5xl sm:text-6xl lg:text-7xl">
            {content.finalCta.title}
          </h2>

          <div className="flex max-w-2xl flex-col gap-2 text-base leading-relaxed text-muted sm:gap-3 sm:text-[17px] lg:text-lg">
            {content.finalCta.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <Link href={registerHref} className={ctaClass}>
            {content.finalCta.cta}
            <span aria-hidden>→</span>
          </Link>
        </Container>
      </section>
    </div>
  );
}
