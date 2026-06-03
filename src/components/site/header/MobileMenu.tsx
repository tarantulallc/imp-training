"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { stripLocaleFromPathname } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";
import type { NavItem } from "@/lib/site-config";
import { RegisterButton } from "./RegisterButton";

type MobileMenuProps = {
  items: NavItem[];
  cta: { label: string; href: string };
};

function isItemActive(item: NavItem, pathname: string): boolean {
  const path = stripLocaleFromPathname(pathname);
  const href = stripLocaleFromPathname(item.href);
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
}

export function MobileMenu({ items, cta }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const panelId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  const overlay = (
    <>
      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-200",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      <div
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={cn(
          "md:hidden fixed inset-x-0 bottom-0 z-40 top-[7.5rem] sm:top-[7.75rem]",
          "bg-black border-t border-border",
          "overflow-y-auto transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <Container className="py-8 flex flex-col gap-8">
          <ul className="flex flex-col gap-1">
            {items.map((item) => {
              const active = isItemActive(item, pathname);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block py-3 font-sans text-sm font-medium uppercase tracking-[0.12em] transition-colors",
                      active
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <RegisterButton
            label={cta.label}
            href={cta.href}
            className="w-full"
            onClick={() => setOpen(false)}
          />
        </Container>
      </div>
    </>
  );

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "md:hidden relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-sm",
          "text-foreground transition-colors hover:bg-white/5",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        )}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {mounted ? createPortal(overlay, document.body) : null}
    </>
  );
}

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}
