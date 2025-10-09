import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/"); // ✅ Redirect to landing page after logout
  };

  // ✅ Hide sidebar on login and landing pages
  const hideSidebar =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/forgot";

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar (hidden on login or landing pages) */}
      {!hideSidebar && (
        <aside className="w-64 bg-[#423FE5] text-white flex flex-col p-6 shadow-lg">
          <h1 className="text-3xl font-bold mb-12 tracking-wide">CEC Grid</h1>

          <nav className="flex flex-col space-y-4">
            <Link
              to="/home"
              className="p-2 rounded-lg hover:bg-primary/80 transition"
            >
              Home
            </Link>

            {/* Hide Dashboard link on home page */}
            {location.pathname !== "/home" && (
              <Link
                to="/dashboard"
                className="p-2 rounded-lg hover:bg-primary/80 transition"
              >
                Dashboard
              </Link>
            )}

            <Link
              to="/about"
              className="p-2 rounded-lg hover:bg-primary/80 transition"
            >
              About
            </Link>

            {/* Logout only if user is logged in */}
            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="p-2 rounded-lg hover:bg-primary/80 transition text-left"
              >
                Logout
              </button>
            )}
          </nav>
        </aside>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default Layout;