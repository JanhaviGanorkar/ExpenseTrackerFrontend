import { useUiStore } from "../store/store";

function Sidebar() {
  // Zustand store se state aur toggle function nikal liya
  const { isSidebarOpen, toggleSidebar } = useUiStore();

  const menuItems = [
    { name: "Dashboard", icon: "📊" },
    { name: "Analytics", icon: "📈" },
    { name: "History", icon: "📜" },
    { name: "Settings", icon: "⚙️" },
  ];

  // Agar sidebar closed hai toh mobile/laptop par classes badalengi
  return (
    <aside
      className={`fixed md:sticky top-0 left-0 z-40 bg-slate-900 text-slate-200 p-5 flex flex-col h-screen border-r border-slate-800 transition-all duration-300
        ${isSidebarOpen ? "w-64 translate-x-0" : "w-0 -translate-x-full md:w-20 md:translate-x-0"}`}
    >
      {/* Top Header: Logo + Toggle Button */}
      <div className="flex items-center justify-between mb-8">
        <h2 className={`text-xl font-black text-emerald-400 tracking-wider flex items-center gap-2 ${!isSidebarOpen && "md:hidden"}`}>
          <span>💼</span> Menu
        </h2>
        {/* Burger / Cross Button Jo Sidebar Ko Band Karega */}
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
          <button
            key={index}
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl w-full text-left transition-all duration-200 hover:bg-slate-800 hover:text-emerald-400 active:scale-95 group"
          >
            <span className="text-lg group-hover:animate-bounce">{item.icon}</span>
            {/* Agar sidebar open hai tabhi text dikhao, nahi toh sirf icon dikhega (Desktop par) */}
            <span className={`${!isSidebarOpen && "md:hidden"}`}>{item.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
