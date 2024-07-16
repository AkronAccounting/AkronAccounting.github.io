import { IconButton } from "@radix-ui/themes";
import { HamburgerMenuIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useAppearance } from "@/contexts/appearance";

export default function Navbar() {
  const { appearance } = useAppearance();

  return (
    <>
      <div className="fixed left-0 top-0 z-10 m-3">
        <IconButton variant="ghost" aria-label="Menu" className="!cursor-pointer">
          <HamburgerMenuIcon width="48" height="48" />
        </IconButton>
      </div>

      <div className="fixed right-0 top-0 z-10 m-3">
        <IconButton
          variant="ghost"
          aria-label={appearance === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          className="!cursor-pointer"
        >
          {appearance === "light" ? (
            <SunIcon width="48" height="48" />
          ) : (
            <MoonIcon width="48" height="48" />
          )}
        </IconButton>
      </div>
    </>
  );
}
