import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { localizeHref } from "@/lib/i18n-server";
import type { HomeMessages } from "@/messages/home";

type TrainingHeroProps = {
  content: HomeMessages["hero"];
};

export async function TrainingHero({ content }: TrainingHeroProps) {
  const registerHref = await localizeHref("/register");

  return (
    <section className="relative isolate w-full overflow-hidden min-h-[min(100svh,48rem)] sm:min-h-[70vh] lg:min-h-[85svh]">
      <Image
        src="/images/heroT.svg"
        alt={content.imageAlt}
        width={1920}
        height={1080}
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />

      <div aria-hidden className="absolute inset-0 -z-10 bg-black/20" />

      <Container className="relative flex min-h-[min(100svh,48rem)] items-center py-28 sm:min-h-[70vh] sm:py-32 lg:min-h-[85svh] lg:py-40">
        <div className="flex w-full max-w-4xl flex-col gap-8 sm:gap-10 lg:gap-12">
          <h1 className="font-display uppercase tracking-tight leading-[0.9] text-[2.5rem] min-[400px]:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="block text-foreground">
              {content.line1.before}
              <span className="text-brand">{content.line1.highlight}</span>
              {content.line1.after}
            </span>
            <span className="mt-1 block text-foreground sm:mt-2">
              {content.line2.before}
              <span className="text-brand">{content.line2.highlight}</span>
            </span>
          </h1>

          <Link
            href={registerHref}
            className={
              "inline-flex w-full min-[400px]:w-fit items-center justify-center rounded-none bg-brand px-8 py-3.5 " +
              "font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-foreground sm:px-10 sm:py-4 sm:text-xs " +
              "transition-colors duration-200 hover:bg-brand-600 " +
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            }
          >
            {content.cta}
          </Link>
        </div>
      </Container>
    </section>
  );
}
