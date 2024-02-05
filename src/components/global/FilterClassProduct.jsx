const FilterClassProduct = ({ listFilter }) => {
  return (
    <div className="w-[20%] p-5">
      <div className="border-solid border-b-2 py-3 ">
        <span className="font-semibold text-lg">Categoría</span>
      </div>
      <ul className="my-5">
        {listFilter.map((item) => (
          <li key={crypto.randomUUID()} className="py-1">
            <input type="checkbox" name={item.name} id={item.id} />{" "}
            <span className="capitalize">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterClassProduct;
