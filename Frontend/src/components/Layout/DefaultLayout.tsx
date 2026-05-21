import { Outlet, useNavigate, type OutletProps } from "react-router-dom";
import type { LayoutProps } from "@/types/layoutProps";
import Header from "@/components/Layout/Header";

interface DefaultLayoutProps extends OutletProps, LayoutProps {}

const DefaultLayout = (props: DefaultLayoutProps) => {
  return (
    <>
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>
    </>
  );
};
export default DefaultLayout;
