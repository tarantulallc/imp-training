import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { localizeHref } from "@/lib/i18n-server";

type CtaSectionProps = {
  /** Override the default headline. */
  headline?: string;
  /** Primary CTA — solid white pill. */
  primaryAction?: {
    label: string;
    href: string;
    /** When true, opens in a new tab (used e.g. for the PDF download). */
    download?: boolean;
  };
  /** Secondary CTA — outline pill. */
  secondaryAction?: {
    label: string;
    href: string;
    download?: boolean;
  };
};

const DEFAULT_HEADLINE = "Ready to advance your manufacturing skills?";

const DEFAULT_PRIMARY = {
  label: "Enroll now",
  href: "/contact",
};

const DEFAULT_SECONDARY = {
  label: "View courses",
  href: "/courses",
};

export async function CtaSection({
  headline = DEFAULT_HEADLINE,
  primaryAction = DEFAULT_PRIMARY,
  secondaryAction = DEFAULT_SECONDARY,
}: CtaSectionProps) {
  const [primaryHref, secondaryHref] = await Promise.all([
    localizeHref(primaryAction.href),
    localizeHref(secondaryAction.href),
  ]);

  const primary = { ...primaryAction, href: primaryHref };
  const secondary = { ...secondaryAction, href: secondaryHref };

  return (
    <section className="mt-24 sm:mt-32 lg:mt-40 bg-brand">
      <Container className="py-20 sm:py-24 lg:py-32">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="font-display uppercase tracking-tight leading-[0.9] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-foreground max-w-lg lg:max-w-2xl">
            {headline}
          </h2>

          <div className="flex flex-wrap gap-4 sm:gap-5">
            <CtaPrimary {...primary} />
            {/* <CtaSecondary {...secondary} /> */}
          </div>
        </div>
      </Container>
    </section>
  );
}

type CtaActionProps = {
  label: string;
  href: string;
  download?: boolean;
};

function CtaPrimary({ label, href, download }: CtaActionProps) {
  const isExternal = download || href.startsWith("http");
  const className =
    "inline-flex items-center justify-center font-mono text-[12px] uppercase tracking-[0.24em] " +
    "bg-foreground text-brand px-8 py-5 transition-colors duration-200 " +
    "hover:bg-foreground/90";

  if (isExternal) {
    return (
      <a
        href={href}
        target={download ? "_blank" : undefined}
        rel={download ? "noopener noreferrer" : undefined}
        download={download}
        className={className}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

function CtaSecondary({ label, href, download }: CtaActionProps) {
  const isExternal = download || href.startsWith("http");
  const className =
    "inline-flex items-center justify-center font-mono text-[12px] uppercase tracking-[0.24em] " +
    "border border-foreground/40 text-foreground px-8 py-5 transition-colors duration-200 " +
    "hover:bg-foreground hover:text-brand hover:border-foreground";

  if (isExternal) {
    return (
      <a
        href={href}
        target={download ? "_blank" : undefined}
        rel={download ? "noopener noreferrer" : undefined}
        download={download}
        className={className}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
