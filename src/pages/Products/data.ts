import CCTVImage from "./cctv.jpg";
import DesktopImage from "./desktop.jpg";
import GraphicsCardImage from "./graphics-card.jpg";
import LaptopImage from "./laptop.jpg";
import type { ProductCardProps } from "../../components/ProductCard";

export const Products: ProductCardProps[] = [
  {
    title: "Laptops",
    image: LaptopImage,
    imageAlt: "HP laptops",
    description:
      "Laptops of all brands with the best price is available to us.",
    imageTitle: "Image by freepik",
  },
  {
    title: "Desktops",
    image: DesktopImage,
    imageAlt: "Desktops",
    description:
      "If you wanna buy full fledge PC or customized ones. We have the best in class gaming PC also.",
  },
  {
    title: "Graphics Cards",
    image: GraphicsCardImage,
    imageAlt: "ASUS",
    description:
      "Reach out to us for best graphic cards for your gaming laptops.",
  },
  {
    title: "CCTV Camera",
    image: CCTVImage,
    imageAlt: "CP Plus",
    description:
      "We have the advanced and the best CCTV camera available in town.",
  },
];
