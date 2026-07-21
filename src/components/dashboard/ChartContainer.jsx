import { useThemeStore } from '../../store/store';

function ChartContainer({ title, action, children }) {
  const { isdark } = useThemeStore();

  return (
    <div className={`rounded-3xl border p-5 shadow-sm transition-all duration-300 ${isdark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        {action && <div>{action}</div>}
      </div>
      <div>{children}</div>
    </div>
  );
}

export default ChartContainer;
