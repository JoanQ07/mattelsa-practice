import { Link } from "react-router-dom";
import React from "react";

const menu = ({ listNav }) => {
  const navigation = listNav.map((item) => (
    <Link className="p-3" to={item.to} key={item.key}>
      <span> {item.text} </span>
    </Link>
  ));

  return (
    <div className="flex flex-col w-[200px]">
      <div className="bg-[#313131] p-2 text-center">
        <span className="text-white font-semibold">Hola, Joan</span>
      </div>
      {navigation}
    </div>
  );
};

export default menu;
