import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

export function App(): JSX.Element {
  return (
    <div className="font-barlow flex flex-col items-center">
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
