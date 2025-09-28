export type SiteConfig = {
  title: string;
  description: string;
  email?: string;
  social: { twitter?: string; github?: string };
  placeAndTime: { en: string; de: string };
  coderDojo: {
    headerLogo?: string;
    footerLogo?: string;
    placeAndTime: { en: string; de: string };
    videos: { en: string; de: string; file: string }[];
    scratchOfTheWeek: { scratchProjectId: string; title?: string; date?: string }[];
  };
};

export const siteConfig: SiteConfig = {
  title: "CoderDojo Zürich",
  description: "CoderDojo Zürich: A free, volunteer-led programming club for young people in Zurich.",
  email: "",
  social: {
    twitter: "CoderDojoZh",
    github: "CoderDojoZh",
  },
  placeAndTime: {
    en: "Sunday, 15:00 – 17:00<br>\nLimmatplatz 183<br>\nZurich",
    de: "Sonntag, 15:00 – 17:00<br>\nLimmatplatz 183<br>\nZürich",
  },
  coderDojo: {
    headerLogo: "/assets/images/coderdojo-zh-small.png",
    footerLogo: "/assets/images/coderdojo-zh-bended-02.svg",
    placeAndTime: {
      en: "Sunday, 15:00 – 17:00<br>\nLimmatplatz 183<br>\nZurich",
      de: "Sonntag, 15:00 – 17:00<br>\nLimmatplatz 183<br>\nZürich",
    },
    videos: [
      {
        en: "Coderdojo 2017 – Environment Protection Challenge",
        de: "Coderdojo 2017 – Umweltschutz Challenge",
        file: "coderdojo-2017-environment-protection-challenge.mp4",
      },
      {
        en: "Coderdojo 2018 – Safety in the move Challenge",
        de: "Coderdojo 2018 – Sicher unterwegs Challenge",
        file: "coderdojo-2018-safety-in-the-move-challenge.mp4",
      },
      {
        en: "Coderdojo 2019 Cyberprotection Challenge",
        de: "Coderdojo 2019 Cyberprotection Challenge",
        file: "coderdojo-2019-cyberprotection-challenge.mp4",
      },
    ],
    scratchOfTheWeek: [
      { scratchProjectId: "282753934" },
    ],
  },
};

export default siteConfig;
