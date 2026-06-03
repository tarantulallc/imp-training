import type { RegisterMessages } from "./types";

export const registerDe: RegisterMessages = {
  header: {
    eyebrow: "Online-Bewerbung",
    titleLine1: "Daten",
    titleLine2: "ausfüllen.",
    intro:
      "Der erste Schritt zu einer Karriere in der CNC-Technologie. Füllen Sie das Formular aus oder kontaktieren Sie uns direkt.",
  },
  sidebar: {
    contact: {
      label: "Direkter Kontakt",
      phoneDisplay: "+383 49 692 127",
      phoneHref: "tel:+38349692127",
    },
    course: {
      label: "Kursdetails",
      price: "600€",
      title: "Grundlagen des CNC-Betriebs",
      paymentNote: "Zahlung in Raten möglich.",
    },
    social: {
      label: "Folgen Sie uns",
      facebook: "Facebook",
      instagram: "Instagram",
      facebookHref: "https://www.facebook.com/profile.php?id=61555877250200",
      instagramHref: "https://www.instagram.com/imptraining.ks/",
    },
  },
  form: {
    fullName: { label: "Vor- und Nachname", placeholder: "Name eingeben" },
    email: { label: "E-Mail", placeholder: "email@example.com" },
    phone: { label: "Telefonnummer", placeholder: "+383 --- ---" },
    residence: { label: "Wohnort", placeholder: "Stadt / Adresse" },
    preferredDate: { label: "Wunschdatum", placeholder: "TT.MM.JJJJ" },
    learningType: {
      label: "Lernform",
      options: [
        { value: "intensive", label: "Intensiv (6 Wochen)" },
        { value: "regular", label: "Regulär (12 Wochen)" },
      ],
    },
    message: {
      label: "Nachricht (optional)",
      placeholder: "Anfragen oder Fragen hier eingeben…",
    },
    submit: "Bewerbung absenden",
    submitting: "Wird gesendet…",
    success:
      "Vielen Dank — Ihre Bewerbung wurde gesendet. Wir melden uns in Kürze.",
    error:
      "Etwas ist schiefgelaufen. Bitte erneut versuchen oder uns direkt anrufen.",
    subject: "Neue Trainingsbewerbung — IMP Training",
  },
};
