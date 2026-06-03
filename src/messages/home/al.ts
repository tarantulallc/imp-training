import type { HomeMessages } from "./types";

export const homeAl: HomeMessages = {
  hero: {
    line1: {
      before: "Fillo ",
      highlight: "të mësosh ",
      after: "dhe",
    },
    line2: {
      before: "Përcakto ",
      highlight: "të ardhmen.",
    },
    cta: "Regjistrohu tani",
    imageAlt: "Makineri CNC në punëtori të IMP Training",
  },
  intro: {
    eyebrow: "Çfarë është IMP Training?",
    titleLine1: "Edukim",
    titleLine2: "i brezit të",
    titleLine3: "ri.",
    partnerTagline:
      "Partneri zyrtar i parë në Kosovë dhe Ballkan",
    paragraphs: [
      "IMP Training u themelua nga IMP në 2023, me qëllim të rritjes së numrit të personave të kualifikuar për të përmbushur nevojën kritike në industrinë e prodhimit.",
      "Misioni ynë është të krijojmë një hapësirë bashkëpunuese ku zhvillojmë dhe shpërndajmë metodat më të mira edukative për CNC dhe teknologjitë e tjera të prodhimit.",
    ],
  },
  academy: {
    videoLabel: "Inaugurimi",
    placeholderAriaLabel: "Mbajtës video — inaugurimi",
    title: "IMP Academy",
    cta: "Shiko më shumë",
    description:
      "Në këtë video mund të shihni inaugurimin e qendrës më të re të trajnimit në Kosovë. Gjatë eventit ishin të pranishëm kryetari i Gjakovës, Ardian Gjini, dhe ambasadori amerikan, Jeffrey Hovenier.",
  },
  currentTraining: {
    eyebrow: "Trajnimi aktual",
    titleLine1: "Bazat e operimit",
    titleLine2: "CNC",
    level: "Niveli një — Intensiv",
    description:
      "Program i certifikuar që mbulon bazat e operimit, sigurisë dhe mirëmbajtjes së makinave Haas CNC.",
    stats: [
      { key: "duration", label: "Kohëzgjatja", value: "4 javë" },
      { key: "age", label: "Mosha", value: "18+" },
      { key: "intensity", label: "Intensiteti", value: "Çdo ditë" },
    ],
    cta: "Shiko më shumë",
    imageAlt: "Trajnuar në makinë Haas CNC në punëtori të IMP Training",
  },
  highlights: {
    items: [
      {
        key: "inauguration",
        title: "Qendra IMP Training u inaugurua në Kosovë",
        excerpt:
          "Qendra më e re e trajnimit me fokus teknologjik Haas HTEC në rajon hap dyert në Gjakovë, duke sjellë arsim CNC sipas standardeve të industrisë në Kosovë dhe Ballkan.",
      },
      {
        key: "certified",
        title: "Rreth trajnimit të certifikuar",
        excerpt:
          "Synojmë të rrisim numrin e personave të kualifikuar në industrinë e prodhimit përmes programeve të strukturuara dhe të certifikuara, të harmonizuara me nevojat reale të prodhimit.",
      },
      {
        key: "htec",
        title: "Haas Technical Education Community",
        excerpt:
          "HTEC është një program partneriteti mbarëbotëror i themeluar nga Haas Automation për të mbështetur arsimin teknik me teknologji moderne CNC dhe kurrikula të provuara.",
      },
    ],
  },
  programs: {
    eyebrow: "IMP Academy",
    title: "Programe të ndërtuara për prodhim real.",
    description:
      "Kurse të strukturuara për frezim CNC, tornim, inspektim cilësie dhe rrjedha prodhimi — të dizajnuara dhe dorëzuara nga praktikantë, jo teoretikë.",
    guarantee: "Mësoni çfarë kërkon prodhimi në praktikë.",
    cards: [
      {
        titleLines: ["Bazat", "CNC"],
        description:
          "Konfigurim makine, mjete, offset-e dhe operim i sigurt në pajisje CNC 3- dhe 4-akshe të përdorura çdo ditë në IMP.",
        imageAlt: "Trajnim frezimi CNC",
      },
      {
        titleLines: ["Tornim &", "Lathe"],
        description:
          "Programim dhe operim i tornave CNC — nga tornimi bazë deri te komponentët me shumë veçori dhe teknikat e prodhimit.",
        imageAlt: "Trajnim torni CNC",
      },
      {
        titleLines: ["Cilësia &", "Rrjedha"],
        description:
          "Metoda inspektimi, dokumentacion dhe rrjedha prodhimi të harmonizuara me praktikat e cilësisë ISO.",
        imageAlt: "Trajnim kontrolli cilësie",
      },
    ],
  },
  advantages: {
    panels: [
      {
        title: "Mjedis Live",
        lead: "Trajnoheni ku prodhohen pjesët.",
        body: [
          "Ndryshe nga kurset vetëm në klasë, IMP Training zhvillohet brenda një objekti prodhimi preciz me 17 makina CNC dhe 30+ staf të kualifikuar.",
          "Shihni tolerancat, materialet dhe afatet reale — kontekstin që librat nuk mund ta riprodhojnë.",
        ],
      },
      {
        title: "Instruktorë Ekspertë",
        lead: "Mësim nga ata që drejtojnë prodhimin.",
        body: [
          "Çdo modul udhëhiqet nga inxhinierë dhe makineristë me vite përvojë praktike në IMP Parts.",
          "Mësoni shkurtimet, kurthet dhe standardet që kanë rëndësi në prodhim.",
        ],
      },
      {
        title: "Rrugë Fleksibile",
        lead: "Nga bazat te aftësitë e avancuara.",
        body: [
          "Nxënës individualë, praktikantë dhe ekipe korporative mund të ndjekin rrugë të personalizuara — bazë, specializim ose përmirësim ekipi.",
          "Programet përshtaten me nivelin tuaj fillestar dhe objektivat e prodhimit.",
        ],
      },
      {
        title: "Lidhje me Industrinë",
        lead: "Rrugë direkte drejt karrierës në prodhim.",
        body: [
          "IMP Training mbështetet nga rrjeti i IMP Parts në aeronautikë, automatizim, inxhinieri civile dhe sektorë industriale.",
          "Diplomuarët fitojnë kredenciale dhe kontakte të vlerësuara nga punëdhënësit në Kosovë dhe rajon.",
        ],
      },
      {
        title: "Standarde Cilësie",
        lead: "Praktika në linjë me ISO që nga dita e parë.",
        body: [
          "Kontrolli i cilësisë, dokumentacioni dhe disiplina e procesit janë të përfshira në çdo kurs — si ekselenca e akredituar e prodhimit të IMP Parts.",
          "Largoni me zakone që plotësojnë standardet ndërkombëtare të prodhimit.",
        ],
      },
    ],
    swipeLabel: "Rrëshqit për të eksploruar",
    prevLabel: "Paneli i mëparshëm",
    nextLabel: "Paneli tjetër",
  },
  location: {
    eyebrow: "Na Vizitoni",
    title: "Ku të na gjeni.",
    descriptionSuffix:
      "Vizitoni objektin tonë dhe diskutoni opsionet e regjistrimit për ekipin ose karrierën tuaj.",
    openInMaps: "Hape në hartë",
    mapTitle: "Vendndodhja e IMP Training në OpenStreetMap",
  },
};
