import type { BaseBlogItem } from "./blog.types";

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

export type CardItem = BaseItem | ProjectsItem | BaseBlogItem;
