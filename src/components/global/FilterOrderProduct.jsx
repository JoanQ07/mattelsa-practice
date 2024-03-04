import React, { useEffect, useState } from "react";
import { useProducts } from "@/store";

const FilterOrderProduct = ({ style }) => {
  const [selectedValue, setSelectedValue] = useState("none");
  const { refreshProducts } = useProducts();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    selectedValue != "none" && refreshProducts({ orderBy: selectedValue });
  }, [selectedValue]);

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
        <option value="none">Relevancia</option>
        <option value="desc">Mayor precio</option>
        <option value="asc">Menor precio</option>
      </select>
    </div>
  );
};

export default FilterOrderProduct;
