import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";
import type { HomeMessages } from "@/messages/home";

type LocationSectionProps = {
  content: HomeMessages["location"];
};

export function LocationSection({ content }: LocationSectionProps) {
  const { location, address } = siteConfig;

  const delta = 0.003;
  const bbox = [
    location.lng - delta,
    location.lat - delta / 2,
    location.lng + delta,
    location.lat + delta / 2,
  ].join("%2C");

  const embedSrc =
    `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}` +
    `&layer=mapnik`;

  const openInMaps =
    `https://www.google.com/maps/dir/?api=1` +
    `&destination=${location.lat},${location.lng}` +
    `&travelmode=driving`;

  return (
    <section>
      <Container>
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-[0.28em] text-brand">
              {content.eyebrow}
            </p>
            <h2 className="font-display uppercase tracking-tight leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-foreground">
              {content.title}
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-muted lg:text-right">
            {address}. {content.descriptionSuffix}
          </p>
        </div>
      </Container>

      <div className="relative h-[50svh] min-h-[420px] w-full overflow-hidden bg-background">
        <iframe
          src={embedSrc}
          title={content.mapTitle}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          tabIndex={-1}
          aria-hidden
          className="pointer-events-none h-full w-full border-0 select-none [filter:invert(0.95)_hue-rotate(180deg)_brightness(0.85)_contrast(0.95)_saturate(0.45)]"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full"
        >
          <svg
            width="40"
            height="52"
            viewBox="0 0 40 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0C8.954 0 0 8.954 0 20c0 14.5 20 32 20 32s20-17.5 20-32C40 8.954 31.046 0 20 0z"
              fill="var(--color-brand-500)"
            />
            <circle cx="20" cy="20" r="7" fill="var(--color-surface)" />
          </svg>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent"
        />

        <Container className="pointer-events-none absolute inset-0 flex items-end justify-end pb-8">
          <a
            href={openInMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-brand-600"
          >
            {content.openInMaps}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden
            >
              <path
                d="M3 9L9 3M9 3H4.5M9 3V7.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </Container>
      </div>
    </section>
  );
}
