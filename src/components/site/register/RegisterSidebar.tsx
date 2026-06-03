import Link from "next/link";
import type { RegisterMessages } from "@/messages/register";

type RegisterSidebarProps = {
  content: RegisterMessages["sidebar"];
};

const sectionLabelClass =
  "font-mono text-[11px] uppercase tracking-[0.22em] text-brand sm:text-xs";

export function RegisterSidebar({ content }: RegisterSidebarProps) {
  return (
    <div className="flex min-h-full flex-col gap-10 bg-[#0D1012] px-6 py-10 sm:gap-12 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
      <div className="flex flex-col gap-3 sm:gap-4">
        <p className={sectionLabelClass}>{content.contact.label}</p>
        <a
          href={content.contact.phoneHref}
          className="font-display text-3xl uppercase tracking-tight text-foreground transition-colors hover:text-brand sm:text-4xl lg:text-5xl"
        >
          {content.contact.phoneDisplay}
        </a>
      </div>

      <div className="flex flex-col gap-4 sm:gap-5">
        <p className={sectionLabelClass}>{content.course.label}</p>
        <div className="border border-brand px-5 py-6 sm:px-6 sm:py-7">
          <p className="font-display text-4xl uppercase tracking-tight text-brand sm:text-5xl">
            {content.course.price}
          </p>
          <p className="mt-3 font-display text-lg uppercase tracking-tight text-foreground sm:text-xl">
            {content.course.title}
          </p>
          <p className="mt-2 font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-muted sm:text-[10px]">
            {content.course.paymentNote}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:gap-5">
        <p className={sectionLabelClass}>{content.social.label}</p>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
          <Link
            href={content.social.facebookHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-base uppercase tracking-tight text-foreground transition-colors hover:text-brand sm:text-lg"
          >
            {content.social.facebook}
          </Link>
          <Link
            href={content.social.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-base uppercase tracking-tight text-foreground transition-colors hover:text-brand sm:text-lg"
          >
            {content.social.instagram}
          </Link>
        </div>
      </div>
    </div>
  );
}
