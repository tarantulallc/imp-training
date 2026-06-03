import { defaultLocale, isValidLocale, type LocaleCode } from "@/lib/i18n";
import { cncBasicsAl } from "./al";
import { cncBasicsDe } from "./de";
import { cncBasicsEn } from "./en";
import type { CncBasicsMessages } from "./types";

const cncBasicsMessages: Record<LocaleCode, CncBasicsMessages> = {
  en: cncBasicsEn,
  al: cncBasicsAl,
  de: cncBasicsDe,
};

export function getCncBasicsMessages(locale: string): CncBasicsMessages {
  if (isValidLocale(locale)) return cncBasicsMessages[locale];
  return cncBasicsMessages[defaultLocale as LocaleCode];
}

export type { CncBasicsMessages } from "./types";
