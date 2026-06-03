import { localizeHref, getRequestLocale } from "@/lib/i18n-server";
import { siteConfig, type NavItem, type SiteConfig } from "@/lib/site-config";
import { getNavMessages, translateNavItems } from "@/messages/nav";
import { TopBar } from "./TopBar";
import { TrainingNavbar } from "./TrainingNavbar";

async function localizeNavItems(items: NavItem[]): Promise<NavItem[]> {
  return Promise.all(
    items.map(async (item) => ({
      ...item,
      href: await localizeHref(item.href),
    }))
  );
}

type SiteHeaderProps = {
  config?: SiteConfig;
};

export async function SiteHeader({ config = siteConfig }: SiteHeaderProps = {}) {
  const locale = await getRequestLocale();
  const nav = getNavMessages(locale);
  const labeledNav = translateNavItems(config.primaryNav, nav);

  const [primaryNav, ctaHref, brandHref] = await Promise.all([
    localizeNavItems(labeledNav),
    localizeHref(config.cta.href),
    localizeHref("/"),
  ]);

  return (
    <header className="sticky top-0 z-50">
      <TopBar locales={config.locales} contact={config.contact} />
      <div className="bg-black">
        <TrainingNavbar
          brandHref={brandHref}
          items={primaryNav}
          cta={{ label: nav.register, href: ctaHref }}
        />
      </div>
    </header>
  );
}
