import { useState, useRef } from "react";
import { IconButton } from "@radix-ui/themes";
import { HamburgerMenuIcon, MoonIcon, SunIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useAppearance } from "@/contexts/appearance";
import { Link as RouterLink } from "react-router-dom";
import { usePathScroll } from "@/components";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

export function NavLink({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <RouterLink
      to={to}
      onClick={(e) => {
        usePathScroll(to)(e);
        onClick?.();
      }}
      className="block rounded-md bg-[var(--accent-2)] px-4 py-2 transition-colors duration-200 ease-in-out hover:bg-[var(--accent-3)]"
    >
      {children}
    </RouterLink>
  );
}

export default function Navbar() {
  const { appearance, toggleAppearance } = useAppearance();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const containerStyles = "p-3 rounded-full bg-[var(--accent-2)] backdrop-blur-sm";
  const iconButtonStyles =
    "!cursor-pointer !transition-none hover:bg-transparent hover:opacity-100 [&>svg]:hover:stroke-current z-10";
  const iconStyles = "w-8 h-8 sm:w-8 sm:h-8";

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`fixed left-0 top-0 z-10 m-2 sm:m-3 ${containerStyles}`} ref={menuRef}>
        <IconButton
          variant="ghost"
          aria-label="Menu"
          className={`${iconButtonStyles} relative`}
          onClick={handleMenuToggle}
        >
          {isOpen ? (
            <Cross1Icon className={iconStyles} />
          ) : (
            <HamburgerMenuIcon className={iconStyles} />
          )}
        </IconButton>
        {isOpen && (
          <div
            className={`absolute left-0 top-full mt-2 min-w-[200px] rounded-lg bg-[var(--accent-1)] p-4 shadow-lg transition-all duration-200 ease-in-out`}
          >
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <NavLink to={item.href} onClick={() => setIsOpen(false)}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
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
