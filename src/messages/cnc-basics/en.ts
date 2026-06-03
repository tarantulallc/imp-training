import type { CncBasicsMessages } from "./types";

export const cncBasicsEn: CncBasicsMessages = {
  hero: {
    eyebrow: "Professional training",
    titleLine1: "CNC operation basics",
    titleLine2: "First level",
    price: "600€",
    paymentNote: "Total cost / payment in installments",
    cta: "Register now",
    imageAlt: "CNC machine components in a training workshop",
  },
  intro: {
    title: "Career-changing knowledge.",
    paragraphs: [
      "This course combines theoretical foundations with intensive hands-on practice on industry-grade Haas CNC equipment. You learn safe operation, programming basics, and the workflows used in real manufacturing environments.",
      "Designed for beginners and career changers, the program uses modern laboratories and structured modules so every participant builds confidence from the first week through certification-ready skills.",
    ],
  },
  curriculum: {
    eyebrow: "Training curriculum",
    title: "Modules that are treated",
    moduleLabel: "Module",
    modules: [
      {
        number: "01",
        title: "Introduction to CNC and safety at work",
        description:
          "History and evolution of CNC technology, workshop rules, and personal protective equipment standards for safe daily operation.",
      },
      {
        number: "02",
        title: "Components and basic operations",
        description:
          "Haas CNC machine parts, preventive maintenance routines, and the X, Y, and Z coordinate systems used in setup and operation.",
      },
      {
        number: "03",
        title: "Geometry and G-code programming",
        description:
          "Measurement units, coordinate geometry, and practical exercises with G-code and M-code for controlled machining cycles.",
      },
      {
        number: "04",
        title: "CNC materials and tools",
        description:
          "Common materials such as aluminum and steel, tool selection, holder assembly, and techniques aligned with production requirements.",
      },
    ],
  },
  finalCta: {
    title: "Ready to start?",
    lines: [
      "The number of places is limited to ensure maximum attention for each student.",
      "Secure your place today.",
    ],
    cta: "Register now",
  },
};
