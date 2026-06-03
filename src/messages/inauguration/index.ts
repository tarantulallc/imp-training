import { defaultLocale, isValidLocale, type LocaleCode } from "@/lib/i18n";
import { inaugurationAl } from "./al";
import { inaugurationDe } from "./de";
import { inaugurationEn } from "./en";
import type { InaugurationMessages } from "./types";

const inaugurationMessages: Record<LocaleCode, InaugurationMessages> = {
  en: inaugurationEn,
  al: inaugurationAl,
  de: inaugurationDe,
};

export function getInaugurationMessages(locale: string): InaugurationMessages {
  if (isValidLocale(locale)) return inaugurationMessages[locale];
  return inaugurationMessages[defaultLocale as LocaleCode];
}

export type { InaugurationMessages } from "./types";
