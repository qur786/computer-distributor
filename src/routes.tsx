import { App } from "./App";
import { NavLinks } from "./components/utils";
import { createHashRouter } from "react-router-dom";
import { AboutUs, ContactUs, Home, Products } from "./code-splits";

export const routes = createHashRouter([
  {
    path: NavLinks.Home,
    element: <App />,
    children: [
      {
        path: NavLinks.Home,
        element: <Home />,
      },
      {
        path: NavLinks["About Us"],
        element: <AboutUs />,
      },
      {
        path: NavLinks.Products,
        element: <Products />,
      },
      {
        path: NavLinks["Contact Us"],
        element: <ContactUs />,
      },
    ],
  },
]);
