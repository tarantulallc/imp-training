import { Container } from "@/components/ui/Container";
import type { RegisterMessages } from "@/messages/register";

type RegisterPageHeaderProps = {
  content: RegisterMessages["header"];
};

export function RegisterPageHeader({ content }: RegisterPageHeaderProps) {
  return (
    <Container className="pb-10 pt-12 sm:pb-12 sm:pt-16 lg:pb-14 lg:pt-20">
      <div className="flex max-w-3xl flex-col gap-5 sm:gap-6 lg:gap-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand sm:text-xs">
          {content.eyebrow}
        </p>

        <h1 className="font-display uppercase leading-[0.88] tracking-tight text-4xl min-[400px]:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
          <span className="block text-foreground">{content.titleLine1}</span>
          <span className="block text-brand">{content.titleLine2}</span>
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-[17px] lg:text-lg lg:leading-[1.75]">
          {content.intro}
        </p>
      </div>
    </Container>
  );
}
