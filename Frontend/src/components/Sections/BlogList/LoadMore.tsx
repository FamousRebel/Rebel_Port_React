const LoadMore = () => {
  return (
    <div className="pt-10 pb-4 flex flex-col items-center justify-center gap-3">
      <div className="flex items-center gap-3 text-slate-400 dark:text-slate-500">
        <svg
          className="animate-spin h-5 w-5 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            fill="currentColor"
          ></path>
        </svg>
        <span className="text-sm font-medium tracking-wide">正在加载更多文章...</span>
      </div>
      <div className="w-32 h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div className="h-full bg-primary/30 w-1/2 animate-[shimmer_2s_infinite] rounded-full"></div>
      </div>
    </div>
  );
};

export default LoadMore;
