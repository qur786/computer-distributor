import type { ChangeEventHandler } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Pagination } from "../../components/Pagination";
import { ProductCard } from "../../components/ProductCard";
import { Products } from "./data";
import { useState } from "react";

export function ProductsPage(): JSX.Element {
  const productsPerPage = window.matchMedia("(max-width: 768px)").matches
    ? 10
    : 20;
  const pageLength = Math.ceil(Products.length / productsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="mt-16 flex flex-col items-center gap-16">
      <h3 className="text-4xl text-center font-bold">
        <span className="text-red-600">Flash Deals,</span> Enjoy Upto 70%
        discounts
      </h3>
      {/* TODO: add search product logic */}
      <div className="flex flex-row border rounded-xl px-4 py-2 gap-2">
        <MagnifyingGlassIcon className="h-6 text-slate-500" />
        <input
          type="search"
          name="product-search"
          placeholder="Search products"
          value={search}
          onChange={handleSearchChange}
          className="outline-none"
        />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-x-8 gap-y-8">
        {/* TODO: remove it and use correct data */}
        {Products.slice(
          productsPerPage * (currentPage - 1),
          productsPerPage * (currentPage - 1) + productsPerPage,
        )
          .filter(({ title }) => new RegExp(search, "i").test(title))
          .map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <p className="font-semibold text-sky-400 text-center">
          Showing {productsPerPage * (currentPage - 1) + 1} -{" "}
          {productsPerPage * (currentPage - 1) + productsPerPage >
          Products.length
            ? Products.length
            : productsPerPage * (currentPage - 1) + productsPerPage}{" "}
          products out of total {Products.length} products
        </p>
        <Pagination
          pageLength={pageLength}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
