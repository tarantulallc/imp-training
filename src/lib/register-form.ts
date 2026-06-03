import { siteConfig } from "@/lib/site-config";

export const REGISTER_FORM_EMAIL =
  siteConfig.contact.find((c) => c.kind === "email")?.value ?? "info@imptraining.com";

export const REGISTER_FORMSUBMIT_URL = `https://formsubmit.co/ajax/${encodeURIComponent(REGISTER_FORM_EMAIL)}`;
