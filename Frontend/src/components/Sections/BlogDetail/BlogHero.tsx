import React from "react";

// ============================================================
// 类型定义（待从公共 types 迁移）
// ============================================================
export interface BlogPostMeta {
  id: number;
  title: string;
  coverImage: string; // 封面图URL
  publishDate: string; // 发布时间，如 "2023-10-24 14:20"
  category: string; // 分类
  wordCount: number; // 字数
  views: number; // 阅读量
  likes: number; // 点赞数
  tags: string[]; // 标签列表
}

// TODO: 以下类型待迁移到 @/types/blog.types.ts
// - BaseBlogItem 已有 id, title, date, tag 字段
// - BlogItem 已有 wordCount, views, star 字段

interface BlogHeroProps {
  /** 从API/Hooks获取的文章元数据 */
  post: BlogPostMeta;
}

const BlogHero: React.FC<BlogHeroProps> = ({ post }) => {
  return (
    <header className="relative pt-48 pb-32 overflow-hidden">
      {/* 背景图层 */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Technology background"
          className="w-full h-full object-cover"
          src={post.coverImage}
        />
        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[2px]" />
      </div>

      {/* 前景内容 */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* 返回列表 */}
        <div className="mb-8 flex justify-start">
          <a
            className="group flex items-center gap-2 text-slate-300 hover:text-white transition-all text-xs font-bold uppercase tracking-[0.2em]"
            href="/blog"
          >
            {/* TODO: 替换为实际图标 */}
            <div className="w-5 h-5 bg-gray-200 rounded group-hover:-translate-x-1 transition-transform" />
            <span>返回列表</span>
          </a>
        </div>

        {/* 标题 */}
        <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white mb-10 leading-tight drop-shadow-2xl text-center">
          {post.title}
        </h1>

        {/* 元信息行 */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-slate-200 font-medium mb-8 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-[18px] h-[18px] bg-gray-200 rounded" />
            {post.publishDate}
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[18px] h-[18px] bg-gray-200 rounded" />
            <span className="text-[#13a4ec]">{post.category}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[18px] h-[18px] bg-gray-200 rounded" />约{" "}
            {post.wordCount.toLocaleString()} 字
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[18px] h-[18px] bg-gray-200 rounded" />
            {post.views.toLocaleString()} 阅读
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[18px] h-[18px] bg-gray-200 rounded" />
            {post.likes.toLocaleString()} 点赞
          </div>
        </div>

        {/* 标签 */}
        <div className="flex items-center gap-3 justify-center">
          {post.tags.map((tag, index) => {
            const colorClasses = [
              "text-[#13a4ec]",
              "text-emerald-400",
              "text-amber-400",
            ];
            return (
              <span
                key={index}
                className={`px-4 py-1 bg-white/10 backdrop-blur-md ${colorClasses[index % colorClasses.length]} text-xs font-bold rounded-full border border-white/20 uppercase tracking-wider`}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default BlogHero;
