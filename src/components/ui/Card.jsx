import { useThemeStore } from '../../store/store'; // Sahi path check kar lena

function Card({ children }) {
  const { isdark } = useThemeStore();

  return (
    <div className={`flex-1 min-w-[250px] border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 m-3
      ${isdark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`}
    >
      {children}
    </div>
  );
}

export default Card;
