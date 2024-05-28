import { Box, AppBar, Toolbar, Button, Typography } from "@mui/material";
import Image from "next/image";
import "./homePage.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function LandingPage() {
  return (
    <main>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar sx={{ bgcolor: "#e0f2fe" }} position="static">
            <Toolbar>
              <Image
                className="invert"
                src="/logo.png"
                alt="logo"
                width={75}
                height={100}
              />
              <Button className="text-purple-400 ">
                <a href="#about-me"> About Me </a>
              </Button>
              <Button className="text-purple-400">
                <a href="#experience"> Experience </a>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <div className="flex justify-around flex-row h-128 bg-[#e0f2fe]">
        <div>
          <div className="flex justify-start pt-12 pl-12">
            <div className="rounded-full drop-shadow-lg bg-[#164e63]">
              <Image
                className="drop-shadow-lg"
                src="/file.png"
                alt="Profile picture"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col justify-center">
            <Typography variant="h4" color="#155e75">
              Hello, Im
            </Typography>
            <Typography variant="h2" color="#155e75">
              Dylan Odekirk
            </Typography>
            <Typography variant="h4" color="#c084fc">
              Full Stack Software Engineer
            </Typography>
          </div>
          <div className="pt-6">
            <Button
              className="hover:bg-cyan-800"
              sx={{ bgcolor: "#c084fc" }}
              target="_blank"
              variant="contained"
              href="https://www.linkedin.com/in/dylan-odekirk-14a99299/"
            >
              LinkedIn
              <ArrowForwardIosIcon className="pl-2" fontSize="small" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
