import { cn } from "@/lib/cn";
import type { HtecStat } from "@/messages/htec";

type HtecStatItemProps = {
  stat: HtecStat;
  size?: "md" | "lg";
};

export function HtecStatItem({ stat, size = "md" }: HtecStatItemProps) {
  return (
    <div className="flex flex-col gap-2 sm:gap-3">
      <span
        className={cn(
          "font-display uppercase leading-none tracking-tight",
          size === "lg"
            ? "text-5xl sm:text-6xl lg:text-7xl"
            : "text-4xl sm:text-5xl",
          stat.accent === "foreground" ? "text-foreground" : "text-brand"
        )}
      >
        {stat.value}
      </span>
      <span className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-foreground sm:text-[11px]">
        {stat.label}
      </span>
    </div>
  );
}
