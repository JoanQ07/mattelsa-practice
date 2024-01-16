import Menu from "@/components/panel/menu";
import { Outlet } from "react-router-dom";
import React from "react";

const MainPanel = () => {
  return (
    <div className="w-[100%] h-[70%] py-[4rem] flex items-center justify-center">
        <div className="flex justify-around w-[70%]">
          <Menu />
          <div className="w-[500px] flex justify-start">
            <Outlet />
          </div>
      </div>
    </div>
  );
};

export default MainPanel;
