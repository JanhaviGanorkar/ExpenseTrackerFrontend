import { useThemeStore } from '../../store/store';

function BudgetProgress({ budget = 30000, spent = 12500 }) {
  const { isdark } = useThemeStore();
  const remaining = Math.max(budget - spent, 0);
  const percent = budget > 0 ? Math.min((spent / budget) * 100, 100) : 0;
  const overBudget = spent > budget;

  return (
    <div className={`rounded-3xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${isdark ? 'border-slate-800 bg-slate-900/90 text-white' : 'border-slate-200 bg-white text-slate-900'}`}>
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">Budget Progress</p>
          <h2 className="mt-2 text-xl font-semibold">{percent}% of monthly target used</h2>
        </div>
        <span className={`rounded-2xl px-3 py-2 text-sm font-semibold ${overBudget ? 'bg-rose-500/10 text-rose-500' : 'bg-emerald-500/10 text-emerald-500'}`}>
          {overBudget ? 'Over Budget' : 'On Track'}
        </span>
      </div>

      <div className={`h-3 overflow-hidden rounded-full ${isdark ? 'bg-slate-800' : 'bg-slate-100'}`}>
        <div className={`h-full rounded-full bg-gradient-to-r ${overBudget ? 'from-rose-500 to-orange-400' : 'from-emerald-500 to-lime-400'}`} style={{ width: `${percent}%` }} />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Spent</p>
          <p className="mt-2 text-lg font-semibold text-rose-500">₹{spent.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Remaining</p>
          <p className="mt-2 text-lg font-semibold text-emerald-500">₹{remaining.toLocaleString()}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm">
        <span className={isdark ? 'text-slate-400' : 'text-slate-500'}>Monthly budget</span>
        <span className={`font-semibold ${isdark ? 'text-white' : 'text-slate-900'}`}>₹{budget.toLocaleString()}</span>
      </div>
    </div>
  );
}

export default BudgetProgress;
