import AccessoriesImage from "./accessories.png";
import BackgroundImage from "./computers-bg-removed.png";
import BackgroundImage2 from "./computers-bg-removed2.png";
import BestComputer from "./best-computer.png";
import { Link } from "react-router-dom";
import { NavLinks } from "../../components/utils";
import OnsiteRepair from "./onsite-repair.png";
import RepairImage from "./repair.png";
import { ServiceCard } from "../../components/ServiceCard";

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
            src={BackgroundImage2}
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
          <ServiceCard
            image={BestComputer}
            imageAlt={"Best Computers"}
            title="Best Computers"
            description="Discover the finest selection of computers and laptops at our shop. From cutting-edge performance to sleek designs, find the perfect device to suit your needs and elevate your computing experience."
          />
          <ServiceCard
            image={RepairImage}
            imageAlt={"Fast Repair"}
            title="Fast Repair"
            description="Trust our skilled technicians to fix your computer issues promptly and efficiently. Get your device back up and running smoothly with our reliable repair services."
          />
          <ServiceCard
            image={AccessoriesImage}
            imageAlt={"Accessories"}
            title="Accessories"
            description="Explore our wide range of accessories, including keyboards, mouse, monitors, motherboard, HDD, SSD, printers, hedaphones, and more, to enhance your computing experience."
          />
          <ServiceCard
            image={OnsiteRepair}
            imageAlt={"On-Site Repairs"}
            title="On-Site Repairs"
            description="Can't make it to our shop? No problem. We offer on-site repair services to conveniently fix your computer issues at your location."
          />
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
