import React from "react";
import { useNavigate, Link } from "react-router-dom";
import collegeImage from "../assets/clg-pic.png";
import logo from "../assets/cecgrid-logo.png";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    navigate("/PlanningPage");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {/* Outer white card */}
      <div className="relative w-full h-[1080px] bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Logo Section */}
        <div className="flex flex-col items-center mt-10 mb-6">
          <img
            src={logo}
            alt="CEC GRID Logo"
            className="w-[61px] h-[61px] border-[2.38px] border-black rounded-none"
          />
        </div>

        {/* Separation Line */}
        <div className="w-full h-0 border-t border-[#D4D4D4] mb-8"></div>

        {/* Content Section */}
        <div className="flex w-full gap-[40px] items-start">
          {/* Left Side - Form */}
          <div className="w-1/2 px-10 py-6 flex flex-col justify-start">
            <form onSubmit={handleSubmit} autoComplete="off">
              {/* Hidden dummy fields */}
              <input
                type="text"
                name="hidden-username"
                autoComplete="username"
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
              <div className="mb-6">
                <label
                  className="block font-clash font-medium text-[14px] leading-[20px] tracking-[0.03em] text-primary mb-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="login-email-xyz"
                  placeholder="cecgrid@ceconline.edu"
                  required
                  autoComplete="off"
                  className="w-[384px] h-[54px] px-4 border-[1.48px] border-[#423FE5] rounded-[7.5px] focus:outline-none focus:ring-2 focus:ring-[#423FE5]"
                />
              </div>

              {/* Password */}
              <div className="mb-6">
                <label
                  className="block font-clash font-medium text-[14px] leading-[20px] tracking-[0.03em] text-primary mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="login-pass-xyz"
                  placeholder="cecgrid@123"
                  required
                  autoComplete="off"
                  className="w-[384px] h-[54px] px-4 border-[1.48px] border-[#423FE5] rounded-[7.5px] focus:outline-none focus:ring-2 focus:ring-[#423FE5]"
                />
                <div className="w-[384px] text-right mt-2">
                  <Link
                    to="/forgot"
                    className="font-clash font-medium text-[14px] leading-[20px] tracking-[0.03em] text-primary"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

              {/* Login Button */}
              <div className="mt-4">
                <button
                  type="submit"
                  className="w-[382px] h-[54px] bg-[#423FE5] text-white font-semibold text-[18px] rounded-[75px] hover:bg-[#352FCC] transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Login
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - College Image */}
          <div className="w-full flex justify-center mt-8">
          <img
          src={collegeImage}
          alt="College of Engineering Chengannur"
          className="w-full h-full object-cover rounded-tl-[100px]"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

