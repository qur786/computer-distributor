import BackgroundImage from "./computers-bg-removed.png";
import { Link } from "react-router-dom";
import { NavLinks } from "../../components/utils";
import SecondSectionImage from "./second-section.svg";
import { ServiceCard } from "../../components/ServiceCard";
import { Services } from "./services";

export function HomePage(): JSX.Element {
  return (
    <div className="flex flex-col items-center gap-16">
      {/* First section */}
      <div className="h-screen w-full flex items-center justify-center flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2">
          <h6 className="text-6xl md:mt-12 md:ml-12 font-bold text-[#212b36] dark:text-white text-center">
            Shop your new Device with{" "}
            <span className="text-[#fa541c]">Computer Distributor</span>
          </h6>
        </div>
        <div className="w-full md:w-1/2 hidden md:block">
          <img src={BackgroundImage} alt="store" />
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
          <h5 className="text-[#fa541c] font-semibold text-5xl text-center">
            Computer Distributor
          </h5>
          <p className="text-center">
            Modern ui kit to save your time, boost your creativity.
            <br />
            Neat and super stylish layout ready to help with your projects
          </p>
        </div>
      </div>
      {/* Third section. TODO: add different images, title and descriptions. */}
      <div className="flex flex-col gap-8">
        <h2 className="text-4xl font-semibold text-center">What you get?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
      {/* Fourth section */}
      <div className="h-72 rounded-md w-full md:w-1/2 flex flex-col justify-center items-center gap-8 shadow-lg dark:bg-[#1E1E1E] p-8">
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
      </div>
    </div>
  );
}
