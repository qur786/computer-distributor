import styles from "./index.module.css";

export function LoadingOverlay(): JSX.Element {
  return (
    <div className="w-full h-full fixed top-0 left-0 flex items-center justify-center">
      <span className={styles.loader}></span>
    </div>
  );
}
