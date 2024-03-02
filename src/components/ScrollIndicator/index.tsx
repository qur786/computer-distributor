import { useEffect, useState } from "react";

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
    <div className="fixed top-0 w-full h-[3px]">
      <div
        className="bg-[#fa541c] h-full rounded-lg"
        style={{
          width: (
            yPosition /
            (window.document.documentElement.scrollHeight -
              window.document.documentElement.clientHeight)
          ).toLocaleString(undefined, {
            style: "percent",
          }),
        }}
      ></div>
    </div>
  );
}
