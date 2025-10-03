import React from "react";
import { Link } from "react-router-dom";
import collegeImage from "../assets/clg-pic.png"; // update filename if different

const LandingPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-violet-600 text-white py-4 px-8 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">CecGrid</h1>
      </header>

      {/* Hero Section - full height minus footer height */}
      <section
        className="flex-1 flex flex-col items-center justify-center text-center px-6 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${collegeImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-white max-w-2xl px-4">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Smarter Exam Seating Arrangement
          </h2>
          <p className="text-lg md:text-xl mb-10 leading-relaxed">
            CecGrid helps you create, manage, and organize exam seating
            arrangements efficiently. Save time, reduce errors, and ensure fairness.
          </p>
          <Link
            to="/login"
            className="bg-white text-violet-700 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-violet-600 text-white py-6 text-center">
        <div className="space-y-2">
          <p className="font-semibold">CecGrid © 2025</p>
          <p>
            Developer:{" "}
            <a href="mailto:dev@example.com" className="hover:text-gray-200">
              dev@example.com
            </a>
          </p>
          <p className="text-sm">
            Location: College of Engineering Chengannur, Alappuzha, Kerala
          </p>
        </div>
      </footer>
    </div>
  );
};
export default LandingPage;





