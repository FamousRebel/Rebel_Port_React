import type { BaseContentItem } from "./common.types";

interface SearchTabs {
  id: number;
  name: string;
  type: "all" | "project" | "blog";
}

interface SearchItem extends BaseContentItem {
  type: string;
  imageUrl: string;
}

export type { SearchTabs, SearchItem };
