import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import { ReactLenis } from "@studio-freight/react-lenis";

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
    <ReactLenis root>
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
    </ReactLenis>
  );
}

export default App;
