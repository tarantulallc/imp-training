import { AboutHero } from "@/components/site/about/AboutHero";
import { AboutMissionGrid } from "@/components/site/about/AboutMissionGrid";
import { AboutPartnerStatement } from "@/components/site/about/AboutPartnerStatement";
import { Footer } from "@/components/site/Footer";
import { SiteHeader } from "@/components/site/header";
import { getAboutMessages } from "@/messages/about";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const messages = getAboutMessages(locale);

  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-black">
        <AboutHero content={messages.hero} />
        <AboutMissionGrid content={messages.mission} />
        <AboutPartnerStatement content={messages.partner} />
      </main>
      <Footer />
    </>
  );
}
