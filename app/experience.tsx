import { Typography } from "@mui/material";
import ExperienceCard from "./experienceCard";
import { gamingExperience, technicalExperience } from "./util/util";
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
    <div id="experience">
      {/* Technical Experience Section */}
      <div className="flex flex-col items-center justify-center w-full pb-8 bg-[#0a1128]">
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
            Technical Experience
          </Typography>

          <div className="flex flex-col w-full items-center justify-center space-y-4">
            {technicalExperience.map((job, key) => (
              <motion.div
                key={key}
                style={{ backgroundColor: "#293252" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ExperienceCard
                  company={job.company}
                  position={job.position}
                  date={job.dates}
                  location={job.location}
                  jobDetails={job.jobDetails}
                  companyLogo={job.companyLogo}
                  bgColor={"#293252"}
                  textColor={"#FAFAFA"}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Gaming & Event Experience Section */}
      <div className="flex flex-col items-center justify-center w-full pb-8 bg-[#FAFAFA]">
        <Typography
          align="center"
          className="font-sans py-8 text-[#293252]"
          variant="h3"
        >
          Gaming & Event Experience
        </Typography>
        <div className="flex flex-col w-full items-center justify-center space-y-4">
          {gamingExperience.map((job, key) => {
            if (!job) return null;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-2/3 mx-auto"
              >
                <ExperienceCard
                  company={job.company}
                  position={job.position}
                  date={job.dates}
                  location={job.location}
                  jobDetails={job.jobDetails}
                  companyLogo={job.companyLogo}
                  bgColor={"#f5f2f2"}
                  textColor={"#0a1128"}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
