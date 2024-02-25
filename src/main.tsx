import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes.tsx";
import "./index.css";
import "@fontsource/barlow"; // Defaults to weight 400
import "@fontsource/barlow/100.css"; // Specify weight
import "@fontsource/barlow/200.css"; // Specify weight
import "@fontsource/barlow/300.css"; // Specify weight
import "@fontsource/barlow/400.css"; // Specify weight
import "@fontsource/barlow/500.css"; // Specify weight
import "@fontsource/barlow/600.css"; // Specify weight
import "@fontsource/barlow/700.css"; // Specify weight
import "@fontsource/barlow/800.css"; // Specify weight
import "@fontsource/barlow/900.css"; // Specify weight

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
);
