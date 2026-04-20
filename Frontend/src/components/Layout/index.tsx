import DefaultLayout from "./DefaultLayout";

interface LayoutProps {
  children?: React.ReactNode;
  title?: string;
  showHeader?: boolean;
  showFooter?: boolean;
}

const Layout = (props: LayoutProps) => {
    const { children, ...Options } = props
    return (
        <DefaultLayout {...Options}>
            {children}
        </DefaultLayout>
    )
}
export default Layout;