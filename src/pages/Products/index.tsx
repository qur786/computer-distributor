import { ASUSIcon } from "../../icons/asus";
import { AcerIcon } from "../../icons/acer";
import { BrotherIcon } from "../../icons/brother";
import { CPPlusIcon } from "../../icons/cp-plus";
import { CanonIcon } from "../../icons/canon";
import type { ChangeEventHandler } from "react";
import { DellIcon } from "../../icons/dell";
import { EpsonIcon } from "../../icons/epson";
import FrontTechImage from "./front-tech.png";
import { HPIcon } from "../../icons/hp";
import LapcareImage from "./lapcare.png";
import { LenovoIcon } from "../../icons/lenovo";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import MantraImage from "./mantra-logo.png";
import { MorphoIcon } from "../../icons/morpho";
import { Pagination } from "../../components/Pagination";
import { ProductCard } from "../../components/ProductCard";
import { Products } from "./data";
import ProductsImage from "./products.svg";
import SamsungImage from "./samsung.png";
import SonyImage from "./sony.png";
import ZebronicsImage from "./zebronics.avif";
import { useMemo, useState } from "react";

export function ProductsPage(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const filteredProducts = useMemo(
    () => Products.filter(({ title }) => new RegExp(search, "i").test(title)),
    [search],
  );
  const productsPerPage = window.matchMedia("(max-width: 768px)").matches
    ? 10
    : 20;
  const pageLength = Math.ceil(filteredProducts.length / productsPerPage);

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  return (
    <main className="mt-16 flex flex-col items-center gap-28">
      <div className="flex flex-col gap-4 items-center">
        <h3 className="text-4xl text-center font-bold">
          <span className="text-[#fa541c]">Brands</span> available in our shop
        </h3>
        <div className="grid grid-cols-4 md:grid-cols-4 justify-items-center items-center">
          <HPIcon className="h-32" />
          <ASUSIcon className="h-32" />
          <DellIcon className="h-32" />
          <LenovoIcon className="h-32" />
          <EpsonIcon className="h-32" />
          <CPPlusIcon className="h-32" />
          <MorphoIcon className="h-32" />
          <AcerIcon className="h-32" />
          <BrotherIcon className="h-32" />
          <CanonIcon className="h-32" />
          <img src={MantraImage} alt="Mantra logo" className="mx-6 h-6" />
          <img src={FrontTechImage} alt="Frontech logo" className="mx-6 h-32" />
          <img src={LapcareImage} alt="Lapcare logo" className="h-8" />
          <img
            src={ZebronicsImage}
            alt="Zebronics logo"
            className="bg-black dark:bg-transparent p-2 rounded-md h-8"
          />
          <img src={SamsungImage} alt="Samsung logo" className="h-8" />
          <img src={SonyImage} alt="Sony logo" className="h-16" />
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
      <div className="flex flex-row border rounded-xl px-4 py-2 gap-2">
        <MagnifyingGlassIcon className="h-6 text-slate-500" />
        <input
          type="search"
          name="product-search"
          placeholder="Search products"
          value={search}
          onChange={handleSearchChange}
          className="outline-none bg-transparent"
        />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-x-8 gap-y-8 md:min-h-[30vh] min-h-[25vh]">
        {filteredProducts.length > 0 ? (
          filteredProducts
            .slice(
              productsPerPage * (currentPage - 1),
              productsPerPage * (currentPage - 1) + productsPerPage,
            )

            .map((product) => <ProductCard key={product.title} {...product} />)
        ) : (
          <p className="text-center md:col-span-3 text-red-600 font-semibold text-xl">
            No products found.
          </p>
        )}
      </div>
      {filteredProducts.length > 0 && pageLength > 1 ? (
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="font-semibold text-sky-400 text-center">
            Showing {productsPerPage * (currentPage - 1) + 1} -{" "}
            {productsPerPage * (currentPage - 1) + productsPerPage >
            filteredProducts.length
              ? filteredProducts.length
              : productsPerPage * (currentPage - 1) + productsPerPage}{" "}
            products out of total {filteredProducts.length} products
          </p>
          <Pagination
            pageLength={pageLength}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      ) : undefined}
    </main>
  );
}
