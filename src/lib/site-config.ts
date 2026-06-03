/**
 * Site-wide configuration.
 */

export type Locale = {
  code: string;
  label: string;
  name: string;
};

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type ContactChannel = {
  kind: "email" | "phone";
  label: string;
  value: string;
};

export type SocialPlatform = "linkedin" | "instagram";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

export type StandardsCard = {
  title: string;
  body: string;
};

export type GeoLocation = {
  lat: number;
  lng: number;
  label: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  address: string;
  location: GeoLocation;
  locales: Locale[];
  defaultLocale: string;
  contact: ContactChannel[];
  primaryNav: NavItem[];
  footerNav: NavItem[];
  standards: StandardsCard;
  social: SocialLink[];
  cta: { label: string; href: string };
};

export const siteConfig: SiteConfig = {
  name: "IMP",
  tagline: "Training",
  description:
    "IMP Training, based in Kosovo, delivers hands-on CNC and manufacturing education backed by IMP Parts' decades of precision engineering experience.",
  address: "Mark Malota, Gjakovë 5000",
  location: {
    lat: 42.3970875,
    lng: 20.424829,
    label: "IMP Training — Mark Malota, Gjakovë",
  },
  defaultLocale: "en",
  locales: [
    { code: "en", label: "EN", name: "English" },
    { code: "al", label: "AL", name: "Albanian" },
    { code: "de", label: "DE", name: "German" },
  ],
  contact: [
    {
      kind: "phone",
      label: "+383 (0) 49 959 887",
      value: "+38349959887",
    },
    {
      kind: "email",
      label: "info@imptraining.com",
      value: "info@imptraining.com",
    },
  ],
  primaryNav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "For HTEC", href: "/for-htec" },
  ],
  footerNav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "For HTEC", href: "/for-htec" },
    { label: "Register", href: "/register" },
  ],
  standards: {
    title: "Industry-Ready Skills",
    body: "Programs aligned with real shop-floor workflows, ISO quality practices, and modern CNC technology used at IMP Parts.",
  },
  social: [
    {
      platform: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/imp-parts/",
    },
    {
      platform: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/imp.parts/",
    },
  ],
  cta: { label: "Register", href: "/register" },
};
