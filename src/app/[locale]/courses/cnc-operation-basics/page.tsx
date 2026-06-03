import { Footer } from "@/components/site/Footer";
import { SiteHeader } from "@/components/site/header";
import { CncBasicsPage } from "@/components/site/cnc-basics/CncBasicsPage";
import { getCncBasicsMessages } from "@/messages/cnc-basics";

type CncBasicsRouteProps = {
  params: Promise<{ locale: string }>;
};

export default async function CncOperationBasicsPage({
  params,
}: CncBasicsRouteProps) {
  const { locale } = await params;
  const messages = getCncBasicsMessages(locale);

  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-black">
        <CncBasicsPage content={messages} />
      </main>
      <Footer />
    </>
  );
}
