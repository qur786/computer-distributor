import { ProductCard } from "../../components/ProductCard";

export function ProductsPage(): JSX.Element {
  return (
    <div className="mt-16 flex flex-col items-center gap-16">
      <h3 className="text-4xl text-center font-bold">
        <span className="text-red-600">Flash Deals,</span> Enjoy Upto 70%
        discounts
      </h3>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-x-8 gap-y-8">
        {/* TODO: remove it and use correct data */}
        <ProductCard
          title="Sony Xperia Digital Camera"
          price="37000"
          image="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          imageAlt="Acer computer"
        />
      </div>
    </div>
  );
}
