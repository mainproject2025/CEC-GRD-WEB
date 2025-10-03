import React from "react";
import { useNavigate, Link } from "react-router-dom";
import collegeImage from "../assets/clg-pic.png";

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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="flex bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-5xl">
        
        {/* Left Side - Form */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center mb-6 text-primary">
            Login
          </h2>

          {/* Use autocomplete="off" on the form */}
          <form
            className="space-y-6"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            {/* Hidden dummy fields to fool browser autofill */}
            <input
              type="text"
              name="hidden-username"
              autoComplete="new-username"
              style={{ display: "none" }}
              disabled
              readOnly
            />
            <input
              type="password"
              name="hidden-password"
              autoComplete="current-password"
              style={{ display: "none" }}
              disabled
              readOnly
            />

            {/* Email */}
            <div>
              <label
                className="block font-clash font-medium text-[14px] leading-[53.19px] 
                           tracking-[0.03em] text-primary mb-2"
              >
                Email
              </label>
              <input
                type="text"
                name="login-email-xyz"
                placeholder="cecgrid@ceconline.edu"
                required
                autoComplete="off"
                className="w-full px-4 py-2 border border-[#423FE5] rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-[#423FE5]"
              />
            </div>

            {/* Password */}
            <div>
              <label
                className="block font-clash font-medium text-[14px] leading-[53.19px] 
                           tracking-[0.03em] text-primary mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="login-pass-xyz"
                placeholder="cecgrid@123"
                required
                autoComplete="off"
                className="w-full px-4 py-2 border border-[#423FE5] rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-[#423FE5]"
              />
              <div className="text-right mt-2">
                <Link
                  to="/forgot"
                  className="font-clash font-medium text-[14px] leading-[54.22px] 
                             tracking-[0.03em] text-primary text-right block"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-2 rounded-lg hover:bg-primary/80 transition"
            >
              Login
            </button>
          </form>
        </div>

        {/* Right Side - College Image */}
        <div className="w-1/2">
          <img
            src={collegeImage}
            alt="College"
            className="w-full h-full object-cover rounded-l-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
