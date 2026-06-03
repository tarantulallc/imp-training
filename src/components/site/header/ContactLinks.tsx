import { cn } from "@/lib/cn";
import type { ContactChannel } from "@/lib/site-config";

type ContactLinksProps = {
  channels: ContactChannel[];
  className?: string;
};

function hrefFor(channel: ContactChannel): string {
  switch (channel.kind) {
    case "email":
      return `mailto:${channel.value}`;
    case "phone":
      return `tel:${channel.value.replace(/[\s()]/g, "")}`;
  }
}

export function ContactLinks({ channels, className }: ContactLinksProps) {
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] font-medium text-muted sm:gap-x-6 sm:text-xs",
        className
      )}
    >
      {channels.map((channel) => (
        <li key={`${channel.kind}-${channel.value}`} className="min-w-0">
          <a
            href={hrefFor(channel)}
            className={cn(
              "block truncate transition-colors hover:text-foreground sm:max-w-none",
              channel.kind === "email" && "max-w-[12rem] sm:max-w-none",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-header rounded-sm"
            )}
          >
            {channel.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
