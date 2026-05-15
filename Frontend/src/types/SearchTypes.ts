interface SearchTabs {
  id: number;
  name: string;
  type: "all" | "project" | "blog";
}

interface SearchItem {
  id: number;
  title: string;
  url: string;
  description: string;
  type: string;
  imgUrl: string;
}

export type { SearchTabs, SearchItem };
