import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getRequestLocale, localizeHref } from "@/lib/i18n-server";
import { siteConfig } from "@/lib/site-config";
import {
  formatCopyright,
  getFooterMessages,
  translateFooterNavItems,
} from "@/messages/footer";

const columnTitleClass =
  "font-display text-xl uppercase leading-none tracking-[0.08em] text-foreground sm:text-2xl";

export async function Footer() {
  const locale = await getRequestLocale();
  const messages = getFooterMessages(locale);
  const year = new Date().getFullYear();

  const homeHref = await localizeHref("/");
  const labeledNav = translateFooterNavItems(siteConfig.footerNav, messages);
  const footerNav = await Promise.all(
    labeledNav.map(async (item) => ({
      ...item,
      href: await localizeHref(item.href),
    }))
  );

  const email = siteConfig.contact.find((c) => c.kind === "email");

  return (
    <footer className="border-t border-border-strong/40 bg-black">
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-[minmax(0,1.15fr)_repeat(3,minmax(0,1fr))] lg:gap-x-12 lg:gap-y-0">
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1 lg:max-w-md">
            <Link
              href={homeHref}
              aria-label={messages.homeAriaLabel}
              className="inline-flex w-fit transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/ImpLogo.svg"
                alt={siteConfig.name}
                width={100}
                height={44}
                className="h-12 w-auto sm:h-14"
              />
            </Link>
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              {messages.description}
            </p>
          </div>

          <FooterColumn title={messages.navigateColumn}>
            <ul className="flex flex-col gap-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title={messages.physicalOfficeColumn}>
            <div className="flex flex-col gap-3">
              <p className="text-lg leading-snug text-foreground sm:text-lg">
                {siteConfig.address}
              </p>
              <p className="text-lg text-foreground sm:text-xl">
                {messages.country}
              </p>
              {email ? (
                <a
                  href={`mailto:${email.value}`}
                  className="break-all text-base text-muted transition-colors hover:text-foreground"
                >
                  {email.label}
                </a>
              ) : null}
            </div>
          </FooterColumn>

          <FooterColumn title={messages.workHoursColumn}>
            <ul className="flex flex-col gap-3 font-mono text-sm uppercase tracking-[0.08em] text-muted sm:text-[15px]">
              <li className="break-words">{messages.workHours.weekdays}</li>
              <li>{messages.workHours.weekend}</li>
            </ul>
          </FooterColumn>
        </div>
      </Container>

      <Container>
        <div className="border-t border-border-strong/40 py-6 sm:py-8">
          <p className="font-mono text-xs uppercase leading-relaxed tracking-[0.14em] text-subtle sm:text-sm sm:tracking-[0.16em]">
            {formatCopyright(messages.copyright, year)}
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5 sm:gap-6">
      <h3 className={columnTitleClass}>{title}</h3>
      {children}
    </div>
  );
}
