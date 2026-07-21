import { Search, SlidersHorizontal, Edit3, Trash2, Plus } from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import { useThemeStore } from "../store/store";

const expenses = [
  { id: 1, name: "Groceries", category: "Food", amount: "₹1,200", date: "2026-07-18", method: "Card" },
  { id: 2, name: "Fuel", category: "Travel", amount: "₹680", date: "2026-07-16", method: "Cash" },
  { id: 3, name: "Electricity Bill", category: "Bills", amount: "₹999", date: "2026-07-14", method: "UPI" },
];

const Expenses = () => {
  const { isdark } = useThemeStore();

  return (
    <div className={`min-h-full w-full p-4 transition-colors duration-300 sm:p-6 lg:p-8 ${isdark ? "text-white" : "text-slate-900"}`}>
      <div className={`mb-6 rounded-3xl border p-6 shadow-sm ${isdark ? "border-slate-800 bg-slate-900/80" : "border-slate-200 bg-white"}`}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">Expenses</p>
            <h1 className="mt-2 text-2xl font-semibold">Track every expense with clarity</h1>
            <p className={`mt-2 text-sm ${isdark ? "text-slate-400" : "text-slate-500"}`}>Review spending, filter by time and category, and manage entries quickly.</p>
          </div>
          <Button variant="primary"><Plus size={16} className="mr-2 inline" />New Expense</Button>
        </div>
      </div>

      <Card>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <label className="mb-2 block text-sm font-medium">Search</label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <Input placeholder="Search expense" className="pl-10" />
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium">Category</label>
              <select className={`w-full rounded-xl border p-3 text-sm ${isdark ? "border-slate-800 bg-slate-950 text-white" : "border-slate-200 bg-slate-50 text-slate-900"}`}>
                <option>All</option>
                <option>Food</option>
                <option>Travel</option>
                <option>Bills</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Date</label>
              <select className={`w-full rounded-xl border p-3 text-sm ${isdark ? "border-slate-800 bg-slate-950 text-white" : "border-slate-200 bg-slate-50 text-slate-900"}`}>
                <option>This month</option>
                <option>Last month</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Sort</label>
              <select className={`w-full rounded-xl border p-3 text-sm ${isdark ? "border-slate-800 bg-slate-950 text-white" : "border-slate-200 bg-slate-50 text-slate-900"}`}>
                <option>Newest</option>
                <option>Highest</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800">
          <table className="min-w-full text-left text-sm">
            <thead className={isdark ? "bg-slate-950/80" : "bg-slate-50"}>
              <tr>
                <th className="px-4 py-3 font-semibold">Expense</th>
                <th className="px-4 py-3 font-semibold">Category</th>
                <th className="px-4 py-3 font-semibold">Date</th>
                <th className="px-4 py-3 font-semibold">Amount</th>
                <th className="px-4 py-3 font-semibold">Method</th>
                <th className="px-4 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense.id} className={isdark ? "border-t border-slate-800" : "border-t border-slate-200"}>
                  <td className="px-4 py-3 font-medium">{expense.name}</td>
                  <td className="px-4 py-3 text-slate-400">{expense.category}</td>
                  <td className="px-4 py-3 text-slate-400">{expense.date}</td>
                  <td className="px-4 py-3 font-semibold text-emerald-500">{expense.amount}</td>
                  <td className="px-4 py-3 text-slate-400">{expense.method}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button className={`rounded-xl p-2 ${isdark ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-700"}`}><Edit3 size={16} /></button>
                      <button className="rounded-xl bg-rose-500/10 p-2 text-rose-500"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Expenses;