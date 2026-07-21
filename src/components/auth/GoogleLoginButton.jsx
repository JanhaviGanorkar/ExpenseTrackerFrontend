import React from "react";

const GoogleLoginButton = ({ onClick, loading = false, disabled = false }) => {
  const isDisabled = disabled || loading;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      aria-busy={loading}
      className={`group relative flex w-full items-center justify-center gap-3 rounded-xl border px-4 py-3 text-sm font-semibold shadow-sm transition-all duration-200 ${
        isDisabled
          ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400 shadow-none dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-500"
          : "border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/70 active:scale-[0.98] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:shadow-slate-950/30"
      }`}
    >
      <span className="absolute inset-0 rounded-xl bg-linear-to-r from-emerald-500/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

      <span className="relative flex h-5 w-5 items-center justify-center">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            d="M21.6 12.23c0-.79-.07-1.54-.2-2.27H12v4.3h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.9-1.75 2.98-4.33 2.98-7.55Z"
            fill="#4285F4"
          />
          <path
            d="M12 22c2.7 0 4.96-.9 6.62-2.43l-3.24-2.5c-.9.6-2.04.96-3.38.96-2.6 0-4.8-1.76-5.59-4.12H3.07v2.58A10 10 0 0 0 12 22Z"
            fill="#34A853"
          />
          <path
            d="M6.41 13.91A5.98 5.98 0 0 1 6.41 10.1V7.52H3.07a10 10 0 0 0 0 12.78l3.34-2.59Z"
            fill="#FBBC05"
          />
          <path
            d="M12 6.03c1.47 0 2.8.5 3.84 1.49l2.88-2.88A9.96 9.96 0 0 0 12 2a10 10 0 0 0-8.93 5.52l3.34 2.59C7.2 7.79 9.4 6.03 12 6.03Z"
            fill="#EA4335"
          />
        </svg>
      </span>

      <span className="relative">
        {loading ? "Redirecting..." : "Continue with Google"}
      </span>

      {loading ? (
        <span className="relative h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-emerald-500" />
      ) : null}
    </button>
  );
};

export default GoogleLoginButton;
