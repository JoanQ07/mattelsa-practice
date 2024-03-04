import { useEffect, useState } from "react";
import { useProducts } from "@/store";

const FilterClassProduct = ({ listFilter }) => {
  const { refreshProducts } = useProducts();
  const [catSelect, setCatSelect] = useState([]);

  const updateListSelect = (event) => {
    const classProduct = event.target.defaultValue;

    const existsClass = catSelect.some((el) => el === classProduct);

    if (existsClass) {
      // Si el elemento ya existe, lo eliminamos del array
      const updatedCatSelect = catSelect.filter((el) => el !== classProduct);
      setCatSelect(updatedCatSelect);

      refreshProducts({ classProduct: "none" });
    } else {
      // Si el elemento no existe, lo agregamos al array
      setCatSelect([...catSelect, classProduct]);
    }
  };

  useEffect(() => {
    catSelect.length > 0 && refreshProducts({ classProduct: catSelect });
  }, [catSelect]);

  return (
    <div className="w-[20%] p-5">
      <div className="border-solid border-b-2 py-3 ">
        <span className="font-semibold text-lg">Categoría</span>
      </div>
      <ul className="my-5">
        {listFilter.map((item) => (
          <li key={crypto.randomUUID()} className="py-1">
            <input
              defaultChecked={catSelect.some((el) => el == item.id)}
              onChange={updateListSelect}
              name={item.name}
              type="checkbox"
              value={item.id}
              id={item.id}
              className="hidden"
            />
            <label htmlFor={item.id} className="flex items-center cursor-pointer">
              <div className="w-4 h-4 border border-gray-400 rounded mr-2 flex-shrink-0">
                {catSelect.some((el) => el == item.id) && (
                  <div className="w-full h-full bg-[#484848] rounded"></div>
                )}
              </div>
              <span className="capitalize">{item.name}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterClassProduct;
