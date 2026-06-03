import "server-only";

import { headers } from "next/headers";
import {
  defaultLocale,
  isLocalizablePath,
  isValidLocale,
  localizePath,
  LOCALE_HEADER,
  type LocaleCode,
} from "@/lib/i18n";

export async function getRequestLocale(): Promise<LocaleCode> {
  const headerStore = await headers();
  const fromHeader = headerStore.get(LOCALE_HEADER);
  if (fromHeader && isValidLocale(fromHeader)) return fromHeader;
  return defaultLocale as LocaleCode;
}

export async function localizeHref(href: string): Promise<string> {
  if (!isLocalizablePath(href)) return href;
  const locale = await getRequestLocale();
  return localizePath(href, locale);
}
