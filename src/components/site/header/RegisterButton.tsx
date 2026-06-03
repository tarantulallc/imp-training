import Link from "next/link";
import { cn } from "@/lib/cn";

type RegisterButtonProps = {
  label: string;
  href: string;
  className?: string;
  onClick?: () => void;
};

export function RegisterButton({
  label,
  href,
  className,
  onClick,
}: RegisterButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-none border border-brand",
        "px-5 py-2.5 sm:px-6 sm:py-3",
        "font-sans text-xs sm:text-sm font-medium uppercase tracking-[0.12em] text-foreground",
        "transition-colors duration-200 hover:bg-brand hover:text-white",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        className
      )}
    >
      {label}
    </Link>
  );
}
