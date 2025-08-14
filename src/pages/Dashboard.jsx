import React, { useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { key: "home", label: "Home" },
    { key: "create", label: "Create Seating Arrangement" },
    { key: "students", label: "Student Details" },
    { key: "faculty", label: "Faculty Allocation Details" },
    { key: "settings", label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-violet-700 text-white flex flex-col p-6 shadow-lg">
        <h1 className="text-3xl font-bold mb-12 tracking-wide">CecGrid</h1>
        <nav className="flex flex-col space-y-4">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`p-2 rounded-lg text-left transition font-medium ${
                activeTab === tab.key
                  ? "bg-violet-800"
                  : "hover:bg-violet-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <main className="flex-grow py-10 px-8">
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
            
            {activeTab === "home" && (
              <>
                <h3 className="text-xl font-semibold mb-3 text-violet-700">
                  Previous Seating Arrangements
                </h3>
                <ul className="space-y-3">
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
              </>
            )}

            {activeTab === "create" && (
              <>
                <h2 className="text-2xl font-bold mb-6 text-violet-700">
                  Create a Seating Arrangement
                </h2>
                <form className="space-y-4 mb-10">
                  <div>
                    <label className="block text-sm text-violet-700 mb-1 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter arrangement name"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-violet-700 mb-1 font-medium">
                      Description
                    </label>
                    <textarea
                      placeholder="Enter description..."
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-violet-700 text-white px-6 py-2 rounded-md hover:bg-violet-800 transition"
                  >
                    Create Arrangement
                  </button>
                </form>
              </>
            )}

            {activeTab === "students" && (
              <h2 className="text-2xl font-bold text-violet-700">
                Student Details
              </h2>
            )}

            {activeTab === "faculty" && (
              <h2 className="text-2xl font-bold text-violet-700">
                Faculty Allocation Details 
              </h2>
            )}

            {activeTab === "settings" && (
              <h2 className="text-2xl font-bold text-violet-700">
                Settings 
              </h2>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
