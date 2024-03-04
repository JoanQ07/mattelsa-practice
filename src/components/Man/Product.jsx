import { useState } from "react";
import "../../index.css";

const Product = ({ product }) => {
  const imgDefault = `http://localhost:3000/static/${product.id}-img-01.webp`;
  const imgHover = `http://localhost:3000/static/${product.id}-img-02.webp`;

  const [img, setImg] = useState(imgDefault);

  return (
    <div
      onMouseLeave={() => setImg(imgDefault)}
      onMouseEnter={() => setImg(imgHover)}
      className="flex flex-col"
    >
      <img src={img} className="user-drag hover:cursor-pointer" width={500} />
      <span className="font-semibold capitalize">{product.classProduct}</span>
      <span className="text-sm text-zinc-700">
        {product.price.toLocaleString("es-CO", {
          style: "currency",
          currency: "COP",
        })}
      </span>
    </div>
  );
};

export default Product;
