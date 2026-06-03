import { Container } from "@/components/ui/Container";
import type { HtecMessages } from "@/messages/htec";
import { HtecStatItem } from "./HtecStatItem";

type HtecNetworkStatsProps = {
  content: HtecMessages["networkStats"];
};

export function HtecNetworkStats({ content }: HtecNetworkStatsProps) {
  return (
    <section className="bg-black pb-16 sm:pb-24 lg:pb-32 xl:pb-40">
      <Container>
        <div className="border border-white/30">
          <div className="grid grid-cols-1 gap-px bg-white/30 sm:grid-cols-3">
          {content.items.map((stat) => (
            <div
              key={stat.key}
              className="flex bg-black px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14"
            >
              <HtecStatItem stat={stat} size="lg" />
            </div>
          ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
