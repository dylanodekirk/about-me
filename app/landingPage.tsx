"use client";
import { Box, AppBar, Toolbar, Button, Typography } from "@mui/material";
import "./landingPage.css";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";

export default function LandingPage() {
  const label = { inputProps: { "aria-label": "Switch demo" } };
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
    <main>
      <Box ref={ref} sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#0a1128" }}>
          <Toolbar>
            <Button className="text-[#f266f2]">
              <a href="#home"> Home </a>
            </Button>
            <Button className="text-[#f266f2]">
              <a href="#about-me"> About Me </a>
            </Button>
            <Button className="text-[#f266f2]">
              <a href="#experience"> Experience </a>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="flex flex-row bg-[#0a1128] h-screen items-center pl-12">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center">
              <Typography className="font-serif" variant="h1" color="#FAFAFA">
                Dylan Odekirk.
              </Typography>
              <Typography
                className="font-sans opacity-80 pl-2"
                variant="h5"
                color="#FAFAFA"
              >
                Software Engineer | Esports Organizer | Team Manager | Founder
                of Majesty Gaming
              </Typography>
            </div>
            <div className="pt-6 pl-2 flex flex-row space-x-4">
              <Button
                className="hover:bg-pink-200"
                sx={{ bgcolor: "#f266f2" }}
                target="_blank"
                variant="contained"
                href="https://www.linkedin.com/in/dylan-odekirk-14a99299/"
              >
                LinkedIn
              </Button>
              <Button
                className="text-[#f266f2] hover:bg-pink-200 hover:border-[#f266f2]"
                sx={{ borderColor: "#f266f2", textColor: "#f266f2" }}
                target="_blank"
                variant="outlined"
                href="https://github.com/dylanodekirk"
              >
                GitHub
              </Button>
            </div>
          </div>
        </motion.div>
        <div
          className="shooting-stars-container"
          style={{ width: "100vw", height: "100vh", position: "absolute" }}
        >
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </main>
  );
}
