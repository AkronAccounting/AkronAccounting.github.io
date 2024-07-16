import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Theme } from "@radix-ui/themes";
import { useAppearance } from "@/contexts/appearance";
import { Welcome, About, Contact, Services, Footer } from "@/components";

function ScrollToSection() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
}

function MainContent() {
  return (
    <>
      <Welcome />
      <About />
      <Services />
      <Contact />
    </>
  );
}

function App() {
  const { appearance } = useAppearance();

  return (
    <Theme accentColor="ruby" grayColor="slate" appearance={appearance}>
      <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/:section" element={<MainContent />} />
        </Routes>
        <ScrollToSection />
        <Footer />
      </Router>
    </Theme>
  );
}

export default App;
