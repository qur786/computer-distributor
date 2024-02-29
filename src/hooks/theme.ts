import { ThemeContext } from "../components/ThemeProvider/theme-context";
import { useContext } from "react";

export function useTheme(): ThemeContext {
  return useContext(ThemeContext);
}
