import { Container } from "@/components/ui/Container";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ContactLinks } from "./ContactLinks";
import type { ContactChannel, Locale } from "@/lib/site-config";

type TopBarProps = {
  locales: Locale[];
  contact: ContactChannel[];
};

export function TopBar({ locales, contact }: TopBarProps) {
  return (
    <div className="bg-header border-b border-border">
      <Container className="flex flex-col gap-2 py-2.5 sm:h-9 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-0">
        <LanguageSwitcher locales={locales} />
        <ContactLinks channels={contact} className="max-sm:w-full max-sm:justify-end" />
      </Container>
    </div>
  );
}
