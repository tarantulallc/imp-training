import { Footer } from "@/components/site/Footer";
import { SiteHeader } from "@/components/site/header";
import { HighlightsSection } from "@/components/site/highlights/HighlightsSection";
import { AcademyVideoSection } from "@/components/site/academy-video/AcademyVideoSection";
import { CurrentTrainingSection } from "@/components/site/current-training/CurrentTrainingSection";
import { IntroSection } from "@/components/site/intro/IntroSection";
import { TrainingHero } from "@/components/site/training-hero/TrainingHero";
import { getHomeMessages } from "@/messages/home";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const messages = getHomeMessages(locale);

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <TrainingHero content={messages.hero} />
        <IntroSection content={messages.intro} />
        <AcademyVideoSection content={messages.academy} />
        <CurrentTrainingSection content={messages.currentTraining} />
        <HighlightsSection content={messages.highlights} />
      </main>
      <Footer />
    </>
  );
}
