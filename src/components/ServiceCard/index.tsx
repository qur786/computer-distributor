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
    <div className="flex flex-row gap-2 rounded-md h-72 w-full shadow-md dark:bg-[#1E1E1E] box-border py-2 px-4">
      <img src={image} alt={imageAlt} className="w-1/2 h-full object-contain" />
      <div className="flex flex-col gap-2 w-1/2 h-full py-2">
        <h6 className="text-xl font-bold text-[#0F3460] dark:text-white">
          {title}
        </h6>
        <p>{description}</p>
      </div>
    </div>
  );
}
