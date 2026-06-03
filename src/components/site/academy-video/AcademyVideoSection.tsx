import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { localizeHref } from "@/lib/i18n-server";
import type { HomeMessages } from "@/messages/home";

type AcademyVideoSectionProps = {
  content: HomeMessages["academy"];
};

export async function AcademyVideoSection({ content }: AcademyVideoSectionProps) {
  const seeMoreHref = await localizeHref("/inauguration");

  return (
    <section className="bg-black py-16 sm:py-24 lg:py-32 xl:py-40">
      <Container className="flex flex-col gap-8 sm:gap-12 lg:gap-16">
        <div
          className="relative aspect-video w-full min-h-[200px] bg-[#1e1e1e] sm:min-h-[280px] lg:min-h-[360px]"
          aria-label={content.placeholderAriaLabel}
        >
          <p className="absolute left-4 top-4 font-sans text-xs text-subtle sm:left-6 sm:top-6 sm:text-sm">
            {content.videoLabel}
          </p>

          <div
            className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand sm:h-14 sm:w-14 lg:h-16 lg:w-16"
            aria-hidden
          >
            <PlayIcon />
          </div>
        </div>

        <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-start lg:gap-16 xl:gap-24">
          <div className="flex shrink-0 flex-col gap-5 sm:gap-6 lg:max-w-md">
            <h2 className="font-display text-3xl uppercase tracking-tight text-foreground min-[400px]:text-4xl sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>

            <Link
              href={seeMoreHref}
              className={
                "inline-flex w-full min-[400px]:w-fit items-center justify-center rounded-none bg-brand px-8 py-3.5 " +
                "font-sans text-xs font-medium uppercase tracking-[0.12em] text-foreground " +
                "transition-colors duration-200 hover:bg-brand-600 " +
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              }
            >
              {content.cta}
            </Link>
          </div>

          <p className="min-w-0 flex-1 text-base leading-relaxed text-muted sm:text-[17px] lg:text-lg lg:leading-[1.75]">
            {content.description}
          </p>
        </div>
      </Container>
    </section>
  );
}

function PlayIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="ml-0.5 text-foreground"
      aria-hidden
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
