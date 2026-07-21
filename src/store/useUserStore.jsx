import { create } from "zustand";
import { persist } from "zustand/middleware";
import { authAPI } from "../pages/authapi";

export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      setUser: (user) =>
        set({
          user,
          isAuthenticated: !!user,
        }),

      clearUser: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),

      loginUser: async (credentials) => {
        set({ isLoading: true, error: null });

        try {
          const data = await authAPI.login(credentials);

          set({
            user: data.user,
            isAuthenticated: true,
            isLoading: false,
          });

          return true;
        } catch (err) {
          set({
            error: err.message || "Login failed!",
            isLoading: false,
          });

          return false;
        }
      },

      registerUser: async (userData) => {
        set({ isLoading: true, error: null });

        try {
          const data = await authAPI.register(userData);

          set({
            user: data.user,
            isAuthenticated: true,
            isLoading: false,
          });

          return true;
        } catch (err) {
          set({
            error: err.message || "Registration failed!",
            isLoading: false,
          });

          return false;
        }
      },

      fetchCurrentUser: async () => {
        set({ isLoading: true, error: null });

        try {
          const data = await authAPI.getCurrentUser();

          set({
            user: data.user,
            isAuthenticated: true,
            isLoading: false,
          });

          return true;
        } catch (err) {
          set({
            user: null,
            isAuthenticated: false,
            isLoading: false,
          });

          return false;
        }
      },

      logoutUser: async () => {
        set({ isLoading: true, error: null });

        try {
          await authAPI.logout();

          set({
            user: null,
            isAuthenticated: false,
            isLoading: false,
          });

          return true;
        } catch (err) {
          set({
            error: err.message || "Logout failed!",
            isLoading: false,
          });

          return false;
        }
      },
    }),
    {
      name: "user-storage", // localStorage key
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);