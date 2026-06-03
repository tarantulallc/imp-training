export type AboutPillar = {
  key: string;
  title: string;
  description: string;
};

export type AboutMessages = {
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    paragraphs: [string, string];
  };
  mission: {
    eyebrow: string;
    title: string;
    columns: [AboutPillar, AboutPillar][];
  };
  partner: {
    statement: string;
    logoAlt: string;
  };
};
