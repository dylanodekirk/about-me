"use client";
import AboutMe from "./aboutMe";
import Experience from "./experience";
import Footer from "./footer";
import LandingPage from "./landingPage";

export default function Home() {
  return (
    <main>
      <LandingPage />
      <AboutMe />
      <Experience />
      <Footer />
    </main>
  );
}
