import { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useThemeStore } from "../store/store"; // Sahi path check kar lena

const Login = () => {
  const { isdark } = useThemeStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Industry Standard log for testing
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${isdark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>

      {/* Login Card Wrapper */}
      <div className={`w-full max-w-md p-8 rounded-2xl shadow-xl border transition-all duration-300
        ${isdark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}
      >
        {/* Logo / Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-emerald-500 tracking-tight mb-2">
            💰 ExpenseTracker
          </h1>
          <p className="text-sm text-slate-400 font-medium">
            Apne financial dashboard me login karein
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Email Address
            </label>
            <Input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Password
              </label>
              <a href="#" className="text-xs font-semibold text-emerald-500 hover:underline">
                Forgot?
              </a>
            </div>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <div className="pt-2">
            <Button
              type="submit"
              bg="#10b981" // Tailwind emerald-500 color
              className="w-full font-bold py-3 rounded-xl shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-transform"
            >
              Sign In
            </Button>
          </div>
        </form>

        {/* Footer Link */}
        <p className="text-center text-sm text-slate-400 mt-6 font-medium">
          Naye ho yahan?{" "}
          <a href="#" className="text-emerald-500 font-bold hover:underline">
            Account banayein
          </a>
        </p>

      </div>
    </div>
  );
};

export default Login;
