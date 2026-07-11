import Card from "../components/ui/Card";
import { useThemeStore } from '../store/store'; // Sahi path check kar lena

const Home = () => {
  const { isdark } = useThemeStore();

  return (
    // 1. Yahan backticks (`) ka use karke classes ko sahi se wrap kiya hai
    <div className={`p-8 w-full transition-colors duration-300 ${isdark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>

      {/* 2. Heading ka color bhi dynamic kar diya taaki dark mode me safed dikhe */}
      <h2 className={`text-2xl font-extrabold mb-6 tracking-tight ${isdark ? 'text-white' : 'text-slate-800'}`}>
        My Expense Tracker Dashboard
      </h2>

      {/* Cards Container: Mobile me 1 column, Laptop par 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

        {/* Total Balance Card */}
        <Card>
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Total Balance</h3>
          <h1 className="text-3xl font-black text-emerald-500 mt-2">₹15,000</h1>
          <p className="text-xs text-slate-400 mt-1">Is mahine ki bachat</p>
        </Card>

        {/* Total Income Card */}
        <Card>
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Total Income</h3>
          <h1 className="text-3xl font-black text-blue-500 mt-2">₹20,000</h1>
          <p className="text-xs text-emerald-500 mt-1">↑ 12% pichle mahine se</p>
        </Card>

        {/* Total Expense Card */}
        <Card>
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Total Expense</h3>
          <h1 className="text-3xl font-black text-rose-500 mt-2">₹5,000</h1>
          <p className="text-xs text-rose-400 mt-1">↓ Control me hai boss</p>
        </Card>

      </div>
    </div>
  );
};

export default Home;
