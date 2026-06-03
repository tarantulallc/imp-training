import { defaultLocale, isValidLocale, type LocaleCode } from "@/lib/i18n";
import { registerAl } from "./al";
import { registerDe } from "./de";
import { registerEn } from "./en";
import type { RegisterMessages } from "./types";

const registerMessages: Record<LocaleCode, RegisterMessages> = {
  en: registerEn,
  al: registerAl,
  de: registerDe,
};

export function getRegisterMessages(locale: string): RegisterMessages {
  if (isValidLocale(locale)) return registerMessages[locale];
  return registerMessages[defaultLocale as LocaleCode];
}

export type { RegisterMessages } from "./types";
