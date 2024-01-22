import Addresses from '@/views/panel/user/Addresses';
import Profile from '@/views/panel/user/Profile';
import HomeAdm from '@/views/panel/admin/HomeAdm';
import Orders from '@/views/panel/user/Orders';

export const routesPanelUser = [
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "orders",
    element: <Orders />,
  },
  {
    path: "addresses",
    element: <Addresses />,
  },
  {
    path: "adm",
    element: <HomeAdm />,
  },
];
