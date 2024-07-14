// import assert from "assert";
import { createContext, useContext, useLayoutEffect, useState } from "react";

type AppearanceContextType = {
  appearance: "dark" | "light";
  setAppearance: React.Dispatch<React.SetStateAction<"dark" | "light">>;
  toggleAppearance: () => void;
};

const AppearanceContext = createContext<AppearanceContextType | undefined>(undefined);

export const AppearanceProvider = ({ children }: { children: React.ReactNode }) => {
  const [appearance, setAppearance] = useState<"dark" | "light">(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useLayoutEffect(() => {
    function mediaListener(event: MediaQueryListEvent) {
      setAppearance(event.matches ? "dark" : "light");
    }
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", mediaListener);
    return () => media.removeEventListener("change", mediaListener);
  }, []);

  function toggleAppearance() {
    setAppearance((current) => (current === "dark" ? "light" : "dark"));
  }

  return (
    <AppearanceContext.Provider value={{ appearance, setAppearance, toggleAppearance }}>
      {children}
    </AppearanceContext.Provider>
  );
};

export const useAppearance = () => {
  const context = useContext(AppearanceContext);
  // assert(context !== undefined, "AppearanceContext is undefined");
  if (context === undefined) {
    throw new Error("AppearanceContext is undefined");
  }
  return context;
};
