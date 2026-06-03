"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { stripLocaleFromPathname } from "@/lib/i18n";
import type { NavItem } from "@/lib/site-config";

type NavLinksProps = {
  items: NavItem[];
  className?: string;
};

function isItemActive(item: NavItem, pathname: string): boolean {
  const path = stripLocaleFromPathname(pathname);
  const href = stripLocaleFromPathname(item.href);
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
}

const linkBase =
  "font-sans text-xs sm:text-sm font-medium uppercase tracking-[0.12em] transition-colors " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm";

export function NavLinks({ items, className }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className={cn("flex items-center gap-6 sm:gap-8 lg:gap-10", className)}>
      {items.map((item) => {
        const active = isItemActive(item, pathname);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                linkBase,
                active
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
