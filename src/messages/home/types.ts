export type AdvantagePanel = {
  title: string;
  lead?: string;
  body: string[];
};

export type ProgramCard = {
  titleLines: string[];
  description: string;
  imageAlt: string;
};

export type HomeHeroMessages = {
  line1: {
    before: string;
    highlight: string;
    after: string;
  };
  line2: {
    before: string;
    highlight: string;
  };
  cta: string;
  imageAlt: string;
};

export type HomeMessages = {
  hero: HomeHeroMessages;
  intro: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    partnerTagline: string;
    paragraphs: [string, string];
  };
  academy: {
    videoLabel: string;
    placeholderAriaLabel: string;
    title: string;
    cta: string;
    description: string;
  };
  currentTraining: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    level: string;
    description: string;
    stats: { key: string; label: string; value: string }[];
    cta: string;
    imageAlt: string;
  };
  highlights: {
    items: { key: string; title: string; excerpt: string }[];
  };
  programs: {
    eyebrow: string;
    title: string;
    description: string;
    guarantee: string;
    cards: ProgramCard[];
  };
  advantages: {
    panels: AdvantagePanel[];
    swipeLabel: string;
    prevLabel: string;
    nextLabel: string;
  };
  location: {
    eyebrow: string;
    title: string;
    descriptionSuffix: string;
    openInMaps: string;
    mapTitle: string;
  };
};
