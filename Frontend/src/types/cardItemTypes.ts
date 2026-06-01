export interface BaseItem {
  id: number;
  title: string;
  date: string;
  color: string;
  description: string;
  url: string;
}

export interface ProjectsItem extends BaseItem {
  techStack: string;
  star: number;
}

export interface BlogItem extends BaseItem {
  tag: string;
}

export interface TechStack {
  name: string;
  color: string;
}

export interface blogDataItem {
  id: number;
  date: string;
  tag: string;
  title: string;
  description: string;
  url: string;
  techStack: TechStack[];
  wordCount: number;
  views: number;
  comments: number;
  star: number;
  cover: string;
}

export type CardItem = BaseItem | ProjectsItem | BlogItem;
