export type HtecStat = {
  key: string;
  value: string;
  label: string;
  accent?: "brand" | "foreground";
};

export type HtecMessages = {
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    description: string;
    imageAlt: string;
  };
  intro: {
    watermark: string;
    eyebrow: string;
    title: string;
    paragraphs: [string, string];
    card: {
      eyebrow: string;
      body: string;
      stats: [HtecStat, HtecStat];
    };
  };
  networkStats: {
    items: [HtecStat, HtecStat, HtecStat];
  };
  standards: {
    watermark: string;
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    paragraphs: [string, string];
    cta: string;
  };
};
