import type { ComponentProps } from "react";
import { Loader } from "../Loader";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<"button"> {
  loading?: boolean;
  loaderColor?: string;
}

export function Button({
  children,
  loaderColor,
  loading,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      {...props}
      className={twMerge(
        props.className,
        "w-full rounded-xl bg-black p-2 text-white border dark:border-none hover:bg-white hover:text-black disabled:opacity-50 dark:bg-slate-900 dark:hover:bg-slate-700",
      )}
    >
      <span className="flex flex-row gap-2 justify-center items-center">
        {children}
        {loading ? <Loader color={loaderColor} /> : undefined}
      </span>
    </button>
  );
}
