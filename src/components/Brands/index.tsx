import { ASUSIcon } from "../../icons/asus";
import { AcerIcon } from "../../icons/acer";
import { BrotherIcon } from "../../icons/brother";
import { CPPlusIcon } from "../../icons/cp-plus";
import { CanonIcon } from "../../icons/canon";
import { DellIcon } from "../../icons/dell";
import { EpsonIcon } from "../../icons/epson";
import FrontTechImage from "./front-tech.png";
import { HPIcon } from "../../icons/hp";
import LapcareImage from "./lapcare.png";
import { LenovoIcon } from "../../icons/lenovo";
import MantraImage from "./mantra-logo.png";
import { MorphoIcon } from "../../icons/morpho";
import SamsungImage from "./samsung.png";
import SonyImage from "./sony.png";
import ZebronicsImage from "./zebronics.avif";

export function Brands() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h3 className="text-4xl text-center font-bold">
        <span className="text-orange-500">Brands</span> available in our shop
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-x-2 justify-items-center items-center">
        <HPIcon className="h-32 hover:scale-150 transition-transform" />
        <ASUSIcon className="h-32 hover:scale-150 transition-transform" />
        <DellIcon className="h-32 hover:scale-150 transition-transform" />
        <LenovoIcon className="h-32 hover:scale-150 transition-transform" />
        <EpsonIcon className="h-32 hover:scale-150 transition-transform" />
        <CPPlusIcon className="h-32 hover:scale-150 transition-transform" />
        <MorphoIcon className="h-32 hover:scale-150 transition-transform" />
        <AcerIcon className="h-32 hover:scale-150 transition-transform" />
        <BrotherIcon className="h-32 hover:scale-150 transition-transform" />
        <CanonIcon className="h-32 hover:scale-150 transition-transform" />
        <div className="h-32 flex flex-col justify-center">
          <img
            src={MantraImage}
            alt="Mantra logo"
            className="h-6 hover:scale-150 transition-transform"
          />
        </div>
        <div className="h-32 flex flex-col justify-center">
          <img
            src={FrontTechImage}
            alt="Frontech logo"
            className="h-32 hover:scale-150 transition-transform"
          />
        </div>
        <div className="h-32 flex flex-col justify-center">
          <img
            src={LapcareImage}
            alt="Lapcare logo"
            className="h-8 hover:scale-150 transition-transform"
          />
        </div>
        <div className="h-32 flex flex-col justify-center">
          <img
            src={ZebronicsImage}
            alt="Zebronics logo"
            className="bg-black dark:bg-transparent p-2 rounded-md h-8 hover:scale-150 transition-transform"
          />
        </div>
        <div className="h-32 flex flex-col justify-center">
          <img
            src={SamsungImage}
            alt="Samsung logo"
            className="h-8 hover:scale-150 transition-transform"
          />
        </div>
        <div className="h-32 flex flex-col justify-center">
          <img
            src={SonyImage}
            alt="Sony logo"
            className="h-16 hover:scale-150 transition-transform"
          />
        </div>
      </div>
    </div>
  );
}
