import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface PaginationButtonProps extends ComponentProps<"button"> {
  active: boolean;
}

export function PaginationButton({
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
