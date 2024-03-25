import FilterClassProduct from "@/components/global/FilterClassProduct";
import FilterOrderProduct from "@/components/global/FilterOrderProduct";
import HeaderCategory from "@/components/category/HeaderCategory";
import ContainerProduct from "@/components/Man/ContainerProduct";
import { listFilterMan } from "@/helper/menu/arraysFilter";

const HomeMan = () => {
  return (
    <div>
      <HeaderCategory
        titulo="Ropa para hombre"
        subtitulo="Ropa de hombre en nuestro sitio web y tiendas del país."
      />
      <div className="flex justify-center">
        <FilterClassProduct listFilter={listFilterMan} />
        <div style={{ width: "75%"}}>
          <FilterOrderProduct style="px-5" />
          <ContainerProduct />
        </div>
      </div>
    </div>
  );
};

export default HomeMan;
