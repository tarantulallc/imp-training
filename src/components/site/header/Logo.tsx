import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  href?: string;
  className?: string;
};

export function Logo({ href = "/", className }: LogoProps) {
  return (
    <Link
      href={href}
      aria-label="IMP Training — home"
      className={cn(
        "group inline-flex shrink-0 select-none transition-opacity hover:opacity-90",
        className
      )}
    >
      <Image
        src="/images/ImpLogo.svg"
        width={140}
        height={54}
        alt="IMP Machine Products"
        priority
        className="h-12 w-auto sm:h-14"
      />
    </Link>
  );
}
