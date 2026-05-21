export interface BaseItem {
  id: number;
  title: string;
  date: string;
  color: string;
  description: string;
  url: string;
}

export interface ProjectItem extends BaseItem {
  techStack: string;
  star: number;
}

export interface BlogItem extends BaseItem {
  tag: string;
}

export type CardItem = BaseItem | ProjectItem | BlogItem;
