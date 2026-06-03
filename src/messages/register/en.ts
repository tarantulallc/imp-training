import type { RegisterMessages } from "./types";

export const registerEn: RegisterMessages = {
  header: {
    eyebrow: "Online application",
    titleLine1: "Fill in",
    titleLine2: "the data.",
    intro:
      "Take the first step towards a career in CNC technology. Fill out the form below or contact us directly.",
  },
  sidebar: {
    contact: {
      label: "Direct contact",
      phoneDisplay: "+383 49 692 127",
      phoneHref: "tel:+38349692127",
    },
    course: {
      label: "Course details",
      price: "600€",
      title: "Basics of CNC operation",
      paymentNote: "Payment can be made in installments.",
    },
    social: {
      label: "Follow us",
      facebook: "Facebook",
      instagram: "Instagram",
      facebookHref: "https://www.facebook.com/profile.php?id=61555877250200",
      instagramHref: "https://www.instagram.com/imptraining.ks/",
    },
  },
  form: {
    fullName: { label: "First and last name", placeholder: "Enter your name" },
    email: { label: "Email", placeholder: "email@example.com" },
    phone: { label: "Phone number", placeholder: "+383 --- ---" },
    residence: { label: "Residence", placeholder: "City / Address" },
    preferredDate: { label: "Preferred date", placeholder: "dd.mm.yyyy" },
    learningType: {
      label: "Type of learning",
      options: [
        { value: "intensive", label: "Intensive (6 weeks)" },
        { value: "regular", label: "Regular (12 weeks)" },
      ],
    },
    message: {
      label: "Message (optional)",
      placeholder: "Please enter any requests or questions…",
    },
    submit: "Submit application",
    submitting: "Sending…",
    success:
      "Thank you — your application has been sent. We will contact you soon.",
    error: "Something went wrong. Please try again or call us directly.",
    subject: "New training application — IMP Training",
  },
};
