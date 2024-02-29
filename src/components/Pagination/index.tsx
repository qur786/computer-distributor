import { PaginationButton } from "../PaginationButton";
import { useMemo } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import type { Dispatch, MouseEventHandler, SetStateAction } from "react";

interface PaginationProps {
  pageLength: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export function Pagination({
  pageLength,
  currentPage,
  setCurrentPage,
}: PaginationProps): JSX.Element {
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

  const pages = useMemo(() => {
    let output: (number | "...")[] = [];
    if (pageLength <= 7) {
      output = [...new Array(pageLength).keys()].map((ele) => ele + 1);
    } else if (currentPage <= 5) {
      output = [1, 2, 3, 4, 5, "...", pageLength];
    } else if (pageLength - currentPage < 5) {
      output = [
        1,
        "...",
        pageLength - 4,
        pageLength - 3,
        pageLength - 2,
        pageLength - 1,
        pageLength,
      ];
    } else {
      output = [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        pageLength,
      ];
    }
    return output;
  }, [currentPage, pageLength]);

  return (
    <div className="flex flex-row items-center md:gap-2 gap-1">
      <button
        onClick={handlePrevClick}
        disabled={currentPage === 1}
        className="disabled:cursor-not-allowed"
      >
        <ChevronLeftIcon className="h-6 text-slate-500" />
      </button>
      {pages.map((page) =>
        typeof page === "number" ? (
          // eslint-disable-next-line react/jsx-key
          <PaginationButton
            active={currentPage === page}
            onClick={handlePageSelect}
            data-page={page}
          >
            {page}
          </PaginationButton>
        ) : (
          // eslint-disable-next-line react/jsx-key
          <PaginationButton active={false} className="border-none">
            {page}
          </PaginationButton>
          // PaginationButton has been used to make sure the size of the ... remains same as number buttons
        ),
      )}
      <button
        onClick={handleNextClick}
        disabled={currentPage === pageLength}
        className="disabled:cursor-not-allowed"
      >
        <ChevronRightIcon className="h-6 text-slate-500" />
      </button>
    </div>
  );
}