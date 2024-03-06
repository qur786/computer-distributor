export interface ProductCardProps {
  title: string;
  price?: string;
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
    <div className="shadow-top-shadow dark:bg-[#1E1E1E] h-96 rounded-md flex flex-col items-center justify-between">
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        className="h-[80%] w-full object-cover rounded-t-md"
      />
      <div className="my-4 h-16">
        <h6 className="text-xl font-semibold text-center text-[#0A79DF]">
          {title}
        </h6>
        {price ? (
          <p className="text-center text-[#3498DB]">{price} &#8377;</p>
        ) : undefined}
      </div>
    </div>
  );
}
