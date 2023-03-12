export type PartnerData = {
  name: string;
  imgSrc: string;
  website: string;
};

export const partnersData: PartnerData[] = [
  // TODO: Dodati prave sponzore
  {
    name: "AVL",
    imgSrc: require("../../resources/partner-logos/avl-logo.png"),
    website: "https://www.avl.com/en",
  },
  {
    name: "Ericsson Nikola Tesla",
    imgSrc: require("../../resources/partner-logos/ericsson-logo.png"),
    website: "https://www.ericsson.hr/",
  },
  {
    name: "FER",
    imgSrc: require("../../resources/partner-logos/fer-logo.png"),
    website: "https://www.fer.unizg.hr/",
  },
  {
    name: "Amazon",
    imgSrc: require("../../resources/partner-logos/amazon-logo.png"),
    website: "https://www.amazon.com/",
  },
  {
    name: "Netflix",
    imgSrc: require("../../resources/partner-logos/netflix-logo.png"),
    website: "https://www.netflix.com/",
  },
  {
    name: "Microsoft",
    imgSrc: require("../../resources/partner-logos/microsoft-logo.png"),
    website: "https://www.microsoft.com/",
  },
  {
    name: "Apple",
    imgSrc: require("../../resources/partner-logos/apple-logo.png"),
    website: "https://www.apple.com/",
  },
];
