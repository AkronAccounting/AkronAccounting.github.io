import "./App.css";
import { Theme } from "@radix-ui/themes";
import { useAppearance } from "@/contexts/appearance";
import { About, Contact, Services } from "@/components";

function App() {
  const { appearance } = useAppearance();

  return (
    <Theme accentColor="ruby" grayColor="slate" appearance={appearance}>
      <About />
      <Services />
      <Contact />
    </Theme>
  );
}

export default App;
