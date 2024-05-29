import { Typography } from "@mui/material";
import ExperienceCard from "./experienceCard";
import { experience } from "./util";

export default function Experience() {
  return (
    <div id="experience" className="bg-[#e0f2fe]">
      <Typography
        align="left"
        className="py-8 pl-12 text-cyan-800"
        variant="h3"
      >
        Experience
      </Typography>
      <div className="flex flex-row-reverse">
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
    </div>
  );
}
