import { Container } from "@/components/ui/Container";
import type { InaugurationMessages } from "@/messages/inauguration";

type InaugurationArticleProps = {
  content: InaugurationMessages;
};

const metaLabelClass =
  "font-mono text-[11px] uppercase tracking-[0.2em] text-brand sm:text-xs";

export function InaugurationArticle({ content }: InaugurationArticleProps) {
  const { sections } = content;

  return (
    <article className="bg-black">
      <Container className="pt-10 pb-0 sm:pt-14 lg:pt-16">
        <nav
          aria-label="Breadcrumb"
          className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand sm:text-xs"
        >
          <span>{content.breadcrumb.primary}</span>
          <span className="mx-2 text-border-strong" aria-hidden>
            /
          </span>
          <span>{content.breadcrumb.secondary}</span>
        </nav>

        <h1 className="mt-6 font-display uppercase leading-[0.88] tracking-tight text-3xl min-[400px]:text-4xl sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          <span className="text-brand">{content.title.highlight}</span>{" "}
          <span className="text-foreground">{content.title.rest}</span>
        </h1>

        <ul className="mt-8 grid grid-cols-1 gap-4 min-[480px]:grid-cols-3 sm:mt-10 sm:gap-6 lg:mt-12">
          <MetaItem
            label={content.meta.date.label}
            value={content.meta.date.value}
          />
          <MetaItem
            label={content.meta.location.label}
            value={content.meta.location.value}
          />
          <MetaItem
            label={content.meta.category.label}
            value={content.meta.category.value}
          />
        </ul>

        <hr className="mt-10 border-0 border-t border-border-strong/40 sm:mt-12 lg:mt-14" />
      </Container>

      <Container className="py-10 sm:py-12 lg:py-16 xl:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-0">
          <aside className="flex flex-col gap-8 lg:w-[min(100%,380px)] lg:shrink-0 lg:pr-10 xl:pr-14">
            <p className="text-base leading-relaxed text-foreground sm:text-[17px] lg:text-lg lg:leading-[1.75]">
              {content.sidebar.intro}
            </p>

            <div className="border border-border-strong/60 p-5 sm:p-6">
              <p className={metaLabelClass}>
                {content.sidebar.partnership.label}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base sm:leading-[1.7]">
                {content.sidebar.partnership.body}
              </p>
            </div>
          </aside>

          <div
            aria-hidden
            className="hidden w-px shrink-0 self-stretch bg-border-strong/40 lg:block"
          />
          <hr
            aria-hidden
            className="border-0 border-t border-border-strong/40 lg:hidden"
          />

          <div className="flex min-w-0 flex-1 flex-col gap-10 sm:gap-12 lg:pl-10 xl:pl-14">
            <div className="flex flex-col gap-6 sm:gap-8">
              {sections.intro.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-base leading-relaxed text-muted sm:text-[17px] lg:text-lg lg:leading-[1.75]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <ContentBlock title={sections.economy.title}>
              {sections.economy.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-base leading-relaxed text-muted sm:text-[17px] lg:text-lg lg:leading-[1.75]"
                >
                  {paragraph}
                </p>
              ))}
            </ContentBlock>

            <ContentBlock title={sections.programs.title}>
              <p className="text-base leading-relaxed text-muted sm:text-[17px] lg:text-lg lg:leading-[1.75]">
                {sections.programs.intro}
              </p>
              <ul className="mt-2 flex flex-col">
                {sections.programs.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-t border-border-strong/40 py-4 first:border-t-0 sm:gap-4 sm:py-5"
                  >
                    <span
                      className="shrink-0 font-mono text-sm text-brand sm:text-base"
                      aria-hidden
                    >
                      -&gt;
                    </span>
                    <span className="font-display text-base uppercase leading-snug tracking-tight text-foreground sm:text-lg lg:text-xl">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </ContentBlock>

            <ContentBlock title={sections.vision.title}>
              <p className="text-base leading-relaxed text-muted sm:text-[17px] lg:text-lg lg:leading-[1.75]">
                {sections.vision.paragraph}
              </p>
            </ContentBlock>
          </div>
        </div>
      </Container>
    </article>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <li className={metaLabelClass}>
      {label}
      <span className="mx-1.5 text-border-strong" aria-hidden>
        /
      </span>
      {value}
    </li>
  );
}

function ContentBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-5 sm:gap-6">
      <h2 className="font-display text-2xl uppercase tracking-tight text-foreground sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      <div className="flex flex-col gap-5 sm:gap-6">{children}</div>
    </section>
  );
}
