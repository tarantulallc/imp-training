export type CncBasicsModule = {
  number: string;
  title: string;
  description: string;
};

export type CncBasicsMessages = {
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    price: string;
    paymentNote: string;
    cta: string;
    imageAlt: string;
  };
  intro: {
    title: string;
    paragraphs: [string, string];
  };
  curriculum: {
    eyebrow: string;
    title: string;
    moduleLabel: string;
    modules: CncBasicsModule[];
  };
  finalCta: {
    title: string;
    lines: [string, string];
    cta: string;
  };
};
