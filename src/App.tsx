import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Theme } from "@radix-ui/themes";
import { useAppearance } from "@/contexts/appearance";
import { Welcome, About, Contact, Services, Footer, ScrollToSection } from "@/components";
import Navbar from "./components/Navbar";

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
    <Theme accentColor="ruby" grayColor="mauve" appearance={appearance}>
      <Router>
        <Navbar />
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
