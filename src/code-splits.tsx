import { lazy } from "react";

export const Home = lazy(() =>
  import("./pages/Home").then((module) => ({ default: module.HomePage })),
);

export const AboutUs = lazy(() =>
  import("./pages/AboutUs").then((module) => ({ default: module.AboutUsPage })),
);

export const Products = lazy(() =>
  import("./pages/Products").then((module) => ({
    default: module.ProductsPage,
  })),
);

export const ContactUs = lazy(() =>
  import("./pages/ContactUs").then((module) => ({
    default: module.ContactUsPage,
  })),
);
