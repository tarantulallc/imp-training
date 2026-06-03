import { Container } from "@/components/ui/Container";
import type { AboutMessages } from "@/messages/about";
import type { AboutPillar } from "@/messages/about/types";

type AboutMissionGridProps = {
  content: AboutMessages["mission"];
};

function flattenMissionRows(columns: AboutMessages["mission"]["columns"]): AboutPillar[] {
  const topRow = columns.map((column) => column[0]);
  const bottomRow = columns.map((column) => column[1]);
  return [...topRow, ...bottomRow];
}

export function AboutMissionGrid({ content }: AboutMissionGridProps) {
  const cells = flattenMissionRows(content.columns);

  return (
    <section className="bg-black pb-16 sm:pb-24 lg:pb-32 xl:pb-40">
      <Container className="flex flex-col gap-10 sm:gap-12 lg:gap-16">
        <div className="flex max-w-4xl flex-col gap-4 sm:gap-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand sm:text-xs">
            {content.eyebrow}
          </p>
          <h2 className="font-display text-3xl uppercase tracking-tight text-foreground min-[400px]:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
            {content.title}
          </h2>
        </div>

        <div className="border-x border-t border-border-strong/40">
          <div className="grid grid-cols-1 gap-px bg-border-strong/40 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            {cells.map((item) => (
              <article
                key={item.key}
                className="flex h-full min-h-0 flex-col gap-4 bg-black px-5 py-8 sm:gap-5 sm:px-6 sm:py-10 lg:px-8 lg:py-12 xl:px-10"
              >
                <h3 className="shrink-0 font-display text-lg uppercase leading-[0.95] tracking-tight text-foreground min-[400px]:text-xl sm:text-2xl lg:text-[1.75rem]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted sm:text-base lg:text-lg lg:leading-[1.7]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
