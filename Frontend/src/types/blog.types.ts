export interface TechStack {
  name: string;
  color: string;
}

export interface BaseBlogItem {
  id: number;
  title: string;
  date: string;
  color: string;
  description: string;
  url: string;
  tag: string;
}

export interface BlogItem extends BaseBlogItem {
  techStack: TechStack[];
  wordCount: number;
  views: number;
  comments: number;
  star: number;
  cover: string;
}
