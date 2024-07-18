import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Theme } from "@radix-ui/themes";
import { useAppearance } from "@/contexts/appearance";
import {
  Welcome,
  Navbar,
  About,
  Contact,
  Services,
  Footer,
  ScrollToSection,
  Animator,
} from "@/components";

function MainContent() {
  return (
    <>
      <Welcome />
      <Animator>
        <About />
      </Animator>

      <Animator>
        <Services />
      </Animator>

      <Animator>
        <Contact />
      </Animator>
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
