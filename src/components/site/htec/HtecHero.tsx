import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { HtecMessages } from "@/messages/htec";

type HtecHeroProps = {
  content: HtecMessages["hero"];
};

export function HtecHero({ content }: HtecHeroProps) {
  return (
    <section className="relative isolate w-full overflow-hidden min-h-[min(100svh,40rem)] sm:min-h-[60vh] lg:min-h-[70vh]">
      <Image
        src="/images/heroth.svg"
        alt={content.imageAlt}
        width={1920}
        height={1080}
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />

      <div aria-hidden className="absolute inset-0 -z-10 bg-black/55" />

      <Container className="relative flex min-h-[min(100svh,40rem)] items-end py-24 sm:min-h-[60vh] sm:items-center sm:py-28 lg:min-h-[70vh] lg:py-32">
        <div className="flex max-w-3xl flex-col gap-6 sm:gap-8 lg:gap-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand sm:text-xs">
            {content.eyebrow}
          </p>

          <h1 className="font-display uppercase leading-[0.88] tracking-tight text-3xl text-foreground min-[400px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <span className="block">{content.titleLine1}</span>
            <span className="block text-brand">{content.titleLine2}</span>
            <span className="block">{content.titleLine3}</span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-foreground sm:text-[17px] lg:text-lg lg:leading-[1.75]">
            {content.description}
          </p>
        </div>
      </Container>
    </section>
  );
}
