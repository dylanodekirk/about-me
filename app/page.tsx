import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Image
                className="invert"
                src="/logo.png"
                alt="logo"
                width={75}
                height={100}
              />
              <Button color="inherit">About Me</Button>
              <Button color="inherit">My Skills</Button>
              <Button color="inherit">Experience</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <div className="flex justify-around flex-row h-128 bg-[#f0f9ff]">
        <div>
          <div className="flex justify-start pt-12 pl-12">
            <div className="rounded-full bg-[#155e75]">
              <Image
                src="/file.png"
                alt="Vercel Logo"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-evenly">
          <div className="flex flex-row">
            <Typography variant="h3" color="#075985">
              Hello, I'm
            </Typography>
            <Typography variant="h2" color="#c084fc">
              Dylan Odekirk
            </Typography>
          </div>
          <Typography variant="h4" color="#075985">
            Full Stack Software Engineer
          </Typography>
          <div>
            <Button className="#c084fc" variant="contained">
              Linkedin
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
