import { Outlet } from 'react-router-dom';
import Sidebar from './constants/Sidebar';
import Footer from './components/Footer';
import { useThemeStore, useUiStore } from './store/store';
import Header from './components/Header';

export default function Layout() {
  const { isdark } = useThemeStore();
  const { isSidebarOpen } = useUiStore();

  return (
    <div className={`flex min-h-screen transition-colors duration-300 ${isdark ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-900'}`}>
      <Sidebar />

      <div className={`flex flex-1 flex-col min-h-screen transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
        <Header />

        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}