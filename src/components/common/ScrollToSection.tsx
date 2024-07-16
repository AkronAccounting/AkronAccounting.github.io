import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToSection() {
  const { hash } = useLocation();

  useEffect(() => {
    pathScroll(hash);
  }, [hash]);

  return null;
}

function pathScroll(path: string) {
  const hash = path.split("#")[1];
  if (hash) {
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

export function usePathScroll(path: string) {
  return (e: React.MouseEvent) => {
    e.preventDefault();

    // push to history if it's a different page
    window.history.pushState({}, "", path);

    pathScroll(path);
  };
}
