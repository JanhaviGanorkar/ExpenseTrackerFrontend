import { Outlet } from 'react-router-dom';
import Sidebar from './constants/Sidbar';
import Footer from './components/Footer';
import { useThemeStore } from './store/store';

export default function Layout() {
  const { isdark } = useThemeStore();

  return (
    <div className={`min-h-screen flex flex-col md:flex-row transition-colors duration-300 ${isdark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen bg-transparent">

        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>

    </div>
  );
}
