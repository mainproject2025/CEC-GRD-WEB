import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 text-center">
        <h3 className="text-xl font-semibold mb-6 text-violet-700">
          Previous Seating Arrangements
        </h3>

        <ul className="space-y-3 mb-8">
          {[
            { name: "Exam Arrangement A", link: "/arrangements/a" },
            { name: "Exam Arrangement B", link: "/arrangements/b" },
            { name: "Exam Arrangement C", link: "/arrangements/c" },
          ].map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="block px-4 py-2 bg-violet-100 rounded-lg hover:bg-violet-200 transition font-medium text-violet-700 shadow-sm"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Centered Go to Dashboard Button */}
        <div className="mt-10">
          <Link
            to="/dashboard"
            className="bg-violet-700 text-white px-6 py-3 rounded-md text-lg hover:bg-violet-800 transition"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

