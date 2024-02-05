import React, { useState } from "react";

const FilterOrderProduct = ({ style }) => {
  const [selectedValue, setSelectedValue] = useState("relevancia");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className={`${style} flex justify-end`}>
      <span className="text-zinc-500">Ordenar por</span>
      <select
        name="filterOrderProduct"
        id=""
        className="bg-inherit"
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="relevancia">Relevancia</option>
        <option value="desc">Mayor precio</option>
        <option value="asc">Menor precio</option>
      </select>
    </div>
  );
};

export default FilterOrderProduct;
