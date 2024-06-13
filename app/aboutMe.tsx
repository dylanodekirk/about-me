import { Typography } from "@mui/material";
import { skills } from "./util";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div id="about-me" className="flex flex-row justify-around bg-[#164e63]">
      <div className="basis-1/3 pt-8 pl-8">
        <Image
          className="rounded-lg drop-shadow-md"
          src="/bluebonnets.png"
          alt="decorative"
          width="500"
          height="500"
        />
      </div>
      <div className="basis-2/3 px-20">
        <Typography className="font-sans py-8" variant="h3" align="left">
          About Me
        </Typography>
        <Typography variant="body1" align="left">
          My name is Dylan, and I'm a full stack software engineer based out of
          Austin, TX. I firmly believe in an empathy-first approach in design
          and development for the best user and customer experience, as
          understanding the user's needs and experiences is paramount to
          crafting exceptional digital solutions. I work towards creating
          intuitive, user-friendly, and accessible products while considering
          scalability and reusability for long-term growth. For a full list of
          my skills, please download by resume
          <a
            className="text-purple-300 ml-1 underline"
            target="_blank"
            href="./Dylan_Odekirk.pdf"
          >
            here
          </a>
          .
        </Typography>
        <div className="grid grid-rows-4 grid-flow-col gap-2 py-8">
          {skills.map((skill, key) => (
            <div key={key} className="flex flex-row items-center space-x-4">
              <div>{skill.icon}</div>
              {skill.name && (
                <Typography variant="body1">{skill.name}</Typography>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
