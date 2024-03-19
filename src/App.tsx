import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LoadingOverlay } from "./components/LoadingOverlay";
import { ScrollIndicator } from "./components/ScrollIndicator";
import { useTheme } from "./hooks/theme";
import { Outlet, useLocation } from "react-router-dom";
import { Suspense, useEffect } from "react";

export function App(): JSX.Element {
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="font-barlow flex flex-col items-center gap-8 dark:bg-[#121212] dark:text-white">
      <Header />
      <main className="container min-h-screen mt-12 md:px-0 px-4">
        <Suspense fallback={<LoadingOverlay theme={theme} />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ScrollIndicator className="z-20" />
    </div>
  );
}
