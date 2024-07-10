import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div className="lighter-black flex flex-col min-h-[100vh]">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
