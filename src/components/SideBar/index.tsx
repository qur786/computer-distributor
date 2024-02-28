import { NavLinks } from "../utils";
import { StyledNavLink } from "../StyledNavlink";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface SideBarProps {
  onClose?: () => void;
  open?: boolean;
}

export function SideBar({ onClose, open }: SideBarProps): JSX.Element {
  return (
    <>
      <div
        className={`fixed left-0 top-0 z-20 h-screen w-screen bg-gray-900 opacity-60 md:hidden ${
          open === true ? "" : "hidden"
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed left-0 top-0 z-20 h-screen bg-white px-16 shadow-2xl md:hidden ${
          open === true
            ? "translate-x-0 transition-transform duration-500 ease-linear"
            : "-translate-x-[500px] transition-transform duration-1000 ease-linear"
        }`}
      >
        <nav className="relative top-12 flex h-full flex-col items-center justify-start gap-4">
          <button
            title="Close Menu"
            onClick={onClose}
            className="opacity-75 hover:opacity-100"
          >
            <XMarkIcon className="h-8 text-red-600" />
          </button>
          {Object.entries(NavLinks).map(([title, link]) => (
            <StyledNavLink to={link} key={title} onClick={onClose}>
              {title}
            </StyledNavLink>
          ))}
        </nav>
      </div>
    </>
  );
}
