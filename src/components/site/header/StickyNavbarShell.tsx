"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type StickyNavbarShellProps = {
  children: React.ReactNode;
};

export function StickyNavbarShell({ children }: StickyNavbarShellProps) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [pinned, setPinned] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    const nav = navRef.current;
    if (!sentinel || !nav) return;

    const measure = () => setNavHeight(nav.getBoundingClientRect().height);
    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(nav);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => setPinned(!entry.isIntersecting),
      { threshold: 0 }
    );
    intersectionObserver.observe(sentinel);

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={sentinelRef} aria-hidden className="h-0 w-full" />
      {pinned ? <div aria-hidden style={{ height: navHeight }} /> : null}
      <nav
        ref={navRef}
        aria-label="Primary"
        className={cn(
          "z-50 w-full bg-black",
          pinned ? "fixed top-0 left-0 right-0" : "relative"
        )}
      >
        {children}
      </nav>
    </>
  );
}
