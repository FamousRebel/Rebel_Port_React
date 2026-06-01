import {
  Outlet,
  useLocation,
  useNavigate,
  type OutletProps,
} from "react-router-dom";
import type { LayoutProps } from "@/types/layout.types";
import Header from "@/components/Layout/Header";
import { useEffect } from "react";

interface DefaultLayoutProps extends OutletProps, LayoutProps {}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 跳到顶部
  }, [pathname]);

  return null;
};

const DefaultLayout = (props: DefaultLayoutProps) => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>
    </>
  );
};
export default DefaultLayout;
