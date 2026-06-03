import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { localizeHref } from "@/lib/i18n-server";
import type { HomeMessages } from "@/messages/home";

type CurrentTrainingSectionProps = {
  content: HomeMessages["currentTraining"];
};

export async function CurrentTrainingSection({
  content,
}: CurrentTrainingSectionProps) {
  const seeMoreHref = await localizeHref("/courses/cnc-operation-basics");

  return (
    <section className="bg-black py-16 sm:py-24 lg:py-32 xl:py-40">
      <Container className="flex flex-col gap-8 sm:gap-10 lg:gap-14">
        <div className="flex flex-col gap-3 sm:gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-brand sm:text-[11px]">
            {content.eyebrow}
          </p>
          <h2 className="font-display uppercase tracking-tight leading-[0.9] text-4xl text-foreground min-[400px]:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="block">{content.titleLine1}</span>
            <span className="block">{content.titleLine2}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch">
          <div className="relative aspect-[784/543] w-full bg-surface lg:aspect-auto lg:min-h-full lg:h-full">
            <Image
              src="/images/Rroni.svg"
              alt={content.imageAlt}
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <div className="flex min-h-full flex-col justify-between gap-8 bg-black px-5 py-8 sm:gap-10 sm:px-8 sm:py-10 lg:h-full lg:gap-12 lg:px-10 lg:py-14 xl:px-14">
            <div className="flex flex-col gap-6 sm:gap-8">
              <h3 className="font-display text-2xl uppercase tracking-tight text-foreground sm:text-3xl lg:text-4xl xl:text-5xl">
                {content.level}
              </h3>

              <p className="max-w-none text-base leading-relaxed text-muted sm:text-[17px] lg:text-lg lg:leading-[1.7]">
                {content.description}
              </p>

              <hr className="border-0 border-t border-border-strong/40" />

              <dl className="grid grid-cols-1 gap-6 min-[420px]:grid-cols-3 min-[420px]:gap-4 sm:gap-6 lg:gap-8">
                {content.stats.map((stat) => (
                  <div
                    key={stat.key}
                    className="flex flex-row items-baseline justify-between gap-4 min-[420px]:flex-col min-[420px]:items-start min-[420px]:justify-start"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground sm:text-xs">
                      {stat.label}
                    </dt>
                    <dd className="font-display text-xl uppercase tracking-tight text-brand sm:text-2xl lg:text-3xl">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <Link
              href={seeMoreHref}
              className={
                "inline-flex w-full min-[400px]:w-fit items-center justify-center rounded-none bg-brand px-8 py-3.5 " +
                "font-sans text-xs font-medium uppercase tracking-[0.12em] text-foreground sm:px-10 sm:py-4 sm:text-sm " +
                "transition-colors duration-200 hover:bg-brand-600 " +
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              }
            >
              {content.cta}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
