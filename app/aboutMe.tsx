import { Typography } from "@mui/material";
import { skills } from "./util";

export default function AboutMe() {
  return (
    <div id="about-me" className="flex flex-row justify-around bg-[#164e63]">
      <div className="basis-2/3">
        <Typography className="font-sans py-8" variant="h3" align="left">
          About Me
        </Typography>
        <Typography variant="body1" align="left">
          Hi, I’m Dylan, a full-stack software engineer based in Austin, TX,
          with a passion for building intuitive, user-centric digital products.
          My approach to development is rooted in empathy, ensuring that every
          design and feature considers the user’s needs for seamless
          experiences. I focus on crafting scalable, accessible solutions that
          grow with users while maintaining long-term usability and performance.
        </Typography>
        <Typography className="pt-4" variant="body1" align="left">
          Beyond my technical career, I am deeply involved in the competitive
          esports scene, particularly in Super Smash Bros. Ultimate. As the
          founder of
          <a
            className="text-purple-300 ml-1 underline"
            target="_blank"
            href="https://www.majestygaming.gg/"
          >
            Majesty Gaming
          </a>
          , a nonprofit organization dedicated to empowering women and nonbinary
          players, I’ve spearheaded initiatives to create safer, more inclusive
          spaces in the gaming community. I also organize and participate in
          tournaments, including the Queens Bracket, a traveling tournament
          series designed exclusively for marginalized genders.
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
