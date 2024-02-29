import { App } from "./App";
import { NavLinks } from "./components/utils";
import { createHashRouter } from "react-router-dom";
import { AboutUs, ContactUs, Home, Products } from "./code-splits";

// Hash router has been used to fix the 404 error of directly accessing any sub-url. TODO: use Browser router if deploy using a server.
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
