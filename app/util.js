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
import { RiTailwindCssFill } from "react-icons/ri";

export const skills = [
  { id: 1, icon: <MdHtml size="3rem" /> },
  { id: 18, icon: <MdCss size="3rem" /> },
  { id: 4, icon: <MdJavascript size="3rem" /> },
  { id: 13, icon: <SiMysql size="3rem" /> },
  { id: 5, name: "React", icon: <FaReact size="2rem" /> },
  {
    id: 10,
    name: "Apollo Client/Server",
    icon: <SiApollographql size="2rem" />,
  },
  { id: 3, name: "Kotlin", icon: <SiKotlin size="2rem" /> },
  { id: 11, name: "GraphQL", icon: <GrGraphQl size="2rem" /> },
  { id: 3, name: "Tailwind", icon: <RiTailwindCssFill size="2rem" /> },
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
      "Initiated and executed iterative feature enhancements; expanded product reach by 50%, ensured robust security protocols, and improved system scalability and reliability, resulting in a 25% increase in user retention",
      "Collaborated and communicated closely with product and design to ensure the highest quality and best customer experiences delivered",
      "Facilitated cross-functional meetings on architecture, product, and design within an agile framework; enhanced project delivery timelines by 15% and improved product quality by 30%",
      "Drove collaborative engineering initiatives while maintaining clear, documented, testable, and high-quality code",
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
      "Engineered and launched end-to-end full-stack features for a startup space, boosting user engagement by 40% and reducing page load times by 50%",
      "Interfaced and brainstormed with users daily for consistent feedback followed by iterative improvements for the application with minimal buzzwords",
      "Tasked with the complete development and implementation of user-facing features, ensuring a well-crafted interface and design.",
      "Crafted high-fidelity mock-ups for 10+ new app features using Figma and Adobe XD which accelerated the development timeline by 20%",
    ],
    companyLogo: "/deepRiskLogo.png",
  },
  {
    id: 3,
    company: "USAA",
    location: "Dallas, TX",
    position: "Software Engineer Intern",
    dates: "May 2019 - Aug 2019",
    jobDetails: [
      "Worked with a team of four interns to participate in code reviews, providing constructive feedback and suggestions to enhance overall code quality.",
      "Actively engaged in ongoing learning and skill development, staying updated on best practices and emerging technologies in Java development.",
    ],
    companyLogo: "/usaaLogo.jpg",
  },
];
