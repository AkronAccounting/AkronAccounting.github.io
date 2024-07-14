import { useLayoutEffect, useState } from "react";

export default function useAppearance() {
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

  return { appearance, setAppearance, toggleAppearance };
}
