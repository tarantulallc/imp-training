import type { HtecMessages } from "./types";

export const htecEn: HtecMessages = {
  hero: {
    eyebrow: "Global partnership",
    titleLine1: "Haas technical",
    titleLine2: "education",
    titleLine3: "community.",
    description:
      "IMP Training is the first representative of the HTEC program in the Balkans, a global network of advanced technical education.",
    imageAlt: "CNC workshop at IMP Training",
  },
  intro: {
    watermark: "HTEC",
    eyebrow: "Partnership program",
    title: "HTEC",
    paragraphs: [
      "The Haas Technical Education Community (HTEC) is a global partnership program founded by Haas Automation to support technical education with modern CNC technology.",
      "HTEC transforms traditional CNC classrooms into high-tech learning labs where students gain hands-on experience on industry-standard equipment.",
    ],
    card: {
      eyebrow: "World leader",
      body: "Haas Automation is the largest American machine tool builder. According to the QS World University Rankings, 21 of the top 25 universities in the world use Haas CNC machine tools.",
      stats: [
        {
          key: "universities",
          value: "21",
          label: "Top 25 universities",
          accent: "brand",
        },
        {
          key: "builder",
          value: "#1",
          label: "US machine builder",
          accent: "foreground",
        },
      ],
    },
  },
  networkStats: {
    items: [
      {
        key: "europe-centers",
        value: "102",
        label: "Training center in Europe",
        accent: "brand",
      },
      {
        key: "europe-countries",
        value: "28",
        label: "European countries",
        accent: "brand",
      },
      {
        key: "world-centers",
        value: "150",
        label: "Centers around the world",
        accent: "brand",
      },
    ],
  },
  standards: {
    watermark: "IMP",
    eyebrow: "02 — Global standards",
    titleLine1: "Standards of elite",
    titleLine2: "universities.",
    paragraphs: [
      "Through IMP Academy's partnership with HTEC, our programs align with curricula and practices used by leading technical institutions internationally.",
      "Students benefit from shared standards, recognized credentials, and education that carries weight with employers across Kosovo, the region, and global manufacturing networks.",
    ],
    cta: "Learn more",
  },
};
