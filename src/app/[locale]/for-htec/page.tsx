import { Footer } from "@/components/site/Footer";
import { SiteHeader } from "@/components/site/header";
import { HtecHero } from "@/components/site/htec/HtecHero";
import { HtecIntroSection } from "@/components/site/htec/HtecIntroSection";
import { HtecNetworkStats } from "@/components/site/htec/HtecNetworkStats";
import { HtecStandardsSection } from "@/components/site/htec/HtecStandardsSection";
import { getHtecMessages } from "@/messages/htec";

type ForHtecPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ForHtecPage({ params }: ForHtecPageProps) {
  const { locale } = await params;
  const messages = getHtecMessages(locale);

  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-black">
        <HtecHero content={messages.hero} />
        <HtecIntroSection content={messages.intro} />
        <HtecNetworkStats content={messages.networkStats} />
        <HtecStandardsSection content={messages.standards} />
      </main>
      <Footer />
    </>
  );
}
