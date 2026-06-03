export type InaugurationMessages = {
  breadcrumb: {
    primary: string;
    secondary: string;
  };
  title: {
    highlight: string;
    rest: string;
  };
  meta: {
    date: { label: string; value: string };
    location: { label: string; value: string };
    category: { label: string; value: string };
  };
  sidebar: {
    intro: string;
    partnership: {
      label: string;
      body: string;
    };
  };
  sections: {
    intro: { paragraphs: [string, string] };
    economy: { title: string; paragraphs: [string, string] };
    programs: { title: string; intro: string; items: string[] };
    vision: { title: string; paragraph: string };
  };
};
