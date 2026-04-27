import { Outlet, useNavigate, type OutletProps } from 'react-router-dom';
import type { LayoutProps } from "../../types/LayoutProps";
import Header from '../Sections/Header';


interface DefaultLayoutProps extends OutletProps, LayoutProps {
}

const DefaultLayout = (props: DefaultLayoutProps) => {

  const { children, title, className } = props;
  const navigate = useNavigate()

  return (
    <div className={className}>
      <Header />
      <Outlet />
    </div>
  )
}
export default  DefaultLayout;