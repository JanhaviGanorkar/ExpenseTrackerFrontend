function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 text-slate-100 py-10 px-6 font-sans mt-auto border-t border-slate-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">

        {/* Left Side: App Intro */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-2xl font-black text-emerald-400 mb-3 flex items-center justify-center md:justify-start gap-2">
            <span>💰</span> ExpenseTracker
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm mx-auto md:mx-0">
            Apne kharchon ka hisab rakhein, paise bachayein aur financial freedom paayein.
          </p>
        </div>

        {/* Right Side: Motivation Quote */}
        <div className="flex-1 min-w-[250px] border-t md:border-t-0 md:border-l border-slate-800 pt-6 md:pt-0 md:pl-12">
          <h4 className="text-xs font-bold text-amber-400 mb-2 uppercase tracking-widest">
            Smart Tip
          </h4>
          <p className="text-sm text-slate-400 italic leading-relaxed max-w-md mx-auto md:mx-0">
            "Do not save what is left after spending, but spend what is left after saving."
          </p>
        </div>
      </div>

      {/* Horizontal Divider Line */}
      <div className="w-full max-w-6xl mx-auto border-t border-slate-900 my-8"></div>

      {/* Copyright Text */}
      <p className="text-xs text-slate-500 text-center font-medium">
        © {currentYear} ExpenseTracker. Made with ❤️ by You. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
