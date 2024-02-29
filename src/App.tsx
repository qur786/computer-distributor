import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LoadingOverlay } from "./components/LoadingOverlay";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export function App(): JSX.Element {
  return (
    <div className="font-barlow flex flex-col items-center gap-8 dark:bg-[#121212] dark:text-white">
      <Header />
      <main className="container min-h-screen mt-12 md:px-0 px-12">
        <Suspense fallback={<LoadingOverlay />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
