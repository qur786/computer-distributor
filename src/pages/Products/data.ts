import ASUSImage from "./asus-chip.jpg";
import DellLaptopImage from "./dell-laptop.jpg";
import HPLaptopImage from "./hp-laptop.jpg";
import type { ProductCardProps } from "../../components/ProductCard";

export const Products: ProductCardProps[] = [
  {
    title: "Dell laptops and computers",
    image: DellLaptopImage,
    imageAlt: "Dell computer",
    description:
      "We have all kinds of dell computers and laptops with affordable price and best quality.",
  },
  {
    title: "HP laptops and computers",
    image: HPLaptopImage,
    imageAlt: "HP computer",
    description:
      "We have all kinds of HP products, from laptops, computers to mouse and accessories.",
    imageTitle: "Image by freepik",
  },
  {
    title: "ASUS cards and laptops",
    image: ASUSImage,
    imageAlt: "ASUS",
    description:
      "Reach out to us for best ASUS products such as graphic cards, laptops and computers.",
  },
];
