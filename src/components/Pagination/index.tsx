import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface PaginationProps {
  pageLength: number;
  currentPage: number;
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

export function Pagination({
  pageLength,
  currentPage,
}: PaginationProps): JSX.Element {
  return (
    <div className="flex flex-row items-center gap-2">
      <button>
        <ChevronLeftIcon className="h-6 text-slate-500" />
      </button>
      {[...new Array(pageLength).keys()].map((_, idx) => (
        <PaginationButton key={idx} active={currentPage === idx + 1}>
          {idx + 1}
        </PaginationButton>
      ))}
      <button>
        <ChevronRightIcon className="h-6 text-slate-500" />
      </button>
    </div>
  );
}
