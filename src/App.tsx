import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

export function App(): JSX.Element {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
