import React from "react";

const Input = React.forwardRef(({ type = "text", placeholder, className = "", ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      placeholder={placeholder}
      {...props}
      className={`w-full p-3 text-sm rounded-xl border font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all
        dark:bg-slate-950 dark:border-slate-800 dark:text-white dark:placeholder-slate-600
        bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 ${className}`}
    />
  );
});

Input.displayName = "Input";

export default Input;
