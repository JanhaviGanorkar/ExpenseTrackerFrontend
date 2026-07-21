import { CalendarDays, Paperclip, Receipt, Sparkles } from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import { useThemeStore } from "../store/store";

const AddExpense = () => {
  const { isdark } = useThemeStore();

  return (
    <div className={`min-h-full w-full p-4 transition-colors duration-300 sm:p-6 lg:p-8 ${isdark ? "text-white" : "text-slate-900"}`}>
      <div className={`mb-6 rounded-3xl border p-6 shadow-sm ${isdark ? "border-slate-800 bg-slate-900/80" : "border-slate-200 bg-white"}`}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">Add Expense</p>
            <h1 className="mt-2 text-2xl font-semibold">Record a new expense in seconds</h1>
            <p className={`mt-2 text-sm ${isdark ? "text-slate-400" : "text-slate-500"}`}>
              Capture receipts, organize categories, and keep your budget under control.
            </p>
          </div>
          <div className={`inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-medium ${isdark ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-50 text-emerald-600"}`}>
            <Sparkles size={16} />
            Smart entry
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className={`rounded-3xl border p-6 shadow-sm ${isdark ? "border-slate-800 bg-slate-900/80" : "border-slate-200 bg-white"}`}>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">Expense name</label>
              <Input placeholder="Groceries" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Amount</label>
              <Input placeholder="₹1,200" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Category</label>
              <select className={`w-full rounded-xl border p-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 ${isdark ? "border-slate-800 bg-slate-950 text-white" : "border-slate-200 bg-slate-50 text-slate-900"}`}>
                <option>Food</option>
                <option>Travel</option>
                <option>Bills</option>
                <option>Shopping</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Payment method</label>
              <select className={`w-full rounded-xl border p-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 ${isdark ? "border-slate-800 bg-slate-950 text-white" : "border-slate-200 bg-slate-50 text-slate-900"}`}>
                <option>Credit Card</option>
                <option>Debit Card</option>
                <option>UPI</option>
                <option>Cash</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Date</label>
              <div className="relative">
                <Input placeholder="2026-07-20" />
                <CalendarDays className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Receipt upload</label>
              <div className={`flex items-center justify-center rounded-2xl border border-dashed px-4 py-5 ${isdark ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`}>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Paperclip size={16} />
                  Drop file or browse
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label className="mb-2 block text-sm font-medium">Description</label>
            <textarea rows="4" className={`w-full rounded-xl border p-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 ${isdark ? "border-slate-800 bg-slate-950 text-white" : "border-slate-200 bg-slate-50 text-slate-900"}`} placeholder="Add a short note about this expense" />
          </div>

          <div className="mt-6">
            <Button variant="primary">Add Expense</Button>
          </div>
        </div>

        <Card>
          <div className="flex items-center gap-3">
            <div className={`rounded-2xl p-3 ${isdark ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-50 text-emerald-600"}`}>
              <Receipt size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Expense summary</h3>
              <p className={`text-sm ${isdark ? "text-slate-400" : "text-slate-500"}`}>Quick overview before saving</p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between rounded-2xl bg-slate-800/50 px-3 py-3">
              <span className="text-sm text-slate-400">Today</span>
              <span className="font-semibold">3 entries</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-slate-800/50 px-3 py-3">
              <span className="text-sm text-slate-400">Estimated spending</span>
              <span className="font-semibold">₹4,800</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-slate-800/50 px-3 py-3">
              <span className="text-sm text-slate-400">Category focus</span>
              <span className="font-semibold">Food</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AddExpense;