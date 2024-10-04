import { Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { skills } from "./util";
export default function AboutMe() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 0 },
        }}
        transition={{ duration: 0.5 }}
      >
        <div
          id="about-me"
          className="flex flex-row items-end justify-around bg-[#FAFAFA] px-8 h-full"
        >
          <div className="basis-5/6">
            <Typography
              className="font-sans py-8 text-[#0a1128]"
              variant="h3"
              align="left"
            >
              About Me
            </Typography>
            <Typography className="text-[#0a1128]" variant="body1" align="left">
              Hi, I’m Dylan, a full-stack software engineer based in Austin, TX,
              with a passion for building intuitive, user-centric digital
              products. My approach to development is rooted in empathy,
              ensuring that every design and feature considers the user’s needs
              for seamless experiences. I focus on crafting scalable, accessible
              solutions that grow with users while maintaining long-term
              usability and performance.
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
              more inclusive spaces in the gaming community. I also organize and
              participate in tournaments, including the Queens Bracket, a
              traveling tournament series designed exclusively for marginalized
              genders.
            </Typography>
          </div>
          <div className="basis-1/6 pl-2">
            <img className="rounded-full" src="/profilePic.png" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
