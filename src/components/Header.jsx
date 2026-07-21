import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, Sparkles } from "lucide-react";
import { useThemeStore } from "../store/store";
import { useUserStore } from "../store/useUserStore";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { isdark } = useThemeStore();
  const { user, logoutUser } = useUserStore();

  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12 ? "Good Morning" : currentHour < 18 ? "Good Afternoon" : "Good Evening";

  const handleLogout = async () => {
    const success = await logoutUser();

    if (success) {
      navigate("/login");
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 border-b px-4 py-4 shadow-sm backdrop-blur sm:px-6 ${
        isdark
          ? "border-slate-800 bg-slate-950/90 text-white"
          : "border-slate-200 bg-white/90 text-slate-900"
      }`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${isdark ? "bg-emerald-500/15 text-emerald-400" : "bg-emerald-50 text-emerald-600"}`}>
            <Sparkles size={18} />
          </div>
          <div>
            <p className={`text-sm font-semibold ${isdark ? "text-emerald-400" : "text-emerald-600"}`}>
              {greeting}
            </p>
            <h1 className="text-lg font-semibold">
              Welcome back, {user?.name || "there"} 👋
            </h1>
            <p className={`text-sm ${isdark ? "text-slate-400" : "text-slate-500"}`}>
              Track your expenses and manage your budget efficiently.
            </p>
          </div>
        </div>

        <div className="relative self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 font-bold text-white shadow-lg transition-transform duration-200 hover:scale-105"
          >
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </button>

          {open && (
            <div
              className={`absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border shadow-xl ${
                isdark
                  ? "border-slate-700 bg-slate-900"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="border-b border-slate-700/20 p-4">
                <p className="text-lg font-bold">{user?.name || "User"}</p>
                <p className="text-sm text-slate-400">
                  {user?.email || "No email provided"}
                </p>
              </div>

              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-3 px-4 py-3 text-red-500 transition hover:bg-red-500/10"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;