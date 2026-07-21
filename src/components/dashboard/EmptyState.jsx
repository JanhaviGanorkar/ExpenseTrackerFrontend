import { useThemeStore } from '../../store/store';

function EmptyState({ title = 'No Data', description = 'There is nothing to show here yet.', icon, action }) {
  const { isdark } = useThemeStore();

  return (
    <div className={`rounded-3xl border p-8 text-center transition-all duration-300 ${isdark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
        {icon || <span className="text-2xl">📭</span>}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{description}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export default EmptyState;
