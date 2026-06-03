import type { HomeMessages } from "./types";

export const homeEn: HomeMessages = {
  hero: {
    line1: {
      before: "Start ",
      highlight: "Learning ",
      after: "and",
    },
    line2: {
      before: "Define your ",
      highlight: "future.",
    },
    cta: "Register now",
    imageAlt: "CNC machinery in an IMP Training workshop",
  },
  intro: {
    eyebrow: "What is IMP Training?",
    titleLine1: "Education",
    titleLine2: "of the new",
    titleLine3: "generation.",
    partnerTagline:
      "The first official partner in Kosovo and the Balkans",
    paragraphs: [
      "IMP Training was established by IMP in 2023, with the aim of increasing the number of qualified people available to meet a critical need in the manufacturing industry.",
      "Our mission is to create a collaborative space in which we develop and distribute the best educational methods for education in CNC and other manufacturing technologies.",
    ],
  },
  academy: {
    videoLabel: "Inauguration",
    placeholderAriaLabel: "Video placeholder — inauguration",
    title: "IMP Academy",
    cta: "See more",
    description:
      "In this video you can see the inauguration of the newest training center in Kosovo. During the event, the Mayor of Gjakova, Ardian Gjini, and the American Ambassador, Jeffrey Hovenier, were present.",
  },
  currentTraining: {
    eyebrow: "Current Training",
    titleLine1: "CNC Operation",
    titleLine2: "Basics",
    level: "Level one — Intensive",
    description:
      "Certified program covering the basics of operation, safety, and maintenance of Haas CNC machines.",
    stats: [
      { key: "duration", label: "Duration", value: "4 weeks" },
      { key: "age", label: "Age", value: "18+" },
      { key: "intensity", label: "Intensity", value: "Every day" },
    ],
    cta: "See more",
    imageAlt: "Trainee at a Haas CNC machine in the IMP Training workshop",
  },
  highlights: {
    items: [
      {
        key: "inauguration",
        title: "IMP Training center inaugurated in Kosovo",
        excerpt:
          "The newest technology-focused training center Haas HTEC in the region opens its doors in Gjakova, bringing industry-standard CNC education to Kosovo and the Balkans.",
      },
      {
        key: "certified",
        title: "About certified training",
        excerpt:
          "We aim to increase the number of qualified people in the manufacturing industry through structured, certified programs aligned with real production needs.",
      },
      {
        key: "htec",
        title: "Haas Technical Education Community",
        excerpt:
          "HTEC is a global partnership program founded by Haas Automation to support technical education with modern CNC technology and proven curricula.",
      },
    ],
  },
  programs: {
    eyebrow: "IMP Academy",
    title: "Programs built for real manufacturing.",
    description:
      "Structured courses covering CNC milling, turning, quality inspection, and production workflows — designed and delivered by practitioners, not theorists.",
    guarantee: "Learn what production actually demands.",
    cards: [
      {
        titleLines: ["CNC", "Fundamentals"],
        description:
          "Machine setup, tooling, offsets, and safe operation on 3- and 4-axis CNC equipment used in daily production at IMP.",
        imageAlt: "CNC machining training",
      },
      {
        titleLines: ["Lathe &", "Turning"],
        description:
          "Programming and operation of CNC lathes — from basic turning through multi-feature components and production techniques.",
        imageAlt: "CNC lathe training",
      },
      {
        titleLines: ["Quality &", "Workflow"],
        description:
          "Inspection methods, documentation, and end-to-end manufacturing workflows aligned with ISO quality practices.",
        imageAlt: "Quality control training",
      },
    ],
  },
  advantages: {
    panels: [
      {
        title: "Live Environment",
        lead: "Train where parts are actually made.",
        body: [
          "Unlike classroom-only courses, IMP Training takes place inside a working precision manufacturing facility with 17 CNC machines and 30+ skilled staff.",
          "You see real tolerances, real materials, and real deadlines — the context that textbooks cannot replicate.",
        ],
      },
      {
        title: "Expert Instructors",
        lead: "Taught by people who run production.",
        body: [
          "Every module is led by engineers and machinists with years of hands-on experience at IMP Parts.",
          "You learn the shortcuts, the pitfalls, and the standards that matter on the shop floor.",
        ],
      },
      {
        title: "Flexible Paths",
        lead: "From foundations to advanced skills.",
        body: [
          "Individual learners, apprentices, and corporate teams can follow tailored learning paths — fundamentals, specialization, or team upskilling.",
          "Programs adapt to your starting level and production goals.",
        ],
      },
      {
        title: "Industry Connection",
        lead: "Direct pipeline to manufacturing careers.",
        body: [
          "IMP Training is backed by IMP Parts' network in aerospace, automation, civil engineering, and industrial sectors.",
          "Graduates gain credentials and contacts valued by employers across Kosovo and the region.",
        ],
      },
      {
        title: "Quality Standards",
        lead: "ISO-aligned practices from day one.",
        body: [
          "Quality control, documentation, and process discipline are woven into every course — mirroring the accredited excellence of IMP Parts production.",
          "You leave with habits that meet international manufacturing standards.",
        ],
      },
    ],
    swipeLabel: "Swipe to explore",
    prevLabel: "Previous panel",
    nextLabel: "Next panel",
  },
  location: {
    eyebrow: "Visit Us",
    title: "Where to find us.",
    descriptionSuffix:
      "Tour our facility and discuss enrollment options tailored to your team or career goals.",
    openInMaps: "Open in maps",
    mapTitle: "IMP Training location on OpenStreetMap",
  },
};
