import FirstSectionImage from "./first-section.svg";
import Laptop1Image from "./laptop1.png";
import Laptop2Image from "./laptop2.png";
import LegionImage from "./legion1.avif";
import { Link } from "react-router-dom";
import { NavLinks } from "../../components/utils";
import Rog1Image from "./rog1.png";
import Rog2Image from "./rog2.png";
import SecondSectionImage from "./second-section.svg";
import { ServiceCard } from "../../components/ServiceCard";
import { Services } from "./services";
import { SocialMediaLinks } from "../../components/SocialMediaLinks";
import Tuf1Image from "./tuf1.png";
import Tuf2Image from "./tuf2.png";
import VictusImage from "./victus.png";
import { useEffect } from "react";

export function HomePage(): JSX.Element {
  useEffect(() => {
    const scrollEventListener = () => {
      const sticky = document.getElementById("sticky") as HTMLDivElement;
      const offsetTop = sticky.parentElement?.offsetTop ?? 0;
      const scrollSection = document.getElementById(
        "scroll-section",
      ) as HTMLDivElement;
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const maxPercentage = isMobile ? 500 : 400;
      let percentage =
        ((window.scrollY - offsetTop) / window.innerHeight) * 100;
      percentage =
        percentage < 0
          ? 0
          : percentage > maxPercentage
            ? maxPercentage
            : percentage;
      scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
    };

    window.addEventListener("scroll", scrollEventListener);

    return () => {
      window.removeEventListener("scroll", scrollEventListener);
    };
  }, []);
  return (
    <div className="flex flex-col items-center gap-16">
      {/* First section */}
      <div className="h-screen w-full flex items-center justify-center flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2">
          <h6 className="text-6xl md:mt-12 md:ml-12 font-bold text-[#212b36] dark:text-white text-center">
            Shop your new Device with{" "}
            <span className="text-orange-500">Computer Distributor</span>
          </h6>
        </div>
        <div className="w-full md:w-1/2 hidden md:block">
          <img src={FirstSectionImage} alt="store" />
        </div>
      </div>
      <div className="h-[80vh] w-full flex md:flex-row flex-col items-center py-4">
        <img
          src={Laptop1Image}
          alt=""
          className="self-start w-full md:w-1/2 -scale-x-100" // Added -z-10 to keep the image behind the header on scrolling position
        />
        <h6 className="text-6xl font-bold text-center">
          <span className="text-orange-500">Best laptops</span> in affordable{" "}
          <span className="text-blue-600">prices.</span>
        </h6>
      </div>
      <div className="h-screen w-full flex md:flex-row-reverse flex-col items-center py-4">
        <img src={Laptop2Image} alt="" className="self-start w-full md:w-1/2" />
        <h6 className="text-6xl font-bold text-center">
          Step into the Future with{" "}
          <span className="text-orange-500">
            Our Sleek and Powerful Laptops.
          </span>
        </h6>
      </div>
      <div className="h-[600vh] md:h-[500vh] w-full" id="sticky-container">
        <div className="overflow-hidden sticky top-24 h-[80vh]" id="sticky">
          <div
            id="scroll-section"
            className="absolute gap-4 md:gap-0 top-0 snap-x md:pr-72 h-full w-[600vw] md:w-[500vw] will-change-transform flex flex-row justify-start items-center"
          >
            <img
              src={Rog1Image}
              alt=""
              className="md:h-72 h-56 w-screen object-contain object-center"
            />
            <img
              src={Rog2Image}
              alt=""
              className="md:h-72 h-56 w-screen object-contain object-center"
            />
            <img
              src={Tuf1Image}
              alt=""
              className="md:h-80 h-56 w-screen object-contain object-center"
            />
            <img
              src={Tuf2Image}
              alt=""
              className="md:h-96 h-56 w-screen object-contain object-center"
            />
            <img
              src={LegionImage}
              alt=""
              className="md:h-96 h-56 w-screen object-contain object-center"
            />
            <img
              src={VictusImage}
              alt=""
              className="md:h-96 h-56 w-screen object-contain object-center"
            />
          </div>
        </div>
      </div>
      {/* Second section */}
      <div className="h:screen md:h-[150vh] md:w-full w-[90%] rounded-xl bg-slate-100 dark:bg-slate-900 py-4 px-2 box-border flex flex-col md:gap-8">
        <div className="h-1/2 flex flex-col justify-center items-center">
          <img
            src={SecondSectionImage}
            alt="store"
            className="h-full object-contain"
          />
        </div>
        <div className="h-1/2 flex flex-col items-center justify-center gap-4">
          <p className="text-sm font-bold text-center">NEW START</p>
          <h5 className="text-orange-500 font-semibold text-5xl text-center">
            Computer Distributor
          </h5>
          <p className="text-center">
            Modern gadgets specifically for your needs, boost your creativity.
            <br />
            Neat and super stylish gadgets ready for your work and games.
          </p>
        </div>
      </div>
      {/* Third section */}
      <div className="flex flex-col gap-8">
        <h2 className="text-4xl font-semibold text-center">What you get?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
      {/* Fourth section */}
      <div className="h-fit rounded-md w-full md:w-1/2 flex flex-col justify-center items-center gap-8 shadow-lg dark:bg-[#1E1E1E] p-8">
        <h6 className="text-4xl font-semibold text-center">
          Still have questions?
        </h6>
        <p className="text-center">
          Please describe your case to receive the most accurate advice.
        </p>
        <Link
          to={NavLinks["Contact Us"]}
          className="bg-black text-white dark:bg-slate-900 rounded-lg px-4 py-2 hover:scale-110 transition-transform"
        >
          Contact Us
        </Link>
        <p>Or, connect us via our social media handles</p>
        <SocialMediaLinks />
      </div>
    </div>
  );
}
