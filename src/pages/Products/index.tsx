import { Brands } from "../../components/Brands";
import { ProductCard } from "../../components/ProductCard";
import { Products } from "./data";
import ProductsImage from "./products.svg";

export function ProductsPage(): JSX.Element {
  return (
    <main className="mt-16 flex flex-col items-center gap-28">
      <Brands />
      <div className="flex flex-col items-center gap-16">
        <h3 className="text-4xl text-center font-bold">
          <span className="text-orange-500">Flash Deals,</span> Enjoy Upto 70%
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
