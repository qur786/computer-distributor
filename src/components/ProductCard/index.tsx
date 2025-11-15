import { twMerge } from "tailwind-merge";

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
    <div className="shadow-top-shadow dark:bg-[#1E1E1E] h-[396px] rounded-md">
      <img
        src={image}
        alt={imageAlt}
        title={imageTitle}
        className="h-64 w-full object-cover rounded-t-md"
      />
      <div className="my-4 mx-2 flex flex-col gap-2">
        <h6 className="text-xl font-semibold text-center text-[#2F363F] dark:text-slate-100">
          {title}
        </h6>
        <p
          className={twMerge(
            "text-center text-slate-700 text-sm dark:text-slate-200",
            price ? "line-clamp-2" : "line-clamp-3",
          )}
        >
          {description}
        </p>
        {price ? (
          <p className="text-center text-[#4C4B4B] dark:text-slate-300">
            {price} &#8377;
          </p>
        ) : undefined}
      </div>
    </div>
  );
}
