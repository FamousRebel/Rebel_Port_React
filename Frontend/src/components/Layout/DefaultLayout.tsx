import { Outlet, useNavigate, type OutletProps } from "react-router-dom";
import type { LayoutProps } from "../../types/LayoutProps";
import Header from "@/components/Layout/Header";

interface DefaultLayoutProps extends OutletProps, LayoutProps {}

const DefaultLayout = (props: DefaultLayoutProps) => {
  const { children, title, className, ...rest } = props;
  const navigate = useNavigate();

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
