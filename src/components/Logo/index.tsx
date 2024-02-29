import DarkLogo from "./logo-dark.png";
import LightLogo from "./logo.png";
import { Link } from "react-router-dom";
import { NavLinks } from "../utils";
import { useTheme } from "../../hooks/theme";

export function Logo(): JSX.Element {
  const { theme } = useTheme();
  return (
    <Link to={NavLinks.Home}>
      <img
        src={theme === "dark" ? DarkLogo : LightLogo}
        alt="Logo"
        className="h-12 w-24 object-cover"
        title="Logo"
      />
    </Link>
  );
}
