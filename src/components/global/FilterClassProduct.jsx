const FilterClassProduct = ({ listFilter }) => {
  return (
    <div className="w-[30%]">
      <div className="border-solid border-b-2 py-3">
        <span className="font-semibold text-center text-lg">Categoría</span>
      </div>
      <ul>
        {listFilter.map((item) => (
          <li key={crypto.randomUUID()}>
            <input type="checkbox" name={item.name} id={item.id} /> <span className="capitalize">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterClassProduct;
