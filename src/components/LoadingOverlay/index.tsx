import type { Theme } from "../ThemeProvider/utils";
import styles from "./index.module.css";

interface LoadingOverlayProps {
  theme: Theme;
}

export function LoadingOverlay({ theme }: LoadingOverlayProps): JSX.Element {
  return (
    <div className="w-full h-full fixed top-0 left-0 flex items-center justify-center">
      <span
        className={styles.loader}
        style={{ borderColor: theme === "dark" ? "#FFFFFF" : "#000000" }}
      ></span>
    </div>
  );
}
