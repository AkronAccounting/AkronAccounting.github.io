import { createContext, useContext, useLayoutEffect, useState } from "react";

type AppearanceContextType = {
  appearance: "dark" | "light";
  setAppearance: React.Dispatch<React.SetStateAction<"dark" | "light">>;
  toggleAppearance: () => void;
};

const AppearanceContext = createContext<AppearanceContextType | undefined>(undefined);

export const AppearanceProvider = ({ children }: { children: React.ReactNode }) => {
  const [appearance, setAppearance] = useState<"dark" | "light">(() => {
    const appearance = localStorage.getItem("appearance");

    if (!appearance) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    return appearance as "light" | "dark";
  });

  useLayoutEffect(() => {
    function mediaListener(event: MediaQueryListEvent) {
      const appearance = event.matches ? "dark" : "light";
      if (!localStorage.getItem("appearance")) {
        setAppearance(appearance);
      }
    }
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", mediaListener);
    return () => media.removeEventListener("change", mediaListener);
  }, []);

  useLayoutEffect(() => {
    const htmlElement = document.documentElement;
    if (appearance === "dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [appearance]);

  function toggleAppearance() {
    setAppearance((current) => {
      const newAppearance = current === "dark" ? "light" : "dark";
      localStorage.setItem("appearance", newAppearance);
      return newAppearance;
    });
  }

  return (
    <AppearanceContext.Provider value={{ appearance, setAppearance, toggleAppearance }}>
      {children}
    </AppearanceContext.Provider>
  );
};

export const useAppearance = () => {
  const context = useContext(AppearanceContext);
  if (context === undefined) {
    throw new Error("AppearanceContext is undefined");
  }
  return context;
};
