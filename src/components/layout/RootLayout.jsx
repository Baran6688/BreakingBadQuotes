import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

function RootLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
