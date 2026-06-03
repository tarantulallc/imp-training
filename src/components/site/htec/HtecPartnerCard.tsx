import type { HtecMessages } from "@/messages/htec";
import { HtecStatItem } from "./HtecStatItem";

type HtecPartnerCardProps = {
  content: HtecMessages["intro"]["card"];
};

export function HtecPartnerCard({ content }: HtecPartnerCardProps) {
  return (
    <div className="relative border border-white/30 bg-htec-card">
      <span
        aria-hidden
        className="pointer-events-none absolute -left-px -top-px z-10 h-3.5 w-3.5 border-l-[3px] border-t-[3px] border-brand sm:h-6 sm:w-6"
      />

      <div className="flex flex-col gap-5 px-6 py-8 sm:gap-6 sm:px-8 sm:py-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand sm:text-xs">
          {content.eyebrow}
        </p>

        <p className="text-sm leading-relaxed text-muted sm:text-base sm:leading-[1.7]">
          {content.body}
        </p>
      </div>

      <hr className="mx-6 border-0 border-t border-white/30 sm:mx-8" />

      <div className="grid grid-cols-2 gap-px bg-white/30">
        {content.stats.map((stat) => (
          <div key={stat.key} className="bg-htec-card px-6 py-6 sm:px-8 sm:py-7">
            <HtecStatItem stat={stat} />
          </div>
        ))}
      </div>
    </div>
  );
}
