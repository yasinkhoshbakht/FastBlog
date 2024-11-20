import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 to-purple-700">
      <Navbar />
      <div className="flex-grow container mx-auto p-6 bg-white rounded-lg shadow-lg mt-6 mb-12">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
