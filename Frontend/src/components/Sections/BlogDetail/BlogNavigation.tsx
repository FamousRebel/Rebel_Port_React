import React from "react";

// ============================================================
// 类型定义（待从公共 types 迁移）
// ============================================================
export interface AdjacentPost {
  id: number;
  title: string;
  url: string; // 跳转链接
}

// TODO: AdjacentPost 等待从公共 types 迁移

interface BlogNavigationProps {
  /** 上一篇文章 */
  prevPost?: AdjacentPost;
  /** 下一篇文章 */
  nextPost?: AdjacentPost;
}

const BlogNavigation: React.FC<BlogNavigationProps> = ({
  prevPost,
  nextPost,
}) => {
  return (
    <div className="border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 mt-2">
      {/* 上一篇 */}
      {prevPost ? (
        <a
          className="group flex items-center gap-4 p-6 bg-white rounded-xl border border-slate-100 hover:border-[#13a4ec]/30 hover:shadow-md transition-all"
          href={prevPost.url}
        >
          <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#13a4ec]/10 group-hover:text-[#13a4ec] transition-colors flex-shrink-0">
            <div className="w-5 h-5 bg-gray-200 rounded" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
              上一篇
            </p>
            <h4 className="font-bold text-slate-900 text-sm group-hover:text-[#13a4ec] transition-colors line-clamp-1">
              {prevPost.title}
            </h4>
          </div>
        </a>
      ) : (
        <div className="p-6 bg-white rounded-xl border border-slate-100 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 flex-shrink-0">
            <div className="w-5 h-5 bg-gray-200 rounded" />
          </div>
          <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
            没有更早的文章了
          </p>
        </div>
      )}

      {/* 下一篇 */}
      {nextPost ? (
        <a
          className="group flex items-center justify-between gap-4 p-6 bg-white rounded-xl border border-slate-100 hover:border-[#13a4ec]/30 hover:shadow-md transition-all text-right"
          href={nextPost.url}
        >
          <div className="order-2 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#13a4ec]/10 group-hover:text-[#13a4ec] transition-colors flex-shrink-0">
            <div className="w-5 h-5 bg-gray-200 rounded" />
          </div>
          <div className="order-1">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
              下一篇
            </p>
            <h4 className="font-bold text-slate-900 text-sm group-hover:text-[#13a4ec] transition-colors line-clamp-1">
              {nextPost.title}
            </h4>
          </div>
        </a>
      ) : (
        <div className="p-6 bg-white rounded-xl border border-slate-100 flex items-center justify-end gap-4">
          <div className="order-2 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 flex-shrink-0">
            <div className="w-5 h-5 bg-gray-200 rounded" />
          </div>
          <p className="order-1 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
            已经是最后一篇了
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogNavigation;
