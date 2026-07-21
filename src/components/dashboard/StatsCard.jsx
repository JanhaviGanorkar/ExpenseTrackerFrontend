import { useThemeStore } from '../../store/store';

const trendStyles = {
  increase: 'text-emerald-500 bg-emerald-500/10',
  decrease: 'text-rose-500 bg-rose-500/10',
  neutral: 'text-slate-500 bg-slate-200 dark:bg-slate-700',
};

function StatsCard({ title, value, subtitle, icon, color = 'emerald', trend, trendType = 'neutral', className = '' }) {
  const { isdark } = useThemeStore();
  const trendClass = trendStyles[trendType] || trendStyles.neutral;

  return (
    <div className={`group rounded-3xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${isdark ? 'border-slate-700 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-900'} ${className}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{title}</p>
          <h2 className={`mt-3 text-3xl font-bold ${color === 'rose' ? 'text-rose-500' : color === 'blue' ? 'text-sky-500' : 'text-emerald-500'}`}>{value}</h2>
          {subtitle && <p className="mt-2 text-sm text-slate-400">{subtitle}</p>}
        </div>
        {icon && (
          <div className={`flex h-12 w-12 items-center justify-center rounded-2xl transition ${isdark ? 'bg-slate-800 text-emerald-400' : 'bg-slate-100 text-emerald-600'}`}>
            {icon}
          </div>
        )}
      </div>
      {trend && (
        <div className={`mt-4 inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-xs font-semibold ${trendClass}`}>
          <span>{trend}</span>
          <span className="text-slate-400">{trendType === 'increase' ? 'up' : trendType === 'decrease' ? 'down' : ''}</span>
        </div>
      )}
    </div>
  );
}

export default StatsCard;
