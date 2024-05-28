import { Link, Typography } from "@mui/material";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <div className="flex flex-row justify-evenly items-center bg-[#164e63]">
      <div>
        <Typography className="pb-8" align="center" variant="h4">
          Contant
        </Typography>
        <Link
          target="_blank"
          href="#https://www.linkedin.com/in/dylan-odekirk-14a99299/"
        >
          LinkedIn
        </Link>
      </div>
      <Image
        className="invert saturate-200 hue-rotate-90"
        src="/logo.png"
        alt="self-logo"
        width="400"
        height="400"
      />
      <div>
        <Typography className="pb-8" align="center" variant="h4">
          Follow
        </Typography>
        <LinkedInIcon />
      </div>
    </div>
  );
}
