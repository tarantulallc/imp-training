import { defaultLocale, isValidLocale, type LocaleCode } from "@/lib/i18n";
import type { NavItem } from "@/lib/site-config";
import { navAl } from "./al";
import { navDe } from "./de";
import { navEn } from "./en";
import type { NavMessages } from "./types";

const navMessages: Record<LocaleCode, NavMessages> = {
  en: navEn,
  al: navAl,
  de: navDe,
};

export function getNavMessages(locale: string): NavMessages {
  if (isValidLocale(locale)) return navMessages[locale];
  return navMessages[defaultLocale as LocaleCode];
}

const HREF_LABEL_KEY: Record<string, keyof NavMessages | undefined> = {
  "/": "home",
  "/about": "aboutUs",
  "/for-htec": "forHtec",
};

export function translateNavItems(
  items: NavItem[],
  messages: NavMessages
): NavItem[] {
  return items.map((item) => {
    const key = HREF_LABEL_KEY[item.href];
    if (!key) return item;
    return { ...item, label: messages[key] };
  });
}

export type { NavMessages } from "./types";
