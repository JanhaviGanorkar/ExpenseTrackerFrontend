import { Sparkles } from 'lucide-react';
import { useThemeStore } from '../../store/store';

function DashboardHeader({ title = 'Overview', user }) {
  const { isdark } = useThemeStore();

  return (
    <div className={`mb-6 rounded-3xl border p-5 shadow-sm transition-all duration-300 ${isdark ? 'border-slate-800 bg-slate-900/80 text-white' : 'border-slate-200 bg-white text-slate-900'}`}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">{title}</p>
          <h2 className="mt-2 text-2xl font-semibold">Your financial snapshot</h2>
          <p className={`mt-1 text-sm ${isdark ? 'text-slate-400' : 'text-slate-500'}`}>
            {user?.name ? `Welcome back, ${user.name}.` : 'Everything looks in order.'}
          </p>
        </div>
        <div className={`inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-medium ${isdark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
          <Sparkles size={16} />
          Healthy budget habits
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
