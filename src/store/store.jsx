import { create } from 'zustand';

export const useUiStore = create((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  closeSidebar: () => set({ isSidebarOpen: false }),
  openSidebar: () => set({ isSidebarOpen: true }),
}));

export const useThemeStore = create((set) => ({
  isdark: true,
  toggleTheme: () => set((state) => ({ isdark: !state.isdark })),
  lightTheme: () => ({ isdark: false }),
  darkTheme: () => ({isdark: true}),
}));
