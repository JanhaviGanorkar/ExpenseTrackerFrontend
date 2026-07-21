import { Camera, Lock, UserCircle2 } from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import { useThemeStore } from "../store/store";
import { useUserStore } from "../store/useUserStore";

const Profile = () => {
  const { isdark } = useThemeStore();
  const { user } = useUserStore();

  return (
    <div className={`min-h-full w-full p-4 transition-colors duration-300 sm:p-6 lg:p-8 ${isdark ? "text-white" : "text-slate-900"}`}>
      <div className={`mb-6 rounded-3xl border p-6 shadow-sm ${isdark ? "border-slate-800 bg-slate-900/80" : "border-slate-200 bg-white"}`}>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">Profile</p>
          <h1 className="mt-2 text-2xl font-semibold">Manage your personal information</h1>
          <p className={`mt-2 text-sm ${isdark ? "text-slate-400" : "text-slate-500"}`}>Keep your details updated and secure.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400`}>
              <UserCircle2 size={32} />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{user?.name || "Aarav Sharma"}</h2>
              <p className={`text-sm ${isdark ? "text-slate-400" : "text-slate-500"}`}>{user?.email || "aarav@example.com"}</p>
            </div>
            <button className={`ml-auto rounded-2xl p-2 ${isdark ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-700"}`}>
              <Camera size={18} />
            </button>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">Name</label>
              <Input placeholder="Aarav Sharma" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>
              <Input placeholder="aarav@example.com" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Currency</label>
              <select className={`w-full rounded-xl border p-3 text-sm ${isdark ? "border-slate-800 bg-slate-950 text-white" : "border-slate-200 bg-slate-50 text-slate-900"}`}>
                <option>INR</option>
                <option>USD</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Monthly Budget</label>
              <Input placeholder="₹30,000" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <div className={`rounded-2xl p-3 ${isdark ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-50 text-emerald-600"}`}>
              <Lock size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Change password</h3>
              <p className={`text-sm ${isdark ? "text-slate-400" : "text-slate-500"}`}>Keep your account secure</p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <Input placeholder="Current password" type="password" />
            <Input placeholder="New password" type="password" />
            <Input placeholder="Confirm new password" type="password" />
            <Button variant="primary">Update Password</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;