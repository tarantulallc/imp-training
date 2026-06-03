import { Footer } from "@/components/site/Footer";
import { SiteHeader } from "@/components/site/header";
import { RegisterApplicationForm } from "@/components/site/register/RegisterApplicationForm";
import { RegisterPageHeader } from "@/components/site/register/RegisterPageHeader";
import { RegisterSidebar } from "@/components/site/register/RegisterSidebar";
import { Container } from "@/components/ui/Container";
import { getRegisterMessages } from "@/messages/register";

type RegisterPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function RegisterPage({ params }: RegisterPageProps) {
  const { locale } = await params;
  const messages = getRegisterMessages(locale);

  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-black">
        <RegisterPageHeader content={messages.header} />

        <Container className="pb-16 sm:pb-24 lg:pb-32">
          <div className="border border-white/30">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-stretch">
              <RegisterSidebar content={messages.sidebar} />

              <div className="min-h-full bg-black border-t border-white/30 lg:border-t-0 lg:border-l">
                <RegisterApplicationForm content={messages.form} />
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
