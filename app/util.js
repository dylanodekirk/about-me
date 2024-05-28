import { FaReact } from "react-icons/fa";
import { SiApollographql } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { MdHtml } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { MdCss } from "react-icons/md";
import { MdJavascript } from "react-icons/md";

export const skills = [
  { id: 1, icon: <MdHtml size="3rem" /> },
  { id: 18, icon: <MdCss size="3rem" /> },
  { id: 4, icon: <MdJavascript size="3rem" /> },
  { id: 3, name: "Kotlin", icon: <SiKotlin size="2rem" /> },
  { id: 5, name: "React", icon: <FaReact size="2rem" /> },
  {
    id: 10,
    name: "Apollo Client/Server",
    icon: <SiApollographql size="2rem" />,
  },
  { id: 11, name: "GraphQL", icon: <GrGraphQl size="2rem" /> },
  { id: 13, icon: <SiMysql size="3rem" /> },
  { id: 19, name: "Node.js", icon: <FaNodeJs size="2rem" /> },
  { id: 20, name: "MongoDB", icon: <SiMongodb size="2rem" /> },
  { id: 23, name: "GitHub", icon: <FaGithub size="2rem" /> },
];

export const experience = [
  {
    id: 1,
    company: "Toast",
    location: "Remote",
    position: "Full Stack Software Engineer",
    dates: "October 2021 - May 2024",
    jobDetails: [
      "Championed multiple large scale features with iterative approaches while enabling product and consumer expansion while keeping in mind scalability, reliability, security, and performance",
      "Collaborated and communicated closely with product and design to ensure the highest quality and best customer experiences delivered",
      "Participated in architectural, product, and design discussions while following the agile methodology",
      "Drove engineering initiatives while maintaining clear, documented, testable, and high-quality code",
    ],
    companyLogo: "/toastLogo.png",
  },
  {
    id: 2,
    company: "Deep Risk",
    location: "Dallas, TX",
    position: "Software Engineer and Designer",
    dates: "November 2020 - October 2021",
    jobDetails: [
      "Designed, developed, and delivered full-stack features for a start up space",
      "Interfaced and brainstormed with users daily for consistent feedback followed by iterative improvements for the application with minimal buzzwords",
      "Responsible for the full-stack development and implementation of user facing features with a well written interface and design",
      "Designed mock-ups for features using Figma and Adobe XD",
    ],
    companyLogo: "/deepRiskLogo.webp",
  },
];
