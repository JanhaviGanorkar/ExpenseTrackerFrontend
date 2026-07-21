import { Bell, MoonStar, ShieldCheck, Zap } from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { useThemeStore } from "../store/store";

const Settings = () => {
  const { isdark } = useThemeStore();

  return (
    <div className={`min-h-full w-full p-4 transition-colors duration-300 sm:p-6 lg:p-8 ${isdark ? "text-white" : "text-slate-900"}`}>
      <div className={`mb-6 rounded-3xl border p-6 shadow-sm ${isdark ? "border-slate-800 bg-slate-900/80" : "border-slate-200 bg-white"}`}>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">Settings</p>
          <h1 className="mt-2 text-2xl font-semibold">Customize your experience</h1>
          <p className={`mt-2 text-sm ${isdark ? "text-slate-400" : "text-slate-500"}`}>Control preferences, theme, and account details from one place.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <Card>
          <div className="flex items-center gap-3">
            <div className={`rounded-2xl p-3 ${isdark ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-50 text-emerald-600"}`}>
              <MoonStar size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Theme</h3>
              <p className={`text-sm ${isdark ? "text-slate-400" : "text-slate-500"}`}>Dark mode is active</p>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <div className={`flex items-center justify-between rounded-2xl px-4 py-3 ${isdark ? "bg-slate-800/60" : "bg-slate-50"}`}>
              <span>Dark mode</span>
              <span className="font-semibold text-emerald-500">Enabled</span>
            </div>
            <div className={`flex items-center justify-between rounded-2xl px-4 py-3 ${isdark ? "bg-slate-800/60" : "bg-slate-50"}`}>
              <span>Accent color</span>
              <span className="font-semibold">Emerald</span>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <div className={`rounded-2xl p-3 ${isdark ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-50 text-emerald-600"}`}>
              <Bell size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Notifications</h3>
              <p className={`text-sm ${isdark ? "text-slate-400" : "text-slate-500"}`}>Stay updated without noise</p>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <div className={`flex items-center justify-between rounded-2xl px-4 py-3 ${isdark ? "bg-slate-800/60" : "bg-slate-50"}`}>
              <span>Budget alerts</span>
              <span className="font-semibold text-emerald-500">On</span>
            </div>
            <div className={`flex items-center justify-between rounded-2xl px-4 py-3 ${isdark ? "bg-slate-800/60" : "bg-slate-50"}`}>
              <span>Weekly report</span>
              <span className="font-semibold text-emerald-500">On</span>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <div className={`rounded-2xl p-3 ${isdark ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-50 text-emerald-600"}`}>
              <ShieldCheck size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Currency</h3>
              <p className={`text-sm ${isdark ? "text-slate-400" : "text-slate-500"}`}>Default preference</p>
            </div>
          </div>
          <div className="mt-6">
            <select className={`w-full rounded-xl border p-3 text-sm ${isdark ? "border-slate-800 bg-slate-950 text-white" : "border-slate-200 bg-slate-50 text-slate-900"}`}>
              <option>INR</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <div className={`rounded-2xl p-3 ${isdark ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-50 text-emerald-600"}`}>
              <Zap size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Google account status</h3>
              <p className={`text-sm ${isdark ? "text-slate-400" : "text-slate-500"}`}>Connected and secure</p>
            </div>
          </div>
          <div className="mt-6">
            <Button variant="outline">Reconnect Google</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;