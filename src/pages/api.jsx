import { create } from 'zustand';
import axiosInstance from '../axiosInstance'
export const useExpenseStore = create((set) => ({
  expenses: [],
  isLoading: false,
  error: null,

  fetchExpenses: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get('/expenses/getexpenses');
      set({ expenses: response.data || [], isLoading: false });
    } catch (err) {
      set({ error: err.response?.data?.message || err.message || "Failed to fetch data", isLoading: false });
    }
  },


//   addTransaction: async (newTx) => {
//     set({ error: null });
//     try {

//       const { id, ...backendData } = newTx;

//       const savedTransaction = await transactionAPI.create(backendData);
//       set((state) => ({
//         transactions: [savedTransaction, ...state.transactions]
//       }));
//     } catch (err) {
//       console.error("Add failed:", err);
//       alert(err.response?.data?.message || "Server par data save nahi ho paya!");
//     }
//   },

//   deleteTransaction: async (id) => {
//     try {
//       await transactionAPI.delete(id);

//       set((state) => ({
//         transactions: state.transactions.filter((tx) => tx.id !== id)
//       }));
//     } catch (err) {
//       console.error("Delete failed:", err);
//       alert(err.response?.data?.message || "Server se delete nahi ho paya!");
//     }
//   },
// }));
