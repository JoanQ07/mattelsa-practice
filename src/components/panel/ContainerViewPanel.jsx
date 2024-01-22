import React from "react";

const ContainerViewPanel = ({ Menu, Outlet }) => {
  return (
    <div className="flex justify-center w-screen h-[100%] p-10">
      {Menu}
      <div className="w-[50%] flex justify-start">{Outlet}</div>
    </div>
  );
};

export default ContainerViewPanel;
