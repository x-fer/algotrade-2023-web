export type ScheduleItem = {
  hostImgSrc: string;
  hostName: string;
  hostDescription: string;
  name: string;
  timeAndLocation: string;
  description: string;
};

const day1: ScheduleItem[] = [
  {
    hostName: "John Doe",
    hostDescription: "Guy who made Ethereum",
    hostImgSrc: require("../../resources/schedule-hosts/day1/john-doe.jpg"),
    name: "Kako napraviti web stranicu za event",
    timeAndLocation: "FER, prostorija B1, 12.3.2023. u 16:00h",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed pulvinar diam. Fusce quis posuere ligula, eget porttitor lectus.",
  },
  {
    hostName: "John Doe",
    hostDescription: "Guy who made Ethereum",
    hostImgSrc: require("../../resources/schedule-hosts/day1/john-doe.jpg"),
    name: "Kako napraviti web stranicu za event",
    timeAndLocation: "FER, prostorija B1, 12.3.2023. u 16:00h",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed pulvinar diam. Fusce quis posuere ligula, eget porttitor lectus.",
  },
  {
    hostName: "John Doe",
    hostDescription: "Guy who made Ethereum",
    hostImgSrc: require("../../resources/schedule-hosts/day1/john-doe.jpg"),
    name: "Kako napraviti web stranicu za event",
    timeAndLocation: "FER, prostorija B1, 12.3.2023. u 16:00h",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed pulvinar diam. Fusce quis posuere ligula, eget porttitor lectus.",
  },
];

const day2: ScheduleItem[] = [
  {
    hostName: "John Doe",
    hostDescription: "Guy who made Ethereum",
    hostImgSrc: require("../../resources/schedule-hosts/day2/john-doe.jpg"),
    name: "Kako napraviti web stranicu za event",
    timeAndLocation: "FER, prostorija B1, 13.3.2023. u 16:00h",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed pulvinar diam. Fusce quis posuere ligula, eget porttitor lectus.",
  },
  {
    hostName: "John Doe",
    hostDescription: "Guy who made Ethereum",
    hostImgSrc: require("../../resources/schedule-hosts/day2/john-doe.jpg"),
    name: "Kako napraviti web stranicu za event",
    timeAndLocation: "FER, prostorija B1, 13.3.2023. u 16:00h",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed pulvinar diam. Fusce quis posuere ligula, eget porttitor lectus.",
  },
  {
    hostName: "John Doe",
    hostDescription: "Guy who made Ethereum",
    hostImgSrc: require("../../resources/schedule-hosts/day2/john-doe.jpg"),
    name: "Kako napraviti web stranicu za event",
    timeAndLocation: "FER, prostorija B1, 13.3.2023. u 16:00h",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed pulvinar diam. Fusce quis posuere ligula, eget porttitor lectus.",
  },
];

const day3: ScheduleItem[] = [
  {
    hostName: "John Doe",
    hostDescription: "Guy who made Ethereum",
    hostImgSrc: require("../../resources/schedule-hosts/day3/john-doe.jpg"),
    name: "Kako napraviti web stranicu za event",
    timeAndLocation: "FER, prostorija B1, 14.3.2023. u 16:00h",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed pulvinar diam. Fusce quis posuere ligula, eget porttitor lectus.",
  },
  {
    hostName: "John Doe",
    hostDescription: "Guy who made Ethereum",
    hostImgSrc: require("../../resources/schedule-hosts/day3/john-doe.jpg"),
    name: "Kako napraviti web stranicu za event",
    timeAndLocation: "FER, prostorija B1, 14.3.2023. u 16:00h",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed pulvinar diam. Fusce quis posuere ligula, eget porttitor lectus.",
  },
  {
    hostName: "John Doe",
    hostDescription: "Guy who made Ethereum",
    hostImgSrc: require("../../resources/schedule-hosts/day3/john-doe.jpg"),
    name: "Kako napraviti web stranicu za event",
    timeAndLocation: "FER, prostorija B1, 14.3.2023. u 16:00h",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed pulvinar diam. Fusce quis posuere ligula, eget porttitor lectus.",
  },
];

const day4: ScheduleItem[] = [
  {
    hostName: "John Doe",
    hostDescription: "Guy who made Ethereum",
    hostImgSrc: require("../../resources/schedule-hosts/day4/john-doe.jpg"),
    name: "Kako napraviti web stranicu za event",
    timeAndLocation: "FER, prostorija B1, 15.3.2023. u 16:00h",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed pulvinar diam. Fusce quis posuere ligula, eget porttitor lectus.",
  },
  {
    hostName: "John Doe",
    hostDescription: "Guy who made Ethereum",
    hostImgSrc: require("../../resources/schedule-hosts/day4/john-doe.jpg"),
    name: "Kako napraviti web stranicu za event",
    timeAndLocation: "FER, prostorija B1, 15.3.2023. u 16:00h",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed pulvinar diam. Fusce quis posuere ligula, eget porttitor lectus.",
  },
  {
    hostName: "John Doe",
    hostDescription: "Guy who made Ethereum",
    hostImgSrc: require("../../resources/schedule-hosts/day4/john-doe.jpg"),
    name: "Kako napraviti web stranicu za event",
    timeAndLocation: "FER, prostorija B1, 15.3.2023. u 16:00h",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed pulvinar diam. Fusce quis posuere ligula, eget porttitor lectus.",
  },
];

export const scheduleData = [day1, day2, day3, day4];
