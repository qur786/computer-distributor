import { MoonIcon } from "@heroicons/react/24/outline";
import type { MouseEventHandler } from "react";
import { NavLinks } from "../utils";
import PlaceholderLogo from "./logo-placeholder.png";
import { SideBar } from "../SideBar";
import { StyledNavLink } from "../StyledNavlink";
import { useState } from "react";
import { useTheme } from "../../hooks/theme";
import { Bars3Icon, SunIcon } from "@heroicons/react/24/solid";

export function Header(): JSX.Element {
  const [modalOpen, setModalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleSidebarClose = () => {
    setModalOpen(false);
  };

  const toggleSidebar: MouseEventHandler<HTMLButtonElement> = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      <header className="fixed w-full p-4 dark:bg-[#1E1E1E] dark:text-white backdrop-blur-md shadow-lg flex items-center justify-between">
        <img
          src={PlaceholderLogo}
          alt="Logo"
          className="h-12 w-28"
          title="Logo"
        />
        <nav className="hidden gap-8 md:flex">
          {Object.entries(NavLinks).map(([title, link]) => (
            <StyledNavLink to={link} key={title}>
              {title}
            </StyledNavLink>
          ))}
        </nav>
        <span className="flex flex-row gap-2 items-center">
          <button
            onClick={toggleTheme}
            title={
              theme === "dark"
                ? "Toggle to Light Theme"
                : "Toggle to Dark Theme"
            }
          >
            {theme === "dark" ? (
              <SunIcon className="h-6 fill-yellow-400 hover:scale-150 transition-transform" />
            ) : (
              <MoonIcon className="h-6 hover:scale-150 transition-transform" />
            )}
          </button>
          <button
            title="Menu"
            onClick={toggleSidebar}
            className="opacity-50 hover:opacity-100 md:invisible"
          >
            <Bars3Icon className="h-6" />
          </button>
        </span>
      </header>
      <SideBar open={modalOpen} onClose={handleSidebarClose} />
    </>
  );
}
