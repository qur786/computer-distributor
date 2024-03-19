export interface ServiceCardProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export function ServiceCard({
  description,
  image,
  imageAlt,
  title,
}: ServiceCardProps): JSX.Element {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-2 rounded-md h-96 md:h-72 w-full shadow-md dark:bg-[#1E1E1E] box-border py-2 px-4">
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        className="w-full h-1/2 md:w-1/2 md:h-full object-contain"
      />
      <div className="flex flex-col gap-2 w-full h-1/2 md:w-1/2 md:h-full py-2">
        <h6 className="text-xl font-bold text-[#0F3460] dark:text-white text-center md:text-start">
          {title}
        </h6>
        <p>{description}</p>
      </div>
    </div>
  );
}
