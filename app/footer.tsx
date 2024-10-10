import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <div className="flex flex-row justify-center items-center bg-[#0a1128] py-4">
      <IconButton
        component="a"
        href="https://www.linkedin.com/in/dylan-odekirk-14a99299/"
        sx={{
          color: "#FAFAFA",
          mx: 2,
          p: 2,
          "&:hover": {
            color: "#0077B5",
          },
        }}
        target="_blank"
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://github.com/dylanodekirk"
        sx={{
          color: "#FAFAFA",
          mx: 2,
          p: 2,
          "&:hover": {
            color: "#0077B5",
          },
        }}
        target="_blank"
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        component="a"
        href="mailto:dodekirk7@gmail.com"
        sx={{
          color: "#FAFAFA",
          mx: 2,
          p: 2,
          "&:hover": {
            color: "#0077B5",
          },
        }}
        target="_blank"
      >
        <EmailIcon />
      </IconButton>
    </div>
  );
}
