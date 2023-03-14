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
    hostImgSrc: require("../../resources/schedule-hosts/day1/speaker-1.png"),
    hostName: "John Doe",
    hostDescription: "John is a developer at XYZ Corp.",
    name: "Introduction to TypeScript",
    timeAndLocation: "9:00 AM - Room A",
    description:
      "Learn the basics of TypeScript and how it can improve your code.",
  },
  {
    hostImgSrc: require("../../resources/schedule-hosts/day1/speaker-2.png"),
    hostName: "Jane Smith",
    hostDescription: "Jane is a software engineer at ABC Corp.",
    name: "Advanced React Techniques",
    timeAndLocation: "1:00 PM - Room B",
    description:
      "Explore some of the more advanced features of React and how they can be used to build better user interfaces.",
  },
  {
    hostImgSrc: require("../../resources/schedule-hosts/day1/speaker-3.png"),
    hostName: "Bob Johnson",
    hostDescription: "Bob is a full-stack developer and consultant.",
    name: "Building Serverless Applications with AWS Lambda",
    timeAndLocation: "3:00 PM - Room C",
    description:
      "Learn how to build and deploy serverless applications using AWS Lambda and other cloud services.",
  },
];

const day2: ScheduleItem[] = [
  {
    hostImgSrc: require("../../resources/schedule-hosts/day2/speaker-1.png"),
    hostName: "Alice Lee",
    hostDescription: "Alice is a front-end developer at XYZ Corp.",
    name: "Modern CSS Layouts",
    timeAndLocation: "10:00 AM - Room A",
    description:
      "Discover modern CSS layout techniques that will help you create complex designs with ease.",
  },
  {
    hostImgSrc: require("../../resources/schedule-hosts/day2/speaker-2.png"),
    hostName: "Bob Smith",
    hostDescription: "Bob is a full-stack developer at ABC Corp.",
    name: "Building Scalable Web Applications",
    timeAndLocation: "1:00 PM - Room B",
    description:
      "Learn how to design and implement scalable web applications that can handle high traffic and user demand.",
  },
  {
    hostImgSrc: require("../../resources/schedule-hosts/day2/speaker-3.png"),
    hostName: "Charlie Brown",
    hostDescription:
      "Charlie is a software engineer and open-source contributor.",
    name: "Contributing to Open Source",
    timeAndLocation: "3:00 PM - Room C",
    description:
      "Get involved in the open-source community and learn how you can contribute to projects that interest you.",
  },
];

const day3: ScheduleItem[] = [
  {
    hostImgSrc: require("../../resources/schedule-hosts/day3/speaker-1.png"),
    hostName: "Eva Chen",
    hostDescription: "Eva is a software engineer at XYZ Corp.",
    name: "Writing Clean Code",
    timeAndLocation: "9:00 AM - Room A",
    description:
      "Learn how to write clean and maintainable code that is easy to read and understand.",
  },
  {
    hostImgSrc: require("../../resources/schedule-hosts/day3/speaker-2.png"),
    hostName: "Frank Lee",
    hostDescription: "Frank is a full-stack developer and tech enthusiast.",
    name: "The Future of Web Development",
    timeAndLocation: "1:00 PM - Room B",
    description:
      "Explore the latest trends and technologies in web development and discover what the future holds for the industry.",
  },
  {
    hostImgSrc: require("../../resources/schedule-hosts/day3/speaker-3.png"),
    hostName: "Grace Kim",
    hostDescription: "Grace is a front-end developer and UI/UX designer.",
    name: "Designing Responsive Web Applications",
    timeAndLocation: "3:00 PM - Room C",
    description:
      "Learn how to design responsive web applications that adapt to different screen sizes and devices.",
  },
];

export const scheduleData = [day1, day2, day3];
