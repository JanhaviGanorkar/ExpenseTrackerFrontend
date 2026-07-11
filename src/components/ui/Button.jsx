import React from "react";

function Button({ children, variant = "primary", onClick, type = "button" }) {
  // Color variants ke liye logic
  const variants = {
    primary: "bg-emerald-600 hover:bg-emerald-700 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    outline: "border border-slate-300 text-slate-700 hover:bg-slate-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 active:scale-95 shadow-sm ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;
