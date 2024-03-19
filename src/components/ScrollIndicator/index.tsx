import { twMerge } from "tailwind-merge";
import { useEffect, useMemo, useState } from "react";

export function ScrollIndicator({
  className,
}: {
  className?: string;
}): JSX.Element {
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
    <div className={twMerge("fixed top-0 w-full h-[3px]", className)}>
      <div
        className="bg-[#fa541c] h-full rounded-lg"
        style={{
          width: scrollWidth,
        }}
      ></div>
    </div>
  );
}
