import { IconButton } from "@radix-ui/themes";
import { HamburgerMenuIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useAppearance } from "@/contexts/appearance";

export default function Navbar() {
  const { appearance, toggleAppearance } = useAppearance();

  const containerStyles = "p-3 rounded-full bg-[var(--accent-2)] backdrop-blur-sm";
  const iconButtonStyles =
    "!cursor-pointer !transition-none hover:bg-transparent hover:opacity-100 [&>svg]:hover:stroke-current z-10";

  const iconStyles = "w-8 h-8 sm:w-8 sm:h-8";

  return (
    <>
      <div className={`fixed left-0 top-0 z-10 m-2 sm:m-3 ${containerStyles}`}>
        <IconButton variant="ghost" aria-label="Menu" className={iconButtonStyles}>
          <HamburgerMenuIcon className={iconStyles} />
        </IconButton>
      </div>

      <div className={`fixed right-0 top-0 z-10 m-2 sm:m-3 ${containerStyles}`}>
        <IconButton
          variant="ghost"
          aria-label={appearance === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          className={iconButtonStyles}
          onClick={toggleAppearance}
        >
          {appearance === "light" ? (
            <SunIcon className={iconStyles} />
          ) : (
            <MoonIcon className={iconStyles} />
          )}
        </IconButton>
      </div>
    </>
  );
}
