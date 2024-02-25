import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

export function App(): JSX.Element {
  return (
    <div className="font-barlow">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
