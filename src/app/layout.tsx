import type { Metadata, Viewport } from "next";
import { DM_Sans, Bebas_Neue, Space_Mono } from "next/font/google";
import { defaultLocale, isValidLocale } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/i18n-server";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IMP Training",
    template: "%s — IMP Training",
  },
  description:
    "IMP Training — professional CNC and manufacturing skills development in Kosovo.",
  applicationName: "IMP Training",
  icons: {
    icon: "/images/ImpLogo.svg",
    shortcut: "/images/ImpLogo.svg",
    apple: "/images/ImpLogo.svg",
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#060809",
  colorScheme: "dark",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getRequestLocale();
  const lang = isValidLocale(locale) ? locale : defaultLocale;

  return (
    <html
      lang={lang}
      className={`${dmSans.variable} ${bebasNeue.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground flex flex-col selection:bg-brand selection:text-foreground">
        {children}
      </body>
    </html>
  );
}
