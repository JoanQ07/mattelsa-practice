import ContainerProduct from "@/components/Man/ContainerProduct";
import HeaderCategory from "@/components/category/HeaderCategory";

const HomeMan = () => {
  return (
    <div>
      <HeaderCategory
        titulo="Ropa para hombre"
        subtitulo="Ropa de hombre en nuestro sitio web y tiendas del país."
      />
      <ContainerProduct />
    </div>
  );
};

export default HomeMan;
