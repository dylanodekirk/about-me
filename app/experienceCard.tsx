import { Chip, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";

export default function ExperienceCard({
  company,
  position,
  date,
  location,
  jobDetails,
  companyLogo,
}: {
  company: string;
  position: string;
  date: string;
  location: string;
  jobDetails: string[];
  companyLogo: string;
}) {
  return (
    <div className="justify-around px-12">
      <Image
        className="py-8 grayscale"
        src={companyLogo}
        alt="logo"
        width="150"
        height="75"
      />
      <Typography
        sx={{ fontWeight: "bold" }}
        className="text-cyan-800"
        variant="h6"
      >
        {position}
      </Typography>
      <div className="flex flex-row">
        <Typography className="text-cyan-800 pr-4" variant="subtitle2">
          {date}
        </Typography>
        <Typography
          sx={{ fontStyle: "italic" }}
          className="text-cyan-800"
          variant="subtitle2"
        >
          {location}
        </Typography>
      </div>
      <List sx={{ listStyleType: "disc" }}>
        {jobDetails.map((jobDetail) => (
          <ListItem className="text-cyan-800" sx={{ display: "list-item" }}>
            {jobDetail}
          </ListItem>
        ))}
      </List>
    </div>
  );
}
