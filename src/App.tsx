import { Header } from "./components/Header";
import { LoadingOverlay } from "./components/LoadingOverlay";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export function App(): JSX.Element {
  return (
    <div className="font-barlow flex flex-col items-center">
      <Header />
      <main className="container">
        <Suspense fallback={<LoadingOverlay />}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </div>
  );
}
