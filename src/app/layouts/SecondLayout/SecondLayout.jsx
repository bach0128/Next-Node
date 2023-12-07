import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function SecondLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
