import { create } from 'zustand';

export const useExpenseStore = create((set) => ({
  transactions: [
    { id: 1, title: "Salary Received", amount: 25000, type: "income", category: "Salary", date: "2026-07-01" },
    { id: 2, title: "Burgers & Pizza", amount: 650, type: "expense", category: "Food", date: "2026-07-05" },
    { id: 3, title: "Room Rent", amount: 5000, type: "expense", category: "Rent", date: "2026-07-08" },
    { id: 4, title: "Freelance Project", amount: 4500, type: "income", category: "Salary", date: "2026-07-10" },
  ],

  addTransaction: (newTx) => set((state) => ({
    transactions: [newTx, ...state.transactions]
  })),

  deleteTransaction: (id) => set((state) => ({
    transactions: state.transactions.filter((tx) => tx.id !== id)
  })),
}));
