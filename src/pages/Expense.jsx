import { useState } from "react";
import { useThemeStore } from "../store/store";
import { useExpenseStore } from "../store/useExpenseStore"; // 1. Store import kiya
import Card from "../components/ui/Card";
import ExpenseForm from "../components/ExpenseForm";

const Expenses = () => {
  const { isdark } = useThemeStore();
  // 2. Zustand se state aur delete action nikal liya
  const { transactions, deleteTransaction } = useExpenseStore();

  // Form modal ko open/close karne ki state
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className={`p-8 w-full min-h-screen transition-colors duration-300 ${isdark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>

      {/* Top Header Area */}
      <div className="flex justify-between items-center mb-6">
        <h2 className={`text-2xl font-extrabold tracking-tight ${isdark ? 'text-white' : 'text-slate-800'}`}>
          All Expenses & Incomes
        </h2>
        {/* ➕ Add Expense Button */}
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-xl shadow-lg transition-all active:scale-95"
        >
          ➕ Add New
        </button>
      </div>

      {/* 📜 Transactions List */}
      <div className="space-y-3">
        {transactions.length === 0 ? (
          <p className="text-slate-500 text-center py-8">Koi transaction nahi hai bhai, kharch karo! 💸</p>
        ) : (
          transactions.map((tx) => (
            <div
              key={tx.id}
              className={`p-4 rounded-xl border flex justify-between items-center shadow-sm transition-all
                ${isdark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}
            >
              <div>
                <h4 className="font-bold text-sm sm:text-base">{tx.title}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-slate-400">
                    {tx.category}
                  </span>
                  <span className="text-xs text-slate-500">{tx.date}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className={`text-lg font-black ${tx.type === 'income' ? 'text-emerald-500' : 'text-rose-500'}`}>
                  {tx.type === 'income' ? '+' : '-'} ₹{tx.amount.toLocaleString()}
                </span>
                {/* 🗑️ Live Delete Button Action */}
                <button
                  onClick={() => deleteTransaction(tx.id)}
                  className="text-slate-500 hover:text-rose-500 transition-colors p-1 text-lg"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 🎭 POPUP MODAL FOR FORM */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-md animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button Inside Modal */}
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white z-10 font-bold bg-slate-800 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
            {/* Form Component */}
            <ExpenseForm onClose={() => setIsFormOpen(false)} />
          </div>
        </div>
      )}

    </div>
  );
};

export default Expenses;
