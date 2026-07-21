import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import GoogleLoginButton from "../components/auth/GoogleLoginButton";
import { useThemeStore } from "../store/store";
import { useUserStore } from "../store/useUserStore";

const Login = () => {
  const { isdark } = useThemeStore();
  const { loginUser, isLoading, error } = useUserStore();
  const navigate = useNavigate();
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    const success = await loginUser({
      email: data.email,
      password: data.password,
    });

    if (success) {
      navigate("/dashboard");
    }
  };

  const handleGoogleLogin = () => {
    setIsGoogleLoading(true);
    window.location.href = "/api/auth/google";
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${
        isdark
          ? "bg-slate-950 text-white"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      <div
        className={`w-full max-w-md p-8 rounded-2xl shadow-xl border transition-all duration-300 ${
          isdark
            ? "bg-slate-900 border-slate-800"
            : "bg-white border-slate-100"
        }`}
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-emerald-500 tracking-tight mb-2">
            💰 ExpenseTracker
          </h1>

          <p className="text-sm text-slate-400 font-medium">
            Login to your financial dashboard
          </p>
        </div>

        {error && (
          <p className="p-3 mb-4 bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-bold rounded-xl text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Email Address
            </label>

            <Input
              type="email"
              placeholder="name@example.com"
              {...register("email", {
                required: "Email to daal re baba!",
                pattern: {
                  value:
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Sahi email format daal bhai!",
                },
              })}
            />

            {errors.email && (
              <p className="text-xs text-rose-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Password
              </label>

              <a
                href="#"
                className="text-xs font-semibold text-emerald-500 hover:underline"
              >
                Forgot?
              </a>
            </div>

            <Input
              type="password"
              placeholder="••••••••"
              {...register("password", {
                required: "Password empty nahi chhod sakte!",
                minLength: {
                  value: 6,
                  message: "Password kam se kam 6 characters ka hona chahiye!",
                },
              })}
            />

            {errors.password && (
              <p className="text-xs text-rose-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              bg="#10b981"
              className="w-full font-bold py-3 rounded-xl shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-transform"
              disabled={isLoading}
            >
              {isLoading ? "Signing In... ⏳" : "Sign In"}
            </Button>
          </div>
        </form>

        <div className="mt-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            OR
          </span>
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
        </div>

        <div className="mt-4">
          <GoogleLoginButton
            onClick={handleGoogleLogin}
            loading={isGoogleLoading}
            disabled={isLoading || isGoogleLoading}
          />
        </div>

        <p className="text-center text-sm text-slate-400 mt-6 font-medium">
          Naye ho yahan?{" "}
          <Link
            to="/register"
            className="text-emerald-500 font-bold hover:underline"
          >
           Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;