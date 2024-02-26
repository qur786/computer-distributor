import styles from "./index.module.css";

export function LoadingOverlay(): JSX.Element {
  return (
    <div className="w-full h-full absolute top-0 left-0 z-10 flex flex-col items-center justify-center">
      <span className={styles.loader}></span>
    </div>
  );
}
