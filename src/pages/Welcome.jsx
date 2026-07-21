import { ArrowRight, BarChart3, BellRing, CheckCircle2, CreditCard, Lock, Sparkles, TrendingUp, Wallet2, ShieldCheck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { useThemeStore } from "../store/store";
import { useUserStore } from "../store/useUserStore";
import Footer from "../components/Footer";

const features = [
  { icon: <Wallet2 size={20} />, title: "Expense Tracking", description: "Capture every spend with a clean, simple workflow." },
  { icon: <BarChart3 size={20} />, title: "Budget Planning", description: "Set spending limits and stay aligned with your goals." },
  { icon: <TrendingUp size={20} />, title: "Analytics Dashboard", description: "Understand trends and optimize your monthly money flow." },
  { icon: <BellRing size={20} />, title: "Smart Reports", description: "Get instant updates on your habits and progress." },
  { icon: <ShieldCheck size={20} />, title: "Secure Authentication", description: "Protect your account with trusted sign-in options." },
  { icon: <CreditCard size={20} />, title: "Cloud Sync", description: "Keep your finances connected across all your devices." },
];

const benefits = ["Easy to use", "Fast", "Secure", "Beautiful Dashboard", "Budget Management", "Google Login Support"];

const stats = [
  { value: "10K+", label: "Users" },
  { value: "₹5M+", label: "Expenses Managed" },
  { value: "99.9%", label: "Secure" },
  { value: "24/7", label: "Available" },
];

const steps = ["Create Account", "Add Expenses", "Track Budget", "View Analytics"];

const testimonials = [
  { name: "Naina", role: "Freelancer", quote: "The dashboard gives me confidence and clarity in every month." },
  { name: "Rohan", role: "Student", quote: "It helped me build better spending habits without the stress." },
  { name: "Meera", role: "Small Business Owner", quote: "A polished way to review money movement and stay on top of budgets." },
];

const Welcome = () => {
  const { isdark } = useThemeStore();
  const { isAuthenticated } = useUserStore();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(isAuthenticated ? "/dashboard" : "/login");
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isdark ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900"}`}>
      <div className="mx-auto flex w-full flex-col px-4 py-6 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <header className={`rounded-full border px-4 py-3 shadow-sm ${isdark ? "border-slate-800 bg-slate-900/80" : "border-slate-200 bg-white"}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full ${isdark ? "bg-emerald-500/15 text-emerald-400" : "bg-emerald-50 text-emerald-600"}`}>
                <Wallet2 size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold">Expense Tracker</p>
                <p className={`text-xs ${isdark ? "text-slate-400" : "text-slate-500"}`}>Smart money management</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button type="button" onClick={handleLogin} className={`rounded-full px-4 py-2 text-sm font-medium transition ${isdark ? "text-slate-300 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100"}`}>Login</button>
              <button onClick={() => navigate("/register")} className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600">Get Started</button>
            </div>
          </div>
        </header>

        <main className="mt-8 space-y-8">
          <section className={`overflow-hidden rounded-[32px] border p-6 shadow-sm sm:p-8 lg:p-10 ${isdark ? "border-slate-800 bg-slate-900/80" : "border-slate-200 bg-white"}`}>
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium ${isdark ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-50 text-emerald-600"}`}>
                  <Sparkles size={16} />
                  A modern expense companion
                </div>
                <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
                  Track Every Rupee. Save More. Stress Less.
                </h1>
                <p className={`mt-4 max-w-2xl text-lg ${isdark ? "text-slate-400" : "text-slate-600"}`}>
                  Organize your spending, stay on top of your budget, and make confident financial decisions with a beautifully simple dashboard.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button onClick={() => navigate("/register")} className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600">
                    Get Started <ArrowRight size={16} />
                  </button>
                  <button type="button" onClick={handleLogin} className={`inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold transition ${isdark ? "border-slate-700 text-slate-200 hover:bg-slate-800" : "border-slate-200 text-slate-700 hover:bg-slate-100"}`}>
                    Login
                  </button>
                </div>
              </div>

              <div className={`rounded-[28px] border p-8 shadow-sm ${isdark ? "border-slate-800 bg-slate-950/70" : "border-slate-200 bg-slate-50"}`}>
                <div className="flex items-center justify-center rounded-full bg-emerald-500/15 p-6 text-emerald-400">
                  <CreditCard size={64} />
                </div>
                <div className="mt-8 space-y-3">
                  {[
                    { label: "Spending", value: "₹12,600", accent: "text-emerald-500" },
                    { label: "Budget", value: "₹30,000", accent: "text-slate-300" },
                    { label: "Remaining", value: "₹17,400", accent: "text-emerald-500" },
                  ].map((item) => (
                    <div key={item.label} className={`flex items-center justify-between rounded-2xl px-4 py-3 ${isdark ? "bg-slate-800/60" : "bg-white"}`}>
                      <span className="text-sm text-slate-400">{item.label}</span>
                      <span className={`font-semibold ${item.accent}`}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className={`group rounded-[24px] border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${isdark ? "border-slate-800 bg-slate-900/80" : "border-slate-200 bg-white"}`}>
                <div className={`inline-flex rounded-2xl p-3 ${isdark ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-50 text-emerald-600"}`}>
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className={`mt-2 text-sm leading-6 ${isdark ? "text-slate-400" : "text-slate-600"}`}>{feature.description}</p>
              </div>
            ))}
          </section>

          <section className={`rounded-[32px] border p-6 shadow-sm sm:p-8 lg:p-10 ${isdark ? "border-slate-800 bg-slate-900/80" : "border-slate-200 bg-white"}`}>
            <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className={`flex items-center justify-center rounded-[28px] border border-dashed p-10 ${isdark ? "border-slate-700 bg-slate-950/70" : "border-slate-200 bg-slate-50"}`}>
                <div className={`rounded-full p-10 ${isdark ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-50 text-emerald-600"}`}>
                  <BarChart3 size={72} />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">Why Choose Expense Tracker</p>
                <h2 className="mt-3 text-3xl font-semibold">Everything you need in one elegant workspace.</h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {benefits.map((benefit) => (
                    <div key={benefit} className={`flex items-center gap-3 rounded-2xl px-4 py-3 ${isdark ? "bg-slate-800/60" : "bg-slate-50"}`}>
                      <CheckCircle2 className="text-emerald-500" size={18} />
                      <span className="text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className={`rounded-[24px] border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 ${isdark ? "border-slate-800 bg-slate-900/80" : "border-slate-200 bg-white"}`}>
                <p className="text-3xl font-semibold text-emerald-500">{stat.value}</p>
                <p className={`mt-2 text-sm ${isdark ? "text-slate-400" : "text-slate-600"}`}>{stat.label}</p>
              </div>
            ))}
          </section>

          <section className={`rounded-[32px] border p-6 shadow-sm sm:p-8 lg:p-10 ${isdark ? "border-slate-800 bg-slate-900/80" : "border-slate-200 bg-white"}`}>
            <div className="mb-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">How It Works</p>
              <h2 className="mt-2 text-3xl font-semibold">Start in just a few steps.</h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div key={step} className={`rounded-[24px] border p-5 text-center ${isdark ? "border-slate-800 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`}>
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">{index + 1}</div>
                  <h3 className="mt-4 text-lg font-semibold">{step}</h3>
                  <p className={`mt-2 text-sm ${isdark ? "text-slate-400" : "text-slate-600"}`}>A smooth experience from the very first tap.</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className={`rounded-[24px] border p-6 shadow-sm ${isdark ? "border-slate-800 bg-slate-900/80" : "border-slate-200 bg-white"}`}>
                <p className="text-sm leading-7 text-slate-400">“{item.quote}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">{item.name.charAt(0)}</div>
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className={`text-sm ${isdark ? "text-slate-400" : "text-slate-500"}`}>{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Welcome;
