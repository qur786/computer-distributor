import type { ComponentProps } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

export function StyledNavLink({
  children,
  className,
  ...props
}: ComponentProps<typeof NavLink>): JSX.Element {
  return (
    <NavLink
      {...props}
      className={`${typeof className === "string" ? className : ""} text-cyan-400 text-xl hover:underline`}
    >
      {children}
    </NavLink>
  );
}
