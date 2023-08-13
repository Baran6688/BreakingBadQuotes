import { Outlet } from "react-router-dom";
import BreadCrumbs from "../BreadCrumbs";
import Navbar from "../Navbar";

export default function RootLayout() {
  return (
    <div className="container">
      <header>
        <Navbar />
        <BreadCrumbs />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
