import { NavLink } from "react-router-dom";
import { useUiStore } from "../store/store";

function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useUiStore();

  const menuItems = [
    { name: "Dashboard", icon: "🏠", path: "/dashboard" },
    { name: "Add Expense", icon: "➕", path: "/dashboard/add-expense" },
    { name: "Expenses", icon: "📑", path: "/dashboard/expenses" },
    { name: "Analytics", icon: "📊", path: "/dashboard/analytics" },
    { name: "Budget", icon: "💰", path: "/dashboard/budget" },
    { name: "Profile", icon: "👤", path: "/dashboard/profile" },
    { name: "Settings", icon: "⚙️", path: "/dashboard/settings" },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-slate-800 bg-slate-900 p-5 text-slate-200 transition-all duration-300 ${
        isSidebarOpen ? "w-64 translate-x-0" : "w-0 -translate-x-full md:w-20 md:translate-x-0"
      }`}
    >
      <div className="mb-8 flex items-center justify-between">
        <h2 className={`flex items-center gap-2 text-xl font-black tracking-wider text-emerald-400 ${!isSidebarOpen && "md:hidden"}`}>
          <span>💼</span> Menu
        </h2>
        <button
          onClick={toggleSidebar}
          className="rounded-lg bg-slate-800 p-2 text-sm text-slate-400 transition hover:text-white"
        >
          {isSidebarOpen ? "◀" : "▶"}
        </button>
      </div>

      <nav className="flex w-full flex-col gap-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/dashboard"}
            className={({ isActive }) =>
              `group relative flex items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-emerald-500/15 text-emerald-400 shadow-sm"
                  : "text-slate-300 hover:bg-slate-800 hover:text-emerald-400"
              }`
            }
          >
            <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-emerald-400 transition-all opacity-0 group-[.active]:opacity-100" />
            <span className="text-lg transition-transform duration-200 group-hover:scale-110">{item.icon}</span>
            <span className={`${!isSidebarOpen && "md:hidden"}`}>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
