import { Typography } from "@mui/material";
import ExperienceCard from "./experienceCard";
import { experience } from "./util";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";

export default function Experience() {
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
    <div className="flex flex-col items-center justify-center w-full bg-[#0a1128] pb-8">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 0 },
        }}
        transition={{ duration: 0.5 }}
        className="w-2/3 mx-auto"
      >
        <Typography
          align="center"
          className="font-sans py-8 text-[#FAFAFA]"
          variant="h3"
        >
          Experience
        </Typography>

        <div className="flex flex-col w-full items-center justify-center space-y-4">
          {experience.map((job, key) => (
            <ExperienceCard
              key={key}
              company={job.company}
              position={job.position}
              date={job.dates}
              location={job.location}
              jobDetails={job.jobDetails}
              companyLogo={job.companyLogo}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
