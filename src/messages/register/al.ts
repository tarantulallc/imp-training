import type { RegisterMessages } from "./types";

export const registerAl: RegisterMessages = {
  header: {
    eyebrow: "Aplikim online",
    titleLine1: "Plotëso",
    titleLine2: "të dhënat.",
    intro:
      "Hapi i parë drejt një karriere në teknologjinë CNC. Plotësoni formularin më poshtë ose na kontaktoni direkt.",
  },
  sidebar: {
    contact: {
      label: "Kontakt direkt",
      phoneDisplay: "+383 49 692 127",
      phoneHref: "tel:+38349692127",
    },
    course: {
      label: "Detajet e kursit",
      price: "600€",
      title: "Bazat e operimit CNC",
      paymentNote: "Pagesa mund të bëhet me këste.",
    },
    social: {
      label: "Na ndiqni",
      facebook: "Facebook",
      instagram: "Instagram",
      facebookHref: "https://www.facebook.com/profile.php?id=61555877250200",
      instagramHref: "https://www.instagram.com/imptraining.ks/",
    },
  },
  form: {
    fullName: { label: "Emri dhe mbiemri", placeholder: "Shkruani emrin tuaj" },
    email: { label: "Email", placeholder: "email@example.com" },
    phone: { label: "Numri i telefonit", placeholder: "+383 --- ---" },
    residence: { label: "Vendbanimi", placeholder: "Qyteti / Adresa" },
    preferredDate: { label: "Data e preferuar", placeholder: "dd.mm.vvvv" },
    learningType: {
      label: "Lloji i mësimit",
      options: [
        { value: "intensive", label: "Intensiv (6 javë)" },
        { value: "regular", label: "Regular (12 javë)" },
      ],
    },
    message: {
      label: "Mesazh (opsional)",
      placeholder: "Shkruani çdo kërkesë ose pyetje…",
    },
    submit: "Dërgo aplikimin",
    submitting: "Duke dërguar…",
    success: "Faleminderit — aplikimi u dërgua. Do t’ju kontaktojmë së shpejti.",
    error: "Diçka shkoi keq. Provoni përsëri ose na telefononi direkt.",
    subject: "Aplikim i ri trajnimi — IMP Training",
  },
};
