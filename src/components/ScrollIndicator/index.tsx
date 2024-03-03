import { useEffect, useMemo, useState } from "react";

export function ScrollIndicator(): JSX.Element {
  const [yPosition, setYPosition] = useState(() => {
    return window.scrollY;
  });

  const scrollWidth = useMemo(() => {
    const value =
      yPosition /
      (window.document.documentElement.scrollHeight -
        window.document.documentElement.clientHeight);
    return Number.isFinite(value)
      ? value.toLocaleString(undefined, {
          style: "percent",
        })
      : "0%";
  }, [yPosition]);

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
    <div className="fixed top-0 w-full h-[3px]">
      <div
        className="bg-[#fa541c] h-full rounded-lg"
        style={{
          width: scrollWidth,
        }}
      ></div>
    </div>
  );
}
