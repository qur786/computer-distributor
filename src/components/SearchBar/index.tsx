import { Button } from "../Button";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";

interface SearchBarProps {
  open?: boolean;
}

export function SearchBar({ open }: SearchBarProps): JSX.Element {
  return (
    <div
      className={twMerge(
        "backdrop-blur-[3px] w-full h-20 p-4 shadow-lg flex flex-row gap-2 items-center z-20 box-border",
        open ? "fixed top-0 left-0 animate-slide-bottom" : "hidden",
      )}
    >
      <MagnifyingGlassIcon className="h-6 w-2 text-slate-500 md:flex-grow flex-grow-[2]" />
      {/* TODO: add search feature */}
      <input
        type="search"
        name="search"
        placeholder="Search products..."
        className="md:flex-grow-[10] flex-grow-[2] p-2 bg-transparent focus:outline-none rounded-xl"
      />
      <span className="md:flex-grow flex-grow-[2]">
        <Button>Search</Button>
      </span>
    </div>
  );
}
