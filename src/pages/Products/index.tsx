import { ProductCard } from "../../components/ProductCard";

export function ProductsPage(): JSX.Element {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-x-8 gap-y-8 mt-12">
      {/* TODO: remove it and use correct data */}
      <ProductCard
        title="Sony Xperia Digital Camera"
        price="37000"
        image="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Acer computer"
      />
    </div>
  );
}
