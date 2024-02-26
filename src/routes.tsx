import { AboutUsPage } from "./pages/AboutUs";
import { App } from "./App";
import { ContactUsPage } from "./pages/ContactUs";
import { HomePage } from "./pages/Home";
import { NavLinks } from "./components/utils";
import { ProductsPage } from "./pages/Products";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: NavLinks.Home,
    element: <App />,
    children: [
      {
        path: NavLinks.Home,
        element: <HomePage />,
      },
      {
        path: NavLinks["About Us"],
        element: <AboutUsPage />,
      },
      {
        path: NavLinks.Products,
        element: <ProductsPage />,
      },
      {
        path: NavLinks["Contact Us"],
        element: <ContactUsPage />,
      },
    ],
  },
]);
