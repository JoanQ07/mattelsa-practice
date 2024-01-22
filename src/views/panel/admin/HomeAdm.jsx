import ContainerViewPanel from "@/components/panel/ContainerViewPanel";
import Menu from "@/components/panel/Menu";
import { Outlet } from "react-router-dom";
import { listMenuAdm } from "@/helper";
import React from "react";

const HomeAdm = () => {
  return (
    <ContainerViewPanel Menu={<Menu listNav={listMenuAdm} />} Outlet={<Outlet />} />
  );
};

export default HomeAdm;
