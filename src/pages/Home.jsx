import { CreditCard, TrendingUp, Wallet, ReceiptText } from "lucide-react";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import BudgetProgress from "../components/dashboard/BudgetProgress";
import ChartContainer from "../components/dashboard/ChartContainer";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import StatsCard from "../components/dashboard/StatsCard";
import { useThemeStore } from "../store/store";
import { useUserStore } from "../store/useUserStore";

const Home = () => {
  const { isdark } = useThemeStore();
  const { user } = useUserStore();

  const recentTransactions = [
    { id: 1, expenseName: "Groceries", category: "Food", date: "Today", amount: "₹1,200" },
    { id: 2, expenseName: "Fuel", category: "Transport", date: "Yesterday", amount: "₹680" },
    { id: 3, expenseName: "Internet", category: "Bills", date: "Mon", amount: "₹999" },
  ];

  const categoryBreakdown = [
    { name: "Food", amount: "32%", color: "bg-emerald-500" },
    { name: "Travel", amount: "18%", color: "bg-sky-500" },
    { name: "Bills", amount: "25%", color: "bg-amber-500" },
    { name: "Shopping", amount: "25%", color: "bg-rose-500" },
  ];

  return (
    <div className={`min-h-full w-full p-4 transition-colors duration-300 sm:p-6 lg:p-8 ${isdark ? "text-white" : "text-slate-900"}`}>
      <DashboardHeader title="Overview" user={user} />

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Monthly Budget"
          value={`₹${user?.monthlyBudget || 30000}`}
          subtitle="Planned for this month"
          icon={<Wallet size={18} />}
          color="emerald"
          trend="On track"
          trendType="increase"
        />
        <StatsCard
          title="Total Income"
          value="₹20,000"
          subtitle="Steady and growing"
          icon={<TrendingUp size={18} />}
          color="blue"
          trend="+12%"
          trendType="increase"
        />
        <StatsCard
          title="Total Expense"
          value="₹5,000"
          subtitle="Well managed"
          icon={<ReceiptText size={18} />}
          color="rose"
          trend="-4%"
          trendType="decrease"
        />
        <StatsCard
          title="Remaining Budget"
          value="₹15,000"
          subtitle="Available today"
          icon={<CreditCard size={18} />}
          color="emerald"
          trend="Healthy"
          trendType="neutral"
        />
      </div>

      <div className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-[1.3fr_0.9fr]">
        <RecentTransactions items={recentTransactions} />

        <BudgetProgress budget={30000} spent={12500} />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <ChartContainer title="Monthly Spending Chart">
          <div className="flex h-48 items-end gap-3 rounded-2xl border border-dashed border-slate-700 p-4">
            {[45, 70, 60, 90, 80, 95].map((height, index) => (
              <div key={index} className="flex-1 rounded-t-2xl bg-gradient-to-t from-emerald-600 to-emerald-400" style={{ height: `${height}%` }} />
            ))}
          </div>
        </ChartContainer>

        <ChartContainer title="Expense By Category">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-36 w-36 items-center justify-center rounded-full border-[16px] border-emerald-500/80 border-t-slate-700" />
            <div className="flex-1 space-y-3">
              {categoryBreakdown.map((item) => (
                <div key={item.name} className="flex items-center justify-between rounded-2xl bg-slate-800/60 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className={`h-3 w-3 rounded-full ${item.color}`} />
                    <span className="text-sm text-slate-300">{item.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-white">{item.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </ChartContainer>
      </div>
    </div>
  );
};

export default Home;