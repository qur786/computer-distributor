import type { MouseEventHandler } from "react";
import { NavLinks } from "../utils";
import PlaceholderLogo from "./logo-placeholder.png";
import { SideBar } from "../SideBar";
import { StyledNavLink } from "../StyledNavlink";
import { useState } from "react";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export function Header(): JSX.Element {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSidebarClose = () => {
    setModalOpen(false);
  };

  const toggleSidebar: MouseEventHandler<HTMLButtonElement> = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <header className="fixed w-full p-4 dark:bg-gray-800 dark:text-white backdrop-blur-md shadow-lg flex items-center justify-between">
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
      <SideBar open={modalOpen} onClose={handleSidebarClose} />
      <MagnifyingGlassIcon className="h-6 text-slate-500" />
      <button
        title="Menu"
        onClick={toggleSidebar}
        className="opacity-50 hover:opacity-100 md:hidden"
      >
        <Bars3Icon className="h-6" />
      </button>
    </header>
  );
}
