"use client";
import { Box, AppBar, Toolbar, Button, Typography } from "@mui/material";
import "./landingPage.css";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";

export default function LandingPage() {
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

  const createStars = () => {
    const stars = [];
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
      const starStyle = {
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        width: `${Math.random() * 3 + 2}px`,
        height: `${Math.random() * 3 + 2}px`,
        animationDuration: `${Math.random() * 1 + 1}s`,
      };
      stars.push(<div key={i} className="star" style={starStyle} />);
    }

    return stars;
  };

  return (
    <main>
      <Box>
        <AppBar position="fixed" sx={{ bgcolor: "#0a1128", zIndex: 2 }}>
          <Toolbar>
            <Button
              variant="contained"
              sx={{ bgcolor: "#0a1128" }}
              href="#home"
            >
              Home
            </Button>
            <Button
              variant="contained"
              sx={{ bgcolor: "#0a1128" }}
              href="#about-me"
            >
              About Me
            </Button>
            <Button
              variant="contained"
              sx={{ bgcolor: "#0a1128" }}
              href="#experience"
            >
              Experience
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div id="home" className="stars absolute inset-0 z-0">
        {createStars()}
      </div>
      <div
        ref={ref}
        className="flex flex-col bg-[#0a1128] min-h-screen pt-20 pl-12 justify-center h-full"
      >
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 0 },
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
            <div className="pt-6 pl-2 flex flex-row space-x-4 z-10 relative">
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
      </div>
    </main>
  );
}
