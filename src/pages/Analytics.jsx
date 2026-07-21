import { BarChart3, PieChart, TrendingUp } from "lucide-react";
import StatsCard from "../components/dashboard/StatsCard";
import ChartContainer from "../components/dashboard/ChartContainer";
import { useThemeStore } from "../store/store";

const Analytics = () => {
  const { isdark } = useThemeStore();

  return (
    <div className={`min-h-full w-full p-4 transition-colors duration-300 sm:p-6 lg:p-8 ${isdark ? "text-white" : "text-slate-900"}`}>
      <div className={`mb-6 rounded-3xl border p-6 shadow-sm ${isdark ? "border-slate-800 bg-slate-900/80" : "border-slate-200 bg-white"}`}>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">Analytics</p>
          <h1 className="mt-2 text-2xl font-semibold">See where your money goes</h1>
          <p className={`mt-2 text-sm ${isdark ? "text-slate-400" : "text-slate-500"}`}>Review your spending patterns with curated charts and insights.</p>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <StatsCard title="Average Spend" value="₹1,450" subtitle="Per day" icon={<BarChart3 size={18} />} color="emerald" trend="Stable" trendType="increase" />
        <StatsCard title="Largest Category" value="Food" subtitle="32% of spend" icon={<PieChart size={18} />} color="blue" trend="Top" trendType="neutral" />
        <StatsCard title="Income vs Expense" value="₹15k" subtitle="Positive balance" icon={<TrendingUp size={18} />} color="emerald" trend="Healthy" trendType="increase" />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <ChartContainer title="Monthly Spending">
          <div className="flex h-48 items-end gap-3 rounded-2xl border border-dashed border-slate-700 p-4">
            {[35, 55, 60, 85, 75, 95].map((height, index) => (
              <div key={index} className="flex-1 rounded-t-2xl bg-gradient-to-t from-emerald-600 to-emerald-400" style={{ height: `${height}%` }} />
            ))}
          </div>
        </ChartContainer>

        <ChartContainer title="Expense by Category">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-36 w-36 items-center justify-center rounded-full border-[16px] border-emerald-500/80 border-t-slate-700" />
            <div className="flex-1 space-y-3">
              {[
                { name: "Food", value: "32%", color: "bg-emerald-500" },
                { name: "Travel", value: "18%", color: "bg-sky-500" },
                { name: "Bills", value: "25%", color: "bg-amber-500" },
                { name: "Shopping", value: "25%", color: "bg-rose-500" },
              ].map((item) => (
                <div key={item.name} className="flex items-center justify-between rounded-2xl bg-slate-800/60 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className={`h-3 w-3 rounded-full ${item.color}`} />
                    <span className="text-sm text-slate-300">{item.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </ChartContainer>
      </div>

      <div className="mt-6">
        <ChartContainer title="Income vs Expense">
          <div className="flex h-40 items-end gap-3 rounded-2xl border border-dashed border-slate-700 p-4">
            {[50, 70, 65, 85, 90, 80].map((height, index) => (
              <div key={index} className={`flex-1 rounded-t-2xl ${index % 2 === 0 ? "bg-emerald-500" : "bg-slate-600"}`} style={{ height: `${height}%` }} />
            ))}
          </div>
        </ChartContainer>
      </div>
    </div>
  );
};

export default Analytics;