import { App } from "./App";
import { HomePage } from "./pages/Home";
import { NavLinks } from "./components/utils";
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
    ],
  },
]);
