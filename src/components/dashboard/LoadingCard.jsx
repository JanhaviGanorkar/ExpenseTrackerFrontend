import { useThemeStore } from '../../store/store';

function LoadingCard() {
  const { isdark } = useThemeStore();

  return (
    <div className={`animate-pulse rounded-3xl border p-5 shadow-sm transition-all duration-300 ${isdark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
      <div className="mb-4 h-6 w-1/3 rounded-lg bg-slate-200 dark:bg-slate-700" />
      <div className="flex flex-col gap-4">
        <div className="h-16 rounded-3xl bg-slate-200 dark:bg-slate-700" />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="h-12 rounded-3xl bg-slate-200 dark:bg-slate-700" />
          <div className="h-12 rounded-3xl bg-slate-200 dark:bg-slate-700" />
        </div>
      </div>
    </div>
  );
}

export default LoadingCard;
