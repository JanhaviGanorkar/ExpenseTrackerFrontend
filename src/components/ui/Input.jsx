function Input({ type = "text", placeholder, value, onChange, label }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
      />
    </div>
  );
}

export default Input;
