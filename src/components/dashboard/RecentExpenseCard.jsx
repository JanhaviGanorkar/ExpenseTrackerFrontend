import { useThemeStore } from '../../store/store';

function RecentExpenseCard({ categoryIcon, expenseName, category, date, amount }) {
  const { isdark } = useThemeStore();

  return (
    <div className={`flex items-center justify-between rounded-2xl border p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 ${isdark ? 'border-slate-800 bg-slate-900/80 text-white' : 'border-slate-200 bg-white text-slate-900'}`}>
      <div className="flex items-center gap-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${isdark ? 'bg-slate-800' : 'bg-slate-100'}`}>
          {categoryIcon}
        </div>
        <div>
          <p className="text-sm font-semibold">{expenseName}</p>
          <p className="text-xs text-slate-400">{category} • {date}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold text-emerald-500">{amount}</p>
      </div>
    </div>
  );
}

export default RecentExpenseCard;
