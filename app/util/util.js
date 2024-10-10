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

export const technicalExperience = [
  {
    id: 1,
    company: "Toast",
    location: "Remote",
    position: "Full Stack Software Engineer",
    dates: "October 2021 - May 2024 • 2 yrs 9 mos",
    jobDetails: [
      "Initiated and executed iterative feature enhancements; expanded product reach by 50%, ensured robust security protocols, and improved system scalability and reliability, resulting in a 25% increase in user retention",
      "Collaborated and communicated closely with product and design to ensure the highest quality and best customer experiences delivered",
      "Facilitated cross-functional meetings on architecture, product, and design within an agile framework; enhanced project delivery timelines by 15% and improved product quality by 30%",
      "Drove collaborative engineering initiatives while maintaining clear, documented, testable, and high-quality code",
    ],
    companyLogo: "/Images/logos/toastLogo.png",
  },
  {
    id: 2,
    company: "Deep Risk",
    location: "Dallas, TX",
    position: "Software Engineer and Designer",
    dates: "November 2020 - October 2021 • 11 mos",
    jobDetails: [
      "Engineered and launched end-to-end full-stack features for a startup space, boosting user engagement by 40% and reducing page load times by 50%",
      "Interfaced and brainstormed with users daily for consistent feedback followed by iterative improvements for the application with minimal buzzwords",
      "Tasked with the complete development and implementation of user-facing features, ensuring a well-crafted interface and design.",
      "Crafted high-fidelity mock-ups for 10+ new app features using Figma and Adobe XD which accelerated the development timeline by 20%",
    ],
    companyLogo: "/Images/logos/deepRiskLogo.png",
  },
  {
    id: 3,
    company: "USAA",
    location: "Plano, TX",
    position: "Software Developer I",
    dates: "December 2019 - October 2020 • 11 mos",
    jobDetails: [
      "Practiced true Agile methodology with a Scrum Master, participating in daily standups, sprint planning, and retrospectives.",
      "Integrated and maintained backend APIs, ensuring secure, scalable, and efficient performance.",
      "Built responsive front-end interfaces with React and JavaScript, ensuring smooth user experiences.",
      "Focused on continuous improvement through regular code reviews and following best practices for both front-end and back-end development.",
    ],
    companyLogo: "/Images/logos/usaaLogo.jpg",
  },
  {
    id: 4,
    company: "USAA",
    location: "Plano, TX",
    position: "Software Engineer Intern",
    dates: "June 2019 - Aug 2019 • 3 mos",
    jobDetails: [
      "Worked with a team of four interns to participate in code reviews, providing constructive feedback and suggestions to enhance overall code quality.",
      "Actively engaged in ongoing learning and skill development, staying updated on best practices and emerging technologies in Java development.",
    ],
    companyLogo: "/Images/logos/usaaLogo.jpg",
  },
];

export const gamingExperience = [
  {
    id: 1,
    company: "Majesty Gaming",
    position: "Founder",
    location: "",
    dates: "2023 - Current",
    jobDetails: [
      "Majesty Gaming is a nonprofit organization dedicated to providing community awareness and empowerment opportunities for women and nonbinary eSports competitors. Currently, we are primarily involved in competitive Super Smash Brothers, but have intentions to expand to other games in the near future.",
      "Orchestrats multiple esports events with 100+ participants, including managing brackets, scheduling, and logistics for venue setup. Coordinated venue arrangements, ensuring optimal player and audience experience, and handling details such as AV setup and catering.",
      "Implements marketing campaigns to promote events and initiatives, effectively reaching target audiences and increasing participation.",
      "Directing a nationwide team of 6 players, providing leadership, coaching",
    ],
    companyLogo: "./Images/tournamentLogos/majestyLogo.png",
  },
  {
    id: 2,
    company: "Queen's Brackets",
    position: "Bracket Runner",
    location: "",
    dates: "2023- Current",
    jobDetails: [
      "Majesty Gaming organizes and runs Queen’s Brackets, which are brackets open to women and non-binary players only. Women and nonbinary players in esports frequently note that their male competition treats them in ways that feel cold, demeaning, or sexualized, so Queen’s Brackets offer spaces free from such discomforts and microaggressions. They are places where players can focus on competition in an atmosphere of shared community rather than feeling ostracized and objectified solely based on their identities. These brackets are hosted at Regionals (100-200 entrants total) and Majors (500+ entrants total). ",
    ],
    companyLogo: "./Images/tournamentLogos/queensBracket.png",
  },
  {
    id: 3,
    company: "Rise n Grind",
    position: "Staff",
    location: "Waco, TX",
    dates: "October 12 - October 14, 2023",
    jobDetails: [
      "Managed and ran tournament pools with 40+ participants, ensuring smooth progression under tight time constraints.",
      "Coordinated with stream runners to align matches for live broadcast, maintaining a seamless viewing experience for the audience.",
      "Navigated high-pressure situations, resolving conflicts between players and managing time-sensitive decisions efficiently.",
      "Collaborated with other staff members to ensure tournament rules were enforced and all players adhered to the schedule.",
    ],
    companyLogo: "./Images/tournamentLogos/riseNGrindLogo.png",
  },
  {
    id: 3,
    company: "Low Tide City",
    position: "Staff",
    location: "Leander, TX",
    dates: "May 10 - May 12, 2023",
    jobDetails: [
      "Adapted to changes in real-time, including delays, technical issues, and player no-shows, while keeping the tournament running smoothly.",
      "Coordinated with stream runners to align matches for live broadcast, maintaining a seamless viewing experience for the audience.",
      "Navigated high-pressure situations, resolving conflicts between players and managing time-sensitive decisions efficiently.",
      "Collaborated with other staff members to ensure tournament rules were enforced and all players adhered to the schedule.",
    ],
    companyLogo: "./Images/tournamentLogos/lowTideCityLogo.png",
  },
  ,
  {
    id: 4,
    company: "Dream Con",
    position: "Gaming Hall Staff",
    location: "Austin, TX",
    dates: "July 26 - July 28, 2024",
    jobDetails: [
      "Supervised and administered tournament pools, handling large brackets with high pressure and strict time constraints.",
      "Actively monitored the gaming hall during shifts, ensuring equipment security and maintaining a well-organized event space.",
      "Collaborated with other staff to provide technical support and resolve issues quickly during live events.",
      "Set up and took down Nintendo Switches, PS5s, and PS4s for various high-profile fighting game tournaments.",
      "Managed controller rentals with consistent high-volume demand, ensuring smooth operations and customer satisfaction.",
    ],
    companyLogo: "./Images/tournamentLogos/dreamConLogo.avif",
  },
];
