import React from "react";
import { NavLink } from "react-router-dom"; // 1. NavLink import kiya navigate karne ke liye
import { useUiStore } from "../store/store";

function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useUiStore();

  // 2. Menu items me 'path' property jodi taaki router ko pata chale kahan jaana hai
  const menuItems = [
    { name: "Dashboard", icon: "📊", path: "/" },
    { name: "Expenses", icon: "📈", path: "/expenses" },
  ];

  return (
    <aside
      className={`fixed md:sticky top-0 left-0 z-40 bg-slate-900 text-slate-200 p-5 flex flex-col h-screen border-r border-slate-800 transition-all duration-300
        ${isSidebarOpen ? "w-64 translate-x-0" : "w-0 -translate-x-full md:w-20 md:translate-x-0"}`}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className={`text-xl font-black text-emerald-400 tracking-wider flex items-center gap-2 ${!isSidebarOpen && "md:hidden"}`}>
          <span>💼</span> Menu
        </h2>
        <button
          onClick={toggleSidebar}
          className="text-slate-400 hover:text-white bg-slate-800 p-2 rounded-lg text-sm"
        >
          {isSidebarOpen ? "◀" : "▶"}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-2 w-full">
        {menuItems.map((item, index) => (
          // 3. Button ki jagah NavLink lagaya, jo click par page change karega
          <NavLink
            key={index}
            to={item.path}
            // Dynamic styling: Agar link active hoga toh green/dark slate highlight ho jayega
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl w-full text-left transition-all duration-200 active:scale-95 group
              ${isActive
                ? "bg-slate-800 text-emerald-400 font-bold border-l-4 border-emerald-500 rounded-l-none"
                : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
              }
            `}
          >
            <span className="text-lg group-hover:animate-bounce">{item.icon}</span>
            <span className={`${!isSidebarOpen && "md:hidden"}`}>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
