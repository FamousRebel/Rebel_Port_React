import DefaultLayout from "@/components/Layout/DefaultLayout";
import type { LayoutProps } from "@/types/layout.types";

const Layout = (props: LayoutProps) => {
  const { children, ...Options } = props;
  return <DefaultLayout {...Options}>{children}</DefaultLayout>;
}; // 预留动态布局组件入口
export default Layout;
