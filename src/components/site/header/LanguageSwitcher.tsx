"use client";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/cn";
import {
  defaultLocale,
  getLocaleFromPathname,
  switchLocalePath,
  type LocaleCode,
} from "@/lib/i18n";
import type { Locale } from "@/lib/site-config";

type LanguageSwitcherProps = {
  locales: Locale[];
  onChange?: (code: string) => void;
  className?: string;
};

export function LanguageSwitcher({
  locales,
  onChange,
  className,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const active =
    getLocaleFromPathname(pathname) ?? (defaultLocale as LocaleCode);

  const handleSelect = (code: string) => {
    if (code === active) return;
    const nextPath = switchLocalePath(pathname, code);
    router.push(nextPath);
    onChange?.(code);
  };

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn("flex items-center gap-1 text-xs font-medium", className)}
    >
      {locales.map((locale, i) => {
        const isActive = active === locale.code;
        return (
          <span key={locale.code} className="flex items-center">
            <button
              type="button"
              onClick={() => handleSelect(locale.code)}
              aria-label={`Switch language to ${locale.name}`}
              aria-pressed={isActive}
              className={cn(
                "px-1.5 py-1 transition-colors rounded-sm",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive
                  ? "text-foreground"
                  : "text-subtle hover:text-foreground"
              )}
            >
              {locale.label}
            </button>
            {i < locales.length - 1 ? (
              <span aria-hidden className="text-subtle/40">
                |
              </span>
            ) : null}
          </span>
        );
      })}
    </div>
  );
}
