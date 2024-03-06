export interface ProductCardProps {
  title: string;
  price?: number;
  image: string;
  imageAlt: string;
  description: string;
}

export function ProductCard({
  title,
  price,
  image,
  imageAlt,
  description,
}: ProductCardProps): JSX.Element {
  return (
    <div className="shadow-top-shadow dark:bg-[#1E1E1E] h-96 rounded-md flex flex-col items-center justify-between">
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        className="h-[70%] w-full object-cover rounded-t-md"
      />
      <div className="my-4 mx-2 h-[30%] flex flex-col gap-2">
        <h6 className="text-xl font-semibold text-center text-[#2F363F]">
          {title}
        </h6>
        <p className="text-center text-slate-700 text-sm line-clamp-1">
          {description}
        </p>
        {price ? (
          <p className="text-center text-[#4C4B4B]">{price} &#8377;</p>
        ) : undefined}
      </div>
    </div>
  );
}
