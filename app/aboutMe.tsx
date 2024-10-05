import { Divider, Typography } from "@mui/material";
import { skills } from "./util/util";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";

export default function AboutMe() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <div ref={ref} className="bg-[#FAFAFA] pb-8">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 0 },
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col justify-center items-center w-full">
          <div
            id="about-me"
            className="flex flex-row w-3/4 items-center justify-around h-full"
          >
            <div className="basis-3/4">
              <Typography
                className="font-sans py-8 text-[#0a1128]"
                variant="h3"
                align="left"
              >
                About Me
              </Typography>
              <Typography
                className="text-[#0a1128]"
                variant="body1"
                align="left"
              >
                Hi, I’m Dylan, a full-stack software engineer based in Austin,
                TX, with a passion for building intuitive, user-centric digital
                products. My approach to development is rooted in empathy,
                ensuring that every design and feature considers the user’s
                needs for seamless experiences. I focus on crafting scalable,
                accessible solutions that grow with users while maintaining
                long-term usability and performance.
              </Typography>
              <Typography
                className="pt-4 text-[#0a1128]"
                variant="body1"
                align="left"
              >
                Beyond my technical career, I am deeply involved in the
                competitive esports scene, particularly in Super Smash Bros.
                Ultimate. As the founder of
                <a
                  className="text-[#f266f2] ml-1 underline"
                  target="_blank"
                  href="https://www.majestygaming.gg/"
                >
                  Majesty Gaming
                </a>
                , a nonprofit organization dedicated to empowering women and
                nonbinary players, I’ve spearheaded initiatives to create safer,
                more inclusive spaces in the gaming community. I also organize
                and participate in tournaments, including the Queens Bracket, a
                traveling tournament series designed exclusively for
                marginalized genders.
              </Typography>
            </div>
            <div className="basis-1/4 pl-4">
              <img className="rounded-full" src="/Images/profilePic.png" />
            </div>
          </div>
        </div>
        <Divider className="pt-8" variant="middle" />
        <div className="w-3/4 mx-auto justify-center items-center pt-8">
          <Typography className="text-[#0a1128] pb-4" variant="h4">
            Technical Skills
          </Typography>
          <div className="grid grid-rows-4 grid-flow-col justify-items-start">
            {skills.map((skill, key) => (
              <div
                key={key}
                className="flex flex-row items-center space-x-4 invert"
              >
                <div>{skill.icon}</div>
                {skill.name && (
                  <Typography variant="body1">{skill.name}</Typography>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
