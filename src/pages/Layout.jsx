import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const hideSidebar = location.pathname === "/";

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar (hidden only on landing page) */}
      {!hideSidebar && (
        <aside className="w-64 bg-violet-700 text-white flex flex-col p-6 shadow-lg">
          <h1 className="text-3xl font-bold mb-12 tracking-wide">CecGrid</h1>
          <nav className="flex flex-col space-y-4">
            <Link
              to="/home"
              className="p-2 rounded-lg hover:bg-violet-800 transition"
            >
              Home
            </Link>

            {/* Hide Dashboard link on home page */}
            {location.pathname !== "/home" && (
              <Link
                to="/dashboard"
                className="p-2 rounded-lg hover:bg-violet-800 transition"
              >
                Dashboard
              </Link>
            )}

            <Link
              to="/about"
              className="p-2 rounded-lg hover:bg-violet-800 transition"
            >
              About
            </Link>

            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="p-2 rounded-lg hover:bg-violet-800 transition text-left"
              >
                Logout
              </button>
            )}
          </nav>
        </aside>
      )}

      {/* Main Content */}
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
};

export default Layout;


