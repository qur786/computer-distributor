import { lazy } from "react";

export const AboutUs = lazy(() =>
  import("./pages/AboutUs").then((module) => ({ default: module.AboutUsPage })),
);
