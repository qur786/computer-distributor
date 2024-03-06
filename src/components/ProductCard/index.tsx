export interface ProductCardProps {
  title: string;
  price?: number;
  image: string;
  imageAlt: string;
  imageTitle?: string;
  description: string;
}

export function ProductCard({
  title,
  price,
  image,
  imageAlt,
  description,
  imageTitle,
}: ProductCardProps): JSX.Element {
  return (
    <div className="shadow-top-shadow dark:bg-[#1E1E1E] h-96 rounded-md flex flex-col items-center justify-between">
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        title={imageTitle}
        className="h-[65%] w-full object-cover rounded-t-md"
      />
      <div className="my-4 mx-2 h-[35%] flex flex-col gap-2">
        <h6 className="text-xl font-semibold text-center text-[#2F363F]">
          {title}
        </h6>
        <p className="text-center text-slate-700 text-sm line-clamp-2">
          {description}
        </p>
        {price ? (
          <p className="text-center text-[#4C4B4B]">{price} &#8377;</p>
        ) : undefined}
      </div>
    </div>
  );
}
