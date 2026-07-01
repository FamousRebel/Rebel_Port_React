export interface TechStack {
  name: string;
  color: string;
}

export interface BaseBlogItem {
  id: number; // ID
  title: string; // 标题
  date: string; // 发布时间
  color?: string; // 颜色
  description: string; // 简述
  blogId: number; // 博客ID
  category: string; // 分类
}

export interface BlogItem extends BaseBlogItem {
  techStack: TechStack[]; // 技术栈
  wordCount: number; // 字数
  views: number; // 浏览数
  message: number; // 留言数
  star: number; // 收藏数
  cover: string; // 封面
}
