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
  bgColor,
  textColor,
}: {
  company: string;
  position: string;
  date: string;
  location: string;
  jobDetails: string[];
  companyLogo: string;
  bgColor: string;
  textColor: string;
}) {
  return (
    <Card className="bg-opacity-50" style={{ backgroundColor: bgColor }}>
      <CardContent>
        <Box display="flex" alignItems="center" mb={1}>
          <Avatar
            variant="square"
            src={companyLogo}
            sx={{ width: 60, height: 60, mr: 2 }}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              style={{ color: textColor }}
              variant="subtitle1"
              color="textSecondary"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>{company}</span>
              <span>{date}</span>
            </Typography>
            <Typography
              style={{ color: textColor }}
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
            <ListItem key={key} style={{ color: textColor }}>
              {jobDetail}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
