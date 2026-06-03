import { Container } from "@/components/ui/Container";
import type { NavItem } from "@/lib/site-config";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { RegisterButton } from "./RegisterButton";
import { MobileMenu } from "./MobileMenu";

type TrainingNavbarProps = {
  brandHref: string;
  items: NavItem[];
  cta: { label: string; href: string };
};

export function TrainingNavbar({ brandHref, items, cta }: TrainingNavbarProps) {
  return (
    <Container className="flex h-16 items-center justify-between gap-4 sm:h-20 lg:h-[5.5rem]">
      <Logo href={brandHref} className="[&_img]:h-10 sm:[&_img]:h-12 lg:[&_img]:h-14" />

      <div className="hidden md:flex items-center gap-6 lg:gap-10 xl:gap-12">
        <NavLinks items={items} />
        <RegisterButton
          label={cta.label}
          href={cta.href}
          className="shrink-0 px-4 py-2.5 text-[10px] sm:px-5 sm:py-3 sm:text-xs"
        />
      </div>

      <div className="flex md:hidden items-center">
        <MobileMenu items={items} cta={cta} />
      </div>
    </Container>
  );
}
