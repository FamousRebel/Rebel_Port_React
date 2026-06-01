export interface LayoutProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

export interface BaseContentItem {
  id: number;
  title: string;
  url: string;
  description: string;
}
