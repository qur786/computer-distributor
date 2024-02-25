import { Outlet } from "react-router-dom";

export function App(): JSX.Element {
  return (
    <div>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
