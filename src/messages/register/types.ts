export type RegisterLearningOption = {
  value: string;
  label: string;
};

export type RegisterMessages = {
  header: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    intro: string;
  };
  sidebar: {
    contact: {
      label: string;
      phoneDisplay: string;
      phoneHref: string;
    };
    course: {
      label: string;
      price: string;
      title: string;
      paymentNote: string;
    };
    social: {
      label: string;
      facebook: string;
      instagram: string;
      facebookHref: string;
      instagramHref: string;
    };
  };
  form: {
    fullName: { label: string; placeholder: string };
    email: { label: string; placeholder: string };
    phone: { label: string; placeholder: string };
    residence: { label: string; placeholder: string };
    preferredDate: { label: string; placeholder: string };
    learningType: { label: string; options: RegisterLearningOption[] };
    message: { label: string; placeholder: string };
    submit: string;
    submitting: string;
    success: string;
    error: string;
    subject: string;
  };
};
