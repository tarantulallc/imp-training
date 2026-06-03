import { defaultLocale, isValidLocale, type LocaleCode } from "@/lib/i18n";
import { htecAl } from "./al";
import { htecDe } from "./de";
import { htecEn } from "./en";
import type { HtecMessages } from "./types";

const htecMessages: Record<LocaleCode, HtecMessages> = {
  en: htecEn,
  al: htecAl,
  de: htecDe,
};

export function getHtecMessages(locale: string): HtecMessages {
  if (isValidLocale(locale)) return htecMessages[locale];
  return htecMessages[defaultLocale as LocaleCode];
}

export type { HtecMessages, HtecStat } from "./types";
