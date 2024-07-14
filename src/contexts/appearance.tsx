import { createContext, useContext } from "react";
import useAppearance from "@/hooks/useAppearance";

const AppearanceContext = createContext(null);

export const AppearanceProvider = ({ children }: any) => {
  const appearanceData = useAppearance();

  return <AppearanceContext.Provider value={appearanceData}>{children}</AppearanceContext.Provider>;
};

export const useAppearanceContext = () => {
  return useContext(AppearanceContext);
};
