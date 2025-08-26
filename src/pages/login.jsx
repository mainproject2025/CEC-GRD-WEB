import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save login state
    localStorage.setItem("isLoggedIn", "true");

    // Navigate to home page after login
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-violet-700 text-white flex flex-col p-6 shadow-lg">
        <h1 className="text-3xl font-bold mb-12 tracking-wide">CecGrid</h1>
        <nav className="flex flex-col space-y-4">
          <Link
            to="/home"
            className="p-2 rounded-lg hover:bg-violet-800 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="p-2 rounded-lg hover:bg-violet-800 transition"
          >
            About
          </Link>
          <Link
            to="/login"
            className="p-2 rounded-lg hover:bg-violet-800 transition"
          >
            Login
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md p-8 border rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-bold text-center mb-6 text-violet-600">
            Faculty Login
          </h2>
          <form
            className="space-y-4"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div>
              <label className="block text-sm text-violet-600 mb-1">Email</label>
              <input
                type="text" // keep as text to break autofill
                name="username" // non-standard name prevents autofill
                placeholder="Enter your email"
                required
                autoComplete="off"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>
            <div>
              <label className="block text-sm text-violet-600 mb-1">Password</label>
              <input
                type="password"
                name="pass" // non-standard name prevents autofill
                placeholder="Enter your password"
                required
                autoComplete="new-password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-violet-600 text-white py-2 rounded-md hover:bg-violet-700 transition"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;


