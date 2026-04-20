import { Outlet, useNavigate } from 'react-router'

const DefaultLayout = (props: any) => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => {navigate('/links')}}>Links</button>
      <Outlet />
    </div>
  )
}
export default  DefaultLayout;