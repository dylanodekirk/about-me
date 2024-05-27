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
