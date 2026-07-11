import React from "react";

const Input = React.forwardRef(({ type, placeholder, ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref} // Ye ref lagana zaroori hai!
      placeholder={placeholder}
      {...props}
      className="w-full p-3 text-sm rounded-xl border dark:bg-slate-950 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
    />
  );
});

Input.displayName = "Input";
export default Input;
