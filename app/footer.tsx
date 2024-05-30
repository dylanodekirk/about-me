import { IconButton, Link, Typography } from "@mui/material";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <div className="flex flex-row justify-evenly items-center bg-[#164e63]">
      <Image
        className="invert saturate-200 hue-rotate-90"
        src="/logo.png"
        alt="self-logo"
        width="400"
        height="400"
      />
    </div>
  );
}
