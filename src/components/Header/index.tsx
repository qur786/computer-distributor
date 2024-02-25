import type { MouseEventHandler } from "react";
import { NavLinks } from "../utils";
import PlaceholderLogo from "./logo-placeholder.png";
import { SideBar } from "../SideBar";
import { StyledNavLink } from "../StyledNavlink";
import { useState } from "react";
import {
  Bars3Icon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/solid";

export function Header(): JSX.Element {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSidebarClose = () => {
    setModalOpen(false);
  };

  const toggleSidebar: MouseEventHandler<HTMLButtonElement> = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <header className="p-4 dark:bg-gray-800 dark:text-white backdrop-blur-[1px] shadow-lg flex items-center justify-between">
      <img
        src={PlaceholderLogo}
        alt="Logo"
        className="h-12 w-28"
        title="Logo"
      />
      <nav className="hidden gap-6 md:flex">
        {Object.entries(NavLinks).map(([title, link]) => (
          <StyledNavLink to={link} key={title}>
            {title}
          </StyledNavLink>
        ))}
      </nav>
      <SideBar open={modalOpen} onClose={handleSidebarClose} />
      <div className="flex items-center justify-between rounded-3xl border border-gray-700 px-2 py-1 outline-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-4/5 focus:outline-none dark:bg-gray-700 dark:text-white dark:focus:bg-gray-600"
        />
        <button
          title="Search"
          className="rounded-full opacity-50 hover:opacity-100 active:animate-ping"
        >
          <MagnifyingGlassCircleIcon className="h-8 text-cyan-500" />
        </button>
      </div>
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
