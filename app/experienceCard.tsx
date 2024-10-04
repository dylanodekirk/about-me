import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
} from "@mui/material";

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
    <Card className="bg-[#293252] bg-opacity-50">
      <CardContent>
        <Box display="flex" alignItems="center" mb={1}>
          <Avatar
            variant="square"
            src={companyLogo}
            sx={{ width: 60, height: 60, mr: 2 }}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              className="text-[#FAFAFA]"
              variant="subtitle1"
              color="textSecondary"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>{company}</span>
              <span>{date}</span>
            </Typography>
            <Typography
              className="text-[#FAFAFA]"
              variant="h5"
              component="div"
              mt={0.5}
            >
              {position}
            </Typography>
          </Box>
        </Box>

        <List sx={{ listStyleType: "disc" }}>
          {jobDetails.map((jobDetail, key) => (
            <ListItem key={key} className="text-[#FAFAFA]">
              {jobDetail}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
