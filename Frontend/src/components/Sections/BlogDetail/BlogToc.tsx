import React from "react";

// ============================================================
// 类型定义（待从公共 types 迁移）
// ============================================================
export interface TocItem {
  id: string; // 锚点 ID
  title: string; // 目录标题
  level: 1 | 2; // 层级：1=一级标题，2=二级标题
}

// TODO: TocItem 等待从公共 types 迁移

interface BlogTocProps {
  /** 目录项列表 */
  items: TocItem[];
  /** 当前激活的锚点 */
  activeId?: string;
}

const BlogToc: React.FC<BlogTocProps> = ({ items, activeId }) => {
  return (
    <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-sm transition-all">
      <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
        <div className="w-[18px] h-[18px] bg-gray-200 rounded" />
        文章目录
      </h4>
      <div className="space-y-1">
        {items.map((item) => {
          const isActive = activeId === item.id;
          const isL1 = item.level === 1;

          return (
            <a
              key={item.id}
              className={`block text-[13px] transition-all border-l-2 py-2 ${
                isL1 ? "pl-4" : "pl-8"
              } ${
                isActive
                  ? "font-bold text-[#13a4ec] border-[#13a4ec]"
                  : "font-medium text-slate-500 hover:text-[#13a4ec] border-slate-100 hover:border-[#13a4ec]/30"
              } ${
                !isL1
                  ? "relative before:content-[''] before:absolute before:left-[-2px] before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-slate-200 before:rounded-full"
                  : ""
              }`}
              href={`#${item.id}`}
            >
              {item.title}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default BlogToc;
