import React from 'react';
import logo from "../assets/cecgrid-logo.png";
import photoroom from "../assets/transparent-Photoroom 1.png"
import { Link, useNavigate } from "react-router-dom";
import { Bell, Settings, LogOut, Plus, Download, Eye, ChevronRight } from 'lucide-react';
import { useState } from "react";

const SeatingArrangementCard = ({ title, date, sections, createdAt }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">{date}</p>
      
      <div className="flex gap-2 mb-4">
        {sections.map((section, idx) => (
          <span key={idx} className="text-xs px-2 py-1 rounded bg-purple-50 text-primary mb-6 font-medium">
            {section}
          </span>
        ))}
      </div>
      
      <div className="flex gap-2">
        <button className="flex-1 flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition-colors text-sm font-medium">
          <Eye size={16} />
          View
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition-colors text-sm font-medium">
          <Download size={16} />
          Download
        </button>
      </div>
      
      <p className="text-xs text-gray-400 mt-3">{createdAt}</p>
    </div>
  );
};

const PlanningPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(""); // "" means no tab selected initially
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  const arrangements = [
    {
      title: "First Series Day 3",
      date: "23-10-2025",
      sections: ["S2", "S4", "S6"],
      createdAt: "Created on 15-10-2025, 10:32"
    },
    {
      title: "First Series Day 2",
      date: "22-10-2025",
      sections: ["S4", "S6"],
      createdAt: "Created on 15-10-2025, 10:32"
    },
    {
      title: "First Series Day 2",
      date: "23-10-2025",
      sections: ["S2"],
      createdAt: "Created on 15-10-2025, 10:32"
    },
    {
      title: "First Series Day 1",
      date: "23-10-2025",
      sections: ["S2", "S4", "S6"],
      createdAt: "Created on 15-10-2025, 10:32"
    },
    {
      title: "First Series Day 3",
      date: "23-10-2025",
      sections: ["S2", "S4", "S6"],
      createdAt: "Created on 15-10-2025, 10:32"
    },
    {
      title: "First Series Day 3",
      date: "23-10-2025",
      sections: ["S2", "S4", "S6"],
      createdAt: "Created on 15-10-2025, 10:32"
    },
    {
      title: "First Series Day 3",
      date: "23-10-2025",
      sections: ["S2", "S4", "S6"],
      createdAt: "Created on 15-10-2025, 10:32"
    },
    {
      title: "First Series Day 3",
      date: "23-10-2025",
      sections: ["S2", "S4", "S6"],
      createdAt: "Created on 15-10-2025, 10:32"
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6">
        <div className="mb-8">
          <img src={logo} alt="CECGrid Logo" className="h-10 mb-8" />
        </div>
        
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <div>
            <p className="font-semibold text-sm">Admin</p>
            <p className="text-xs text-gray-500">cecgrid@ceconline.edu</p>
          </div>
        </div>
          <hr className="border-t border-gray-200 mb-6" />

        <nav className="space-y-2">
          <button 
            onClick={() =>  {setActiveTab("planning");navigate('/planning')}}
            className="w-full flex items-center gap-3 px-3 py-2 text-primary mb-6 bg-indigo-50 rounded-lg"
           >
            <div className="w-5 h-5 border-2 border-[#423FE5] rounded"></div>
            <span className="text-sm font-medium">Seating arrangements</span>
          </button>
          <button 
            onClick={() =>navigate('/notifications')}
           
            className="w-full flex items-center gap-3 px-3 py-2 text-primary mb-6 hover:bg-indigo-50 rounded-lg"
          >
            <Bell size={20} />
            <span className="text-sm font-medium">Notifications</span>
          </button>
          <button 
            onClick={() => navigate('/settings')} 
            className="w-full flex items-center gap-3 px-3 py-2 text-primary mb-6 hover:bg-indigo-50 rounded-lg"
          >
            <Settings size={20} />
            <span className="text-sm font-medium">Settings</span>
          </button>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2 text-primary mb-6 hover:bg-indigo-50 rounded-lg">
            <LogOut size={20} />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 ">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">SEATING ARRANGEMENTS</h1>
        <div className="w-full h-0 border-t border-[#D4D4D4] mb-8"></div>
        {/* Create New Section */}
        <div className="bg-[linear-gradient(95.07deg,#F7F9FD_0.28%,#FFFFFF_100%)] border border-gray-200 p-8 mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Create a new seating arrangement</h2>
            <p className="text-gray-600">Design your perfect seating layout in minutes</p>
            <button
            onClick={() => navigate("/create-seating")}
           className="mt-4 flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-primary/80 transition-colors font-medium"
           >
         <Plus size={20} />
         Create
         </button>

          </div>
          <div className="relative">
            <img src={photoroom} alt="Seating Plan Illustration" className="w-48 h-48 object-contain" />
          </div>
        </div>

        {/* Recent Arrangements */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recent seating arrangements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {arrangements.map((arrangement, idx) => (
              <SeatingArrangementCard key={idx} {...arrangement} />
            ))}
          </div>
          
          <div className="flex justify-end mt-6">
            <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm font-medium">
              view more recent
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PlanningPage;