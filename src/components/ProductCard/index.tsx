interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  imageAlt: string;
}

export function ProductCard({
  title,
  price,
  image,
  imageAlt,
}: ProductCardProps): JSX.Element {
  return (
    <div className="shadow-top-shadow h-96 rounded-md flex flex-col items-center justify-between">
      <img src={image} alt={imageAlt} className="h-[80%] w-full object-cover" />
      <h6 className="text-xl font-semibold text-center">{title}</h6>
      <p className="mb-4 text-center">{price} &#8377;</p>
    </div>
  );
}
