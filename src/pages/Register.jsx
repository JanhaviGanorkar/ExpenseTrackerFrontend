import React from "react";
import { useForm } from "react-hook-form"; // 1. React Hook Form import kiya
import { useNavigate, Link } from "react-router-dom"; // Navigation aur clean routing ke liye
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useThemeStore } from "../store/store";
import { useUserStore } from "../store/useUserStore"; // 2. User Store mangwaya

const Register = () => {
  const { isdark } = useThemeStore();
  const { registerUser, isLoading, error } = useUserStore(); // Actions aur states nikali
  const navigate = useNavigate();

  // 3. React Hook Form ko initialize kiya
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      currency: "INR",
      monthlyBudget:0
    }
  });

  // 4. Submit hone par registerUser call hoga aur fir dashboard par redirect
  const onSubmit = async (data) => {
    const success = await registerUser({
      name: data.name,
      email: data.email,
      password: data.password,
      currency: data.currency,
      monthlyBudget: Number(data.monthlyBudget)
    });
    if (success) {
      navigate("/"); // Redirecting to Dashboard summary
    }
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

        {/* ❌ Server se aaya hua validation/auth error message */}
        {error && (
          <p className="p-3 mb-4 bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-bold rounded-xl text-center animate-shake">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name Input */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Full Name</label>
            <Input
              type="text"
              placeholder="John Doe"
              {...register("name", { required: "Bhai naam daalna zaroori hai!" })}
            />
            {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name.message}</p>}
          </div>

          {/* Email Input */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Email Address</label>
            <Input
              type="email"
              placeholder="name@example.com"
              {...register("email", {
                required: "Email to daal re baba!",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Sahi email format daal bhai!"
                }
              })}
            />
            {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email.message}</p>}
          </div>

          {/* Password Input */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Password</label>
            <Input
              type="password"
              placeholder="••••••••"
              {...register("password", {
                required: "Password empty nahi chhod sakte!",
                minLength: { value: 6, message: "Kam se kam 6 character ka password bana!" }
              })}
            />
            {errors.password && <p className="text-xs text-rose-500 mt-1">{errors.password.message}</p>}
          </div>

          {/* Currency Input */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Currency</label>
            <select
              className="w-full p-3 text-sm rounded-xl border font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all bg-slate-50 border-slate-200 text-slate-900"
              {...register("currency")}
            >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>

          {/* Monthly Budget Input */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Monthly Budget</label>
            <Input
              type="number"
              placeholder="25000"
              min="0"
              {...register("monthlyBudget", {
                required: "Monthly budget daalna zaroori hai",
                min: { value: 0, message: "Budget 0 ya usse zyada hona chahiye" }
              })}
            />
            {errors.monthlyBudget && <p className="text-xs text-rose-500 mt-1">{errors.monthlyBudget.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              bg="#10b981"
              className="w-full font-bold py-3 rounded-xl shadow-lg transition-transform active:scale-[0.99]"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account... ⏳" : "Get Started"}
            </Button>
          </div>
        </form>

        {/* Industry Standard Routing Link */}
        <p className="text-center text-sm text-slate-400 mt-6 font-medium">
          Pehle se account hai?{" "}
          <Link to="/login" className="text-emerald-500 font-bold hover:underline">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
