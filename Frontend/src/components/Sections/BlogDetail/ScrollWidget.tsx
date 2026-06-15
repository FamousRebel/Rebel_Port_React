import React, { useEffect, useState, useCallback } from "react";

// ============================================================
// 类型定义
// ============================================================

interface ScrollWidgetProps {
  /** 返回列表的链接 */
  backToListUrl?: string;
  /** 评论区锚点ID */
  commentsSectionId?: string;
}

const ScrollWidget: React.FC<ScrollWidgetProps> = ({
  backToListUrl = "/blog",
  commentsSectionId = "comments-section",
}) => {
  const [readingProgress, setReadingProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0) {
      setReadingProgress(
        Math.min(Math.round((scrollTop / docHeight) * 100), 100),
      );
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // TODO: 接入hooks/API - 返回顶部
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const circumference = 2 * Math.PI * 21;
  const offset = circumference - (readingProgress / 100) * circumference;

  return (
    <div className="fixed bottom-10 right-10 flex items-center gap-4 z-50">
      <div className="flex flex-col gap-4">
        {/* 返回列表 */}
        <a
          className="w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-md border border-slate-200 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all group"
          href={backToListUrl}
          title="返回列表"
        >
          <div className="w-5 h-5 bg-gray-200 rounded opacity-80 group-hover:opacity-100 transition-opacity" />
        </a>

        {/* 前往评论 */}
        <a
          className="w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-md border border-slate-200 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all group"
          href={`#${commentsSectionId}`}
          title="前往评论"
        >
          <div className="w-5 h-5 bg-[#13a4ec]/20 rounded group-hover:bg-[#13a4ec]/30 transition-colors" />
        </a>

        {/* 返回顶部 + 进度环 */}
        <button
          className="relative w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-md border border-slate-200 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all group overflow-hidden flex-col"
          onClick={scrollToTop}
          title="返回顶部"
        >
          <svg className="absolute inset-0 w-full h-full -rotate-90 p-0.5">
            <circle
              className="text-slate-100"
              cx="24"
              cy="24"
              fill="transparent"
              r="21"
              stroke="currentColor"
              strokeWidth="2.5"
            />
            <circle
              className="text-[#13a4ec] transition-all duration-300"
              cx="24"
              cy="24"
              fill="transparent"
              r="21"
              stroke="currentColor"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              strokeWidth="2.5"
            />
          </svg>
          <div className="relative flex flex-col items-center justify-center">
            <span className="text-[9px] font-black text-[#13a4ec] tabular-nums tracking-tighter leading-none mb-0.5">
              {readingProgress}%
            </span>
            <div className="w-[14px] h-[14px] bg-[#13a4ec]/30 rounded group-hover:bg-[#13a4ec]/50 transition-colors" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ScrollWidget;
