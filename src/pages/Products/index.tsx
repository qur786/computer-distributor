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
import { ProductCard } from "../../components/ProductCard";
import { Products } from "./data";
import ProductsImage from "./products.svg";
import SamsungImage from "./samsung.png";
import SonyImage from "./sony.png";
import ZebronicsImage from "./zebronics.avif";

export function ProductsPage(): JSX.Element {
  return (
    <main className="mt-16 flex flex-col items-center gap-28">
      <div className="flex flex-col gap-4 items-center">
        <h3 className="text-4xl text-center font-bold">
          <span className="text-[#fa541c]">Brands</span> available in our shop
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center items-center">
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
          <img
            src={MantraImage}
            alt="Mantra logo"
            className="mx-6 h-6 hover:scale-150 transition-transform"
          />
          <img
            src={FrontTechImage}
            alt="Frontech logo"
            className="mx-6 h-32 hover:scale-150 transition-transform"
          />
          <img
            src={LapcareImage}
            alt="Lapcare logo"
            className="h-8 hover:scale-150 transition-transform"
          />
          <img
            src={ZebronicsImage}
            alt="Zebronics logo"
            className="bg-black dark:bg-transparent p-2 rounded-md h-8 hover:scale-150 transition-transform"
          />
          <img
            src={SamsungImage}
            alt="Samsung logo"
            className="h-8 hover:scale-150 transition-transform"
          />
          <img
            src={SonyImage}
            alt="Sony logo"
            className="h-16 hover:scale-150 transition-transform"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-16">
        <h3 className="text-4xl text-center font-bold">
          <span className="text-[#fa541c]">Flash Deals,</span> Enjoy Upto 70%
          discounts
        </h3>
        <img
          src={ProductsImage}
          alt="About us"
          className="h-[50vh] object-contain self-center"
        />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-x-8 gap-y-8 md:min-h-[30vh] min-h-[25vh]">
        {Products.length > 0 ? (
          Products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))
        ) : (
          <p className="text-center md:col-span-3 text-red-600 font-semibold text-xl">
            No products found.
          </p>
        )}
      </div>
    </main>
  );
}
