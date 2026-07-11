import { useThemeStore } from "../store/store";
import Card from "../components/ui/Card";

const About = () => {
  const { isdark } = useThemeStore();

  return (
    <div className={`w-full max-w-4xl mx-auto transition-colors duration-300 ${isdark ? 'text-white' : 'text-slate-900'}`}>

      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-emerald-500 tracking-tight mb-4">
          About ExpenseTracker
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
          Hum logon ko unke paiso par poora control dene aur ek behtar financial future banane me madad karte hain.
        </p>
      </div>

      {/* Grid Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card>
          <div className="text-3xl mb-3">🎯</div>
          <h3 className="text-lg font-bold text-emerald-400 mb-2">Our Mission</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Warren Buffett ne kaha tha, pehle save karo fir kharch karo. Hum wahi aadat aapke daily routine me aasan banana chahte hain.
          </p>
        </Card>

        <Card>
          <div className="text-3xl mb-3">⚡</div>
          <h3 className="text-lg font-bold text-blue-400 mb-2">Fast & Secure</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Aapka data ekdum safe hai. Zustand aur modern backend wiring ke sath aapko milti hai super-fast performance.
          </p>
        </Card>
      </div>

      {/* Tech Stack Badge (Industry Standard Overview) */}
      <div className={`p-6 rounded-2xl border text-center ${isdark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
        <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Powered By Modern Tech</h4>
        <div className="flex flex-wrap justify-center gap-3 text-xs font-bold">
          <span className="px-3 py-1.5 bg-slate-800 text-cyan-400 rounded-lg border border-slate-700">React 19</span>
          <span className="px-3 py-1.5 bg-slate-800 text-sky-400 rounded-lg border border-slate-700">Tailwind CSS</span>
          <span className="px-3 py-1.5 bg-slate-800 text-purple-400 rounded-lg border border-slate-700">Zustand</span>
          <span className="px-3 py-1.5 bg-slate-800 text-emerald-400 rounded-lg border border-slate-700">Node/Express</span>
        </div>
      </div>
    </div>
  );
};

export default About;
