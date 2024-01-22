import ContainerViewPanel from "@/components/panel/ContainerViewPanel";
import Menu from "@/components/panel/Menu";
import { Outlet } from "react-router-dom";
import { listMenuUser } from "@/helper";
import React from "react";

const HomeUser = () => {
  return <ContainerViewPanel Menu={<Menu listNav={listMenuUser} />} Outlet={<Outlet />} />;
};

export default HomeUser;
