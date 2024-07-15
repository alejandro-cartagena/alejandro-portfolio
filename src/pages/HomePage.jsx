import React from "react";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import AboutSection from "../components/AboutSection";
import PortfolioSection from "../components/PortfolioSection";
import ContactSection from "../components/ContactSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}

export default HomePage;
