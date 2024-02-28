import { Button } from "../Button";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export function SearchBar(): JSX.Element {
  return (
    <div className="backdrop-blur-[3px] w-full h-20 p-4 shadow-lg flex flex-row gap-2 items-center z-20 box-border">
      <MagnifyingGlassIcon className="h-6 w-2 text-slate-500 md:flex-grow flex-grow-[2]" />
      {/* TODO: add search feature */}
      <input
        type="search"
        name="search"
        placeholder="Search..."
        className="md:flex-grow-[10] flex-grow-[2] p-2 bg-transparent focus:outline-none rounded-xl"
      />
      <span className="md:flex-grow flex-grow-[2]">
        <Button>Search</Button>
      </span>
    </div>
  );
}
