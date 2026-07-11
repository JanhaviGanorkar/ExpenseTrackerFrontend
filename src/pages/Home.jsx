import Card from "../components/ui/Card";
import { useThemeStore } from '../store/store';
import { useExpenseStore } from '../store/useExpenseStore'; // 1. Sahi naya store name import kiya

const Home = () => {
  const { isdark } = useThemeStore();
  const { transactions } = useExpenseStore(); // 2. Store se transactions array nikala

  // 3. Logic ko uncomment kiya aur live data chalaya
  const totalIncome = transactions
    .filter(tx => tx.type === 'income')
    .reduce((sum, tx) => sum + tx.amount, 0);

  const totalExpense = transactions
    .filter(tx => tx.type === 'expense')
    .reduce((sum, tx) => sum + tx.amount, 0);

  const totalBalance = totalIncome - totalExpense;

  return (
    <div className={`p-8 w-full transition-colors duration-300 ${isdark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <h2 className={`text-2xl font-extrabold mb-6 tracking-tight ${isdark ? 'text-white' : 'text-slate-800'}`}>
        My Expense Tracker Dashboard
      </h2>

      {/* Pure Grid Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

        {/* Total Balance Card */}
        <Card>
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Total Balance</h3>
          <h1 className="text-3xl font-black text-emerald-500 mt-2">
            ₹{totalBalance.toLocaleString()}
          </h1>
        </Card>

        {/* Total Income Card */}
        <Card>
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Total Income</h3>
          <h1 className="text-3xl font-black text-blue-500 mt-2">
            ₹{totalIncome.toLocaleString()}
          </h1>
        </Card>

        {/* Total Expense Card */}
        <Card>
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Total Expense</h3>
          <h1 className="text-3xl font-black text-rose-500 mt-2">
            ₹{totalExpense.toLocaleString()}
          </h1>
        </Card>

      </div>
    </div>
  );
};

export default Home;
