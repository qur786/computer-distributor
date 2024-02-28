import { Button } from "../Button";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";

interface SearchBarProps {
  open?: boolean;
  onClose?: () => void;
}

export function SearchBar({ open, onClose }: SearchBarProps): JSX.Element {
  return (
    <div
      className={twMerge(
        "backdrop-blur-[3px] w-full h-20 p-4 shadow-lg flex flex-row gap-2 items-center z-20 box-border fixed left-0 -top-[100px] transition-[top] duration-1000",
        open ? "top-0" : "",
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
        <Button onClick={onClose}>Close</Button>
      </span>
    </div>
  );
}
