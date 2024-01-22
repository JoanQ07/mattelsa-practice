import HomePanelUser from "@/views/panel/user/Home";
import HomeAdm from "@/views/panel/admin/HomeAdm";
import { routesPanelUser } from "./panelUser";
import { routesPanelAdm } from "./panelAdmin";

export const routesPanel = [
  {
    path: "user",
    element: <HomePanelUser />,
    children: [...routesPanelUser],
  },
  {
    path: "admin",
    element: <HomeAdm />,
    children: [...routesPanelAdm],
  },
];
