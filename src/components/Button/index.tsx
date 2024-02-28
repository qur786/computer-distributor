import type { ComponentProps } from "react";
import { Loader } from "../Loader";

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
      className="w-full rounded-xl bg-black p-2 text-white hover:border-2 hover:bg-white hover:text-black disabled:opacity-50"
    >
      <span className="flex flex-row gap-2 justify-center items-center">
        {children}
        <Loader color={loaderColor} hidden={!loading} />
      </span>
    </button>
  );
}
