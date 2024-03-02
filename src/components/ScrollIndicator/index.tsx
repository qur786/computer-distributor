import { useEffect, useState } from "react";
import "./index.css";

export function ScrollIndicator(): JSX.Element {
  const [yPosition, setYPosition] = useState(() => {
    return (
      window.document.documentElement.scrollHeight -
      window.document.documentElement.clientHeight
    );
  });

  useEffect(() => {
    const scrollEventListener = () => {
      setYPosition(window.scrollY);
    };

    window.addEventListener("scroll", scrollEventListener);

    return () => {
      window.removeEventListener("scroll", scrollEventListener);
    };
  }, []);
  return (
    <progress
      value={yPosition}
      max={
        window.document.documentElement.scrollHeight -
        window.document.documentElement.clientHeight
      }
      className="fixed top-0 w-full h-[3px] duration-1000"
    ></progress>
  );
}
