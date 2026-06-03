import { Footer } from "@/components/site/Footer";
import { SiteHeader } from "@/components/site/header";
import { InaugurationArticle } from "@/components/site/inauguration/InaugurationArticle";
import { getInaugurationMessages } from "@/messages/inauguration";

type InaugurationPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function InaugurationPage({ params }: InaugurationPageProps) {
  const { locale } = await params;
  const messages = getInaugurationMessages(locale);

  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-black">
        <InaugurationArticle content={messages} />
      </main>
      <Footer />
    </>
  );
}
