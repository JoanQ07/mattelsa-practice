import { Outlet } from "react-router-dom";
import React from "react";

const MainPanel = () => {
  return (
    <div className="flex items-center justify-center w-screen h-[70%]">
      <Outlet />
    </div>
  );
};

export default MainPanel;
