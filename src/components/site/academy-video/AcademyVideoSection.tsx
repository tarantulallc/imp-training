import Link from "next/link";
import { YouTubeEmbed } from "@/components/site/YouTubeEmbed";
import { Container } from "@/components/ui/Container";
import { INAUGURATION_YOUTUBE_ID } from "@/lib/inauguration-video";
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
        <YouTubeEmbed
          videoId={INAUGURATION_YOUTUBE_ID}
          title={content.placeholderAriaLabel}
          label={content.videoLabel}
          className="min-h-[200px] sm:min-h-[280px] lg:min-h-[360px]"
        />

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
