import React, { useEffect } from "react";
import { useForm } from "react-hook-form"; // 1. React Hook Form import kiya
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useThemeStore } from "../store/store";
import { useExpenseStore } from "../store/useExpenseStore";

const ExpenseForm = ({ onClose }) => {
  const { isdark } = useThemeStore();
  const { addTransaction } = useExpenseStore();

  // 2. useForm hook initialize kiya aur default values set ki
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      title: "",
      amount: "",
      type: "expense",
      category: "Food",
      date: new Date().toISOString().split('T')[0]
    }
  });

  // Type aur category ko watch kar rahe hain taaki UI dynamic rahe
  const currentType = watch("type");

  // 3. Form submit custom handler
  const onSubmit = (data) => {
    addTransaction({
      id: Date.now(),
      title: data.title,
      amount: parseFloat(data.amount),
      type: data.type,
      category: data.category,
      date: data.date
    });

    reset(); // Form clear automatic!
    if (onClose) onClose();
  };

  return (
    <div className={`w-full p-6 rounded-2xl border shadow-2xl ${isdark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-100 text-slate-900'}`}>
      <h3 className="text-xl font-bold mb-5 flex items-center gap-2">📝 Add New Entry</h3>

      {/* Form Submit wrapper */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Type Toggle buttons (Income/Expense) */}
        <div className="grid grid-cols-2 gap-3 p-1 bg-slate-800/20 dark:bg-slate-950/40 rounded-xl">
          <button
            type="button"
            onClick={() => setValue("type", "expense")}
            className={`py-2 text-sm font-bold rounded-lg transition-all ${currentType === "expense" ? "bg-rose-500 text-white shadow-md" : "text-slate-400"}`}
          >
            Expense 💸
          </button>
          <button
            type="button"
            onClick={() => setValue("type", "income")}
            className={`py-2 text-sm font-bold rounded-lg transition-all ${currentType === "income" ? "bg-emerald-500 text-white shadow-md" : "text-slate-400"}`}
          >
            Income 💰
          </button>
        </div>

        {/* Title Input */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Title</label>
          <Input
            type="text"
            placeholder="KFC, Salary, etc."
            {...register("title", { required: "Bhai title daalna zaroori hai!" })}
          />
          {errors.title && <p className="text-xs text-rose-500 mt-1">{errors.title.message}</p>}
        </div>

        {/* Amount Input */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Amount</label>
          <Input
            type="number"
            placeholder="0.00"
            {...register("amount", {
              required: "Amount to daal re baba!",
              min: { value: 1, message: "Kam se kam ₹1 toh daal!" }
            })}
          />
          {errors.amount && <p className="text-xs text-rose-500 mt-1">{errors.amount.message}</p>}
        </div>

        {/* Category Select */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Category</label>
          <select
            {...register("category")}
            className={`w-full p-3 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium ${isdark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
          >
            <option value="Food">🍿 Food</option>
            <option value="Shopping">🛍️ Shopping</option>
            <option value="Rent">🏠 Rent/Bills</option>
            <option value="Salary">💼 Salary</option>
          </select>
        </div>

        {/* Date Input */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Date</label>
          <Input
            type="date"
            {...register("date", { required: true })}
          />
        </div>

        <Button
          type="submit"
          bg={currentType === "expense" ? "#f43f5e" : "#10b981"}
          className="w-full font-bold py-3 rounded-xl shadow-lg transition-transform active:scale-[0.99]"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ExpenseForm;
