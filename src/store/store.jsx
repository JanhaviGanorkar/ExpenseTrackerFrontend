import { create } from 'zustand';

// Ek dum simple global store jo sidebar ka status yaad rakhega
export const useUiStore = create((set) => ({
  isSidebarOpen: true, // By default sidebar open rahega
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
