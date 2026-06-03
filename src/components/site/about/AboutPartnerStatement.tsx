import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { AboutMessages } from "@/messages/about";

type AboutPartnerStatementProps = {
  content: AboutMessages["partner"];
};

export function AboutPartnerStatement({ content }: AboutPartnerStatementProps) {
  return (
    <section className="border-t border-border-strong/40 bg-black py-16 sm:py-24 lg:py-32 xl:py-40">
      <Container className="flex flex-col items-center gap-8 text-center sm:gap-10 lg:gap-12">
        <Image
          src="/images/ImpLogo.svg"
          alt={content.logoAlt}
          width={120}
          height={52}
          className="h-14 w-auto sm:h-16 lg:h-[4.5rem]"
        />

        <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base lg:max-w-3xl lg:text-lg lg:leading-[1.75]">
          {content.statement}
        </p>
      </Container>
    </section>
  );
}
