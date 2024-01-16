import { createBrowserRouter } from "react-router-dom";

import MainCategory from "@/views/category/MainCategory";
import MainPanel from "@/views/panel/MainPanel";
import NoFound from "@/views/global/NoFound";
import Home from "@/views/Home";
import App from "../App";

import { routesCategory } from "./category";
import { routesPanel } from "./panel";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NoFound />,
    children: [
      {
        path: "/panel",
        element: <MainPanel />,
        errorElement: <NoFound />,
        children: [...routesPanel],
      },
      {
        path: "/home",
        element: <Home />,
        errorElement: <NoFound />,
      },
      {
        path: "/category",
        element: <MainCategory />,
        children: [...routesCategory],
      },
    ],
  },
]);

export default Router;
