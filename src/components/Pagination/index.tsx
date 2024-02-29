import type { MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { type ComponentProps, useState } from "react";

interface PaginationProps {
  pageLength: number;
}

interface PaginationButtonProps extends ComponentProps<"button"> {
  active: boolean;
}

function PaginationButton({
  active,
  ...props
}: PaginationButtonProps): JSX.Element {
  return (
    <button
      {...props}
      className={twMerge(
        "rounded-full border-2 size-8",
        props.className,
        active ? "bg-green-100 border-green-300" : "",
      )}
    />
  );
}

export function Pagination({ pageLength }: PaginationProps): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageSelect: MouseEventHandler<HTMLButtonElement> = (e) => {
    const page = e.currentTarget.getAttribute("data-page");
    const parsedPage = Number.parseInt(page ?? "", 10);
    if (Number.isFinite(parsedPage)) {
      setCurrentPage(parsedPage);
    }
  };

  const handleNextClick: MouseEventHandler<HTMLButtonElement> = () => {
    setCurrentPage((prev) => (prev === pageLength ? prev : prev + 1));
  };

  const handlePrevClick: MouseEventHandler<HTMLButtonElement> = () => {
    setCurrentPage((prev) => (prev === 1 ? prev : prev - 1));
  };

  return (
    <div className="flex flex-row items-center gap-2">
      <button onClick={handlePrevClick}>
        <ChevronLeftIcon className="h-6 text-slate-500" />
      </button>
      {[...new Array(pageLength).keys()].map((_, idx) => (
        <PaginationButton
          key={idx}
          active={currentPage === idx + 1}
          onClick={handlePageSelect}
          data-page={idx + 1}
        >
          {idx + 1}
        </PaginationButton>
      ))}
      <button onClick={handleNextClick}>
        <ChevronRightIcon className="h-6 text-slate-500" />
      </button>
    </div>
  );
}
