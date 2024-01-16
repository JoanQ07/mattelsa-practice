import Addresses from '@/views/panel/user/Addresses';
import Profile from '@/views/panel/user/Profile';
import Orders from '@/views/panel/user/Orders';

export const routesPanel = [
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
];
