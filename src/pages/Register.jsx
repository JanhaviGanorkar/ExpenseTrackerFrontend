import { useState } from "react"
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useThemeStore } from "../store/store";

const Register = () => {
  const { isdark } = useThemeStore();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registering user:", { name, email, password });
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${isdark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>

      <div className={`w-full max-w-md p-8 rounded-2xl shadow-xl border transition-all duration-300
        ${isdark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-emerald-500 tracking-tight mb-2">
            💰 Create Account
          </h1>
          <p className="text-sm text-slate-400 font-medium">
            Naya account banayein aur paise track karna shuru karein
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Full Name</label>
            <Input type="text" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Email Address</label>
            <Input type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Password</label>
            <Input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="pt-2">
            <Button type="submit" bg="#10b981" className="w-full font-bold py-3 rounded-xl shadow-lg">
              Get Started
            </Button>
          </div>
        </form>

        <p className="text-center text-sm text-slate-400 mt-6 font-medium">
          Pehle se account hai?{" "}
          <a href="/login" className="text-emerald-500 font-bold hover:underline">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
